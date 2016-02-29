import React, { Component, PropTypes } from 'react';
import Slide from 'Slide/Slide';
import SliderNav from 'SliderNav/SliderNav';
import styles from './Slider.scss';
import classNames from 'classnames/bind';
import dynamics from 'vendor/dynamics';
import { browserHistory } from 'react-router';

const cx = classNames.bind(styles);
const bodyEl = window.document.body;

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldSlideUpdate: false,
      slides: props.slides
    };
  }

  componentWillMount() { // invoked once before initial render
    const permalink = this.props.routeParams.permalink;
    if ( permalink ) {
      const slides = [];
      this.state.slides.map((slide) => {
        slides.push({ ...slide,
          active: slide.permalink === permalink.split('-')[1] ? true : false
        });
      });
      this.setState({ ...this.state, slides: slides });
    }
  }

  componentDidMount() {
    document.addEventListener( 'keydown', this.listenToKeyPress );
  }

  componentWillUnmount() {
    this.willUnmount = true; // set to prevent dynamics.js callback execution when component will unmount, calling dynamics.stop doesn't work
    document.removeEventListener( 'keydown', this.listenToKeyPress );
  }

  listenToKeyPress = ( ev ) => {
    const keyCode = ev.keyCode || ev.which;
    switch (keyCode) {
    case 37:
      this.navigate('left');
      break;
    case 39:
      this.navigate('right');
      break;
    }
  }

  onViewDetails = (options = {}) => { // using fat arrow to avoid having to bind 'this' in the constructor. *only required for your custom methods!
    if (!options.delay) { options.delay = 0; }
    // this.portfolio.addEventListener('scroll', NoScroll);
    let slug;
    console.log(this.props.children);
    // this.applyTransforms();
    this.onEndTransition();

    this.state.slides.every((slide) => {
      if (slide.active) {
        slug = slide.permalink;
        return false;
      }
      return true;
    });

    setTimeout(setTimeout(() => {
      browserHistory.push(slug);
    }, options.delay));
  }

  applyTransforms = (component) => {
    this.setState({ animate: true });

    dynamics.animate(bodyEl, { scale: 3, opacity: 0 }, { type: dynamics.easeInOut, duration: 800 });
    // zoomer area and scale value
    const componentArea = component;
    const componentAreaSize = {width: componentArea.offsetWidth, height: componentArea.offsetHeight};
    // const componentOffset = componentArea.getBoundingClientRect();
    const scaleVal = componentAreaSize.width / componentAreaSize.height < window.innerWidth / window.innerHeight ? window.innerWidth / componentAreaSize.width : window.innerHeight / componentAreaSize.height;

    // apply transform
    const trans = `scale3d(${scaleVal},${scaleVal},1)`;
    component.style.WebkitTransform = trans;
    component.style.transform = trans;
  }

  onEndTransition = () => {
    setTimeout(() => { // end of transition stuff
      dynamics.stop(bodyEl);
      dynamics.css(bodyEl, { scale: 1, opacity: 1 });

      // fix for safari (allowing fixed children to keep position)
      bodyEl.style.WebkitTransform = '';
      bodyEl.style.transform = '';
      // this.portfolio.removeEventListener('scroll', noscroll); //
    }, 801);
  }

  onSliderPrev = () => {
    this.navigate('left');
  }

  onSliderNext = () => {
    this.navigate('right');
  }

  navigate = (dir) => {
    const items = this.state.slides.map((slide) => {
      return this.refs[slide.permalink];
    }); // array of slide elements
    const itemsTotal = items.length;

    let current; // index of current item
    let itemCurrent;

    this.state.slides.every((slide, key) => {
      if ( slide.active ) {
        itemCurrent = this.refs[slide.permalink]; // the active slide
        current = key;
        return false; // break out of loop
      }
      return true;
    });

    const currentEl = itemCurrent.slideMover;
    const currentTitleEl = itemCurrent.slideTitle;

    if ( dir === 'right' ) {
      current = current < itemsTotal - 1 ? current + 1 : 0;
    } else { // keeps track of current index & handles looping of slides
      current = current > 0 ? current - 1 : itemsTotal - 1;
    }

    const itemNext = items[current];
    const nextEl = itemNext.slideMover;
    const nextTitleEl = itemNext.slideTitle;
    const slides = [];

    this.state.slides.map((slide, key) => {
      slides.push({ ...slide,
        active: key === itemNext.props.index ? true : false
      });
    });

    this.setState({ slides: slides, shouldSlideUpdate: false });

    browserHistory.push(`preview-${itemNext.props.permalink}`);

    // animate the current element out
    dynamics.animate(currentEl, { opacity: 0, translateX: dir === 'right' ? -1 * currentEl.offsetWidth / 2 : currentEl.offsetWidth / 2, rotateZ: dir === 'right' ? -10 : 10 }, {
      type: dynamics.spring,
      duration: 3000,
      friction: 600,
      complete: () => {
        if ( !this.willUnmount ) {
          dynamics.css(itemCurrent.slide, { opacity: 0, visibility: 'hidden' });
        }
      }
    });

    // animate the current title out
    dynamics.animate(currentTitleEl, { translateX: dir === 'right' ? -250 : 250, opacity: 0 }, {
      type: dynamics.bezier,
      points: [{'x': 0, 'y': 0, 'cp': [{'x': 0.2, 'y': 1}]}, {'x': 1, 'y': 1, 'cp': [{'x': 0.3, 'y': 1}]}],
      duration: 450
    });

    // set the right properties for the next element to come in
    dynamics.css(itemNext.slide, { opacity: 1, visibility: 'visible' });
    dynamics.css(nextEl, { opacity: 0, translateX: dir === 'right' ? nextEl.offsetWidth / 2 : -1 * nextEl.offsetWidth / 2, rotateZ: dir === 'right' ? 10 : -10 });

    // animate the next element in
    dynamics.animate(nextEl, { opacity: 1, translateX: 0 }, {
      type: dynamics.spring,
      duration: 3000,
      friction: 600,
      complete: () => {
        if ( !this.willUnmount ) { // State is immutable. When changing state. State = Previous state + New state;
          this.setState({ ...this.state, shouldSlideUpdate: true });
        }
      }
    });

    // set the right properties for the next title to come in
    dynamics.css(nextTitleEl, { translateX: dir === 'right' ? 250 : -250, opacity: 0 });
    // animate the next title in
    dynamics.animate(nextTitleEl, { translateX: 0, opacity: 1 }, {
      type: dynamics.bezier,
      points: [{'x': 0, 'y': 0, 'cp': [{'x': 0.2, 'y': 1}]}, {'x': 1, 'y': 1, 'cp': [{'x': 0.3, 'y': 1}]}],
      duration: 650
    });

    this.props.onAnimateHireMeButton(current % 2 === 0);
  }

  render() {
    // Ensure a key is set on each <Slide>, this is how react keeps track of dynamic child components, keep our own key on index
    // Passing state as props to ensure children are stateless
    let index = 0;
    const slides = this.props.children ? React.Children.map(this.props.children, (newChild, key) => {
      const child = React.cloneElement(newChild, {
        ref: 'child-' + (index++)
      });
      return (<Slide {...this.state.slides[key]}
        key={key}
        index={key}
        ref={this.state.slides[key].permalink}
        children={child}
        shouldSlideUpdate={this.state.shouldSlideUpdate}
        onViewDetails={this.onViewDetails} />);
    }) : null;
    return (
      <section className={cx('slider')}>
        {slides}
        <SliderNav onSliderPrev={this.onSliderPrev}
          onSliderNext={this.onSliderNext}
          onViewDetails={this.onViewDetails} />
      </section>
    );
  }
}

Slider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  onAnimateHireMeButton: PropTypes.func.isRequired,
  routeParams: PropTypes.shape({
    permalink: PropTypes.string.isRequried
  }),
  slides: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    permalink: PropTypes.string.isRequried
  }))
};
