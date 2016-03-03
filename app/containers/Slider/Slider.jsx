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
          active: slide.permalink === permalink.split('-')[1] ? true : false // follows preview-appname convention
        });
      });
      this.setState({ ...this.state, slides: slides });
    }
  }

  componentDidMount() {
    window.onpopstate = this.onBackButtonEvent;
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

  onBackButtonEvent = (e) => {
    e.preventDefault();
    // how to get dir
    // could take current browser url,get index & index of current state

    // let nextIndex;
    const params = window.location.pathname.split('-');
    const firstParam = params[0].split('/')[1];
    // let prevIndex;

    // this.state.slides.forEach((slide, key) => {
    //   if (slide.active) {
    //     console.log('prevIndex.slide.active', slide.permalink );
    //     prevIndex = key;
    //   }
    //   if ( slide.permalink === nextIndexPermalink[1] ) {
    //     console.log('nextIndex.slide.active', nextIndexPermalink[1], slide.permalink );
    //     nextIndex = key;
    //   }
    // });
    if ( firstParam === 'preview' ) {
      const slides = [];

      this.state.slides.map((slide) => {
        slides.push({ ...slide,
          active: slide.permalink === params[1] ? true : false
        });
      });

      this.setState({ slides: slides, shouldSlideUpdate: false });

      // TODO: screw figuring out which direction...the it needs to transition to the correct slide first!

      // nextIndex: 1 prevIndex: 2
      // nextIndex: 0 prevIndex: 1
      // right or left?
      // could use onEnter .... or this.props.location being passed down
      //const dir = nextIndex > prevIndex ? 'right' : 'left';

      const elem = this.getSlideElements();

      this.animate({
        dir: 'left',
        itemCurrent: elem.itemCurrent,
        currentEl: elem.currentEl,
        currentTitleEl: elem.currentTitleEl,
        itemNext: elem.itemNext,
        nextEl: elem.nextEl,
        nextTitleEl: elem.nextTitleEl
      });

      this.props.onAnimateHireMeButton(elem.current % 2 === 0);
    }
  }

  getSlideElements = () => {
    const elements = {};
    const items = this.state.slides.map((slide, key) => {
      return this.refs[`slide-${key}`];
    }); // array of slide elements
    elements.itemsTotal = items.length;

    this.state.slides.every((slide, key) => {
      if ( slide.active ) {
        console.log(this.refs)
        elements.itemCurrent = this.refs[`slide-${key}`]; // the active slide
        elements.current = key;
        return false; // break out of loop
      }
      return true;
    });

    elements.currentEl = elements.itemCurrent.slideMover;
    elements.currentTitleEl = elements.itemCurrent.slideTitle;

    if ( elements.dir === 'right' ) {
      elements.current = elements.current < elements.itemsTotal - 1 ? elements.current + 1 : 0;
    } else { // keeps track of urrent index & handles looping of slides
      elements.current = elements.current > 0 ? elements.current - 1 : elements.itemsTotal - 1;
    }

    elements.itemNext = items[elements.current];
    elements.nextEl = elements.itemNext.slideMover;
    elements.nextTitleEl = elements.itemNext.slideTitle;

    return elements;
  }

  /*
   * Note: Two contracts available to props.child components found here.
   * 1. Set ref as component display name & applyTransform will execute on your ref
   * 2. If child has slideCallback method, it will execute onViewDetails
   */
  onViewDetails = (callee) => { // using fat arrow to avoid having to bind 'this' in the constructor. *only required for your custom methods!
    // this.portfolio.addEventListener('scroll', NoScroll);
    let slug;
    let index;

    this.state.slides.every((slide, key) => {
      if (slide.active) {
        slug = slide.permalink;
        index = key;
        return false;
      }
      return true;
    });

    dynamics.animate(bodyEl, { scale: 3, opacity: 0 }, { type: dynamics.easeInOut, duration: 800 });

    const child = this.refs[`child-${index}`];
    const displayName = this.props.children[index].type.displayName;
    const childRef = child[displayName];

    // avoid applyTransforms without ref to animate
    childRef ? this.applyTransforms(childRef) : null;
    this.onEndTransition({ slug: slug });

    child[callee] ? child[callee]() : null;
  }

  applyTransforms = (component) => {
    this.setState({ animate: true });

    // component area and scale value
    const componentArea = component;
    const componentAreaSize = {width: componentArea.offsetWidth, height: componentArea.offsetHeight};
    // const componentOffset = componentArea.getBoundingClientRect();
    const scaleVal = componentAreaSize.width / componentAreaSize.height < window.innerWidth / window.innerHeight ? window.innerWidth / componentAreaSize.width : window.innerHeight / componentAreaSize.height;

    // apply transform
    const trans = `scale3d(${scaleVal},${scaleVal},1)`;
    component.style.WebkitTransform = trans;
    component.style.transform = trans;
  }

  onEndTransition = (options) => {
    setTimeout(() => { // end of transition stuff
      dynamics.stop(bodyEl);
      dynamics.css(bodyEl, { scale: 1, opacity: 1 });

      // fix for safari (allowing fixed children to keep position)
      bodyEl.style.WebkitTransform = '';
      bodyEl.style.transform = '';
      browserHistory.push(options.slug);
      // this.portfolio.removeEventListener('scroll', noscroll); //
    }, 801);
  }

  onSliderPrev = () => {
    this.navigate('left');
  }

  onSliderNext = () => {
    this.navigate('right');
  }

  navigate = (dir, pushstate = true) => {
    const elems = this.getSlideElements();
    const slides = [];

    this.state.slides.map((slide, key) => {
      slides.push({ ...slide,
        active: key === elems.itemNext.props.index ? true : false
      });
    });

    this.setState({ slides: slides, shouldSlideUpdate: false });

    pushstate ? browserHistory.push(`preview-${elems.itemNext.props.permalink}`) : undefined;

    this.animate({
      dir: dir,
      itemCurrent: elems.itemCurrent,
      currentEl: elems.currentEl,
      currentTitleEl: elems.currentTitleEl,
      itemNext: elems.itemNext,
      nextEl: elems.nextEl,
      nextTitleEl: elems.nextTitleEl
    });

    this.props.onAnimateHireMeButton(elems.current % 2 === 0);
  }

  animate( options ) {
    // animate the current element out
    dynamics.animate(options.currentEl, { opacity: 0, translateX: options.dir === 'right' ? -1 * options.currentEl.offsetWidth / 2 : options.currentEl.offsetWidth / 2, rotateZ: options.dir === 'right' ? -10 : 10 }, {
      type: dynamics.spring,
      duration: 3000,
      friction: 600,
      complete: () => {
        if ( !this.willUnmount ) {
          dynamics.css(options.itemCurrent.slide, { opacity: 0, visibility: 'hidden' });
        }
      }
    });

    // animate the current title out
    dynamics.animate(options.currentTitleEl, { translateX: options.dir === 'right' ? -250 : 250, opacity: 0 }, {
      type: dynamics.bezier,
      points: [{'x': 0, 'y': 0, 'cp': [{'x': 0.2, 'y': 1}]}, {'x': 1, 'y': 1, 'cp': [{'x': 0.3, 'y': 1}]}],
      duration: 450
    });

    // set the right properties for the next element to come in
    dynamics.css(options.itemNext.slide, { opacity: 1, visibility: 'visible' });
    dynamics.css(options.nextEl, { opacity: 0, translateX: options.dir === 'right' ? options.nextEl.offsetWidth / 2 : -1 * options.nextEl.offsetWidth / 2, rotateZ: options.dir === 'right' ? 10 : -10 });

    // animate the next element in
    dynamics.animate(options.nextEl, { opacity: 1, translateX: 0 }, {
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
    dynamics.css(options.nextTitleEl, { translateX: options.dir === 'right' ? 250 : -250, opacity: 0 });
    // animate the next title in
    dynamics.animate(options.nextTitleEl, { translateX: 0, opacity: 1 }, {
      type: dynamics.bezier,
      points: [{'x': 0, 'y': 0, 'cp': [{'x': 0.2, 'y': 1}]}, {'x': 1, 'y': 1, 'cp': [{'x': 0.3, 'y': 1}]}],
      duration: 650
    });
  }

  render() {
    // Ensure a key is set on each <Slide>, this is how react keeps track of dynamic child components, keep our own key on index also
    // Passing state as props to ensure children are stateless
    let index = 0;
    const slides = this.props.children ? React.Children.map(this.props.children, (newChild, key) => {
      const child = React.cloneElement(newChild, {
        ref: 'child-' + (index++)
      });
      const { permalink, name, tagline, active } = this.state.slides[key];
      return (<Slide active={active}
        permalink={permalink}
        name={name}
        tagline={tagline}
        key={key}
        index={key}
        ref={`slide-${key}`}
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
