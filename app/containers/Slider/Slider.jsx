import React, { Component, PropTypes } from 'react';
import Slide from 'Slide/Slide';
import SliderNav from 'SliderNav/SliderNav';
import classNames from 'classnames/bind';
import dynamics from 'vendor/dynamics';
import styles from './Slider.scss';

const cx = classNames.bind(styles);

export default class Slider extends Component {
  constructor() {
    super();

    this.state = {
      slides: [{
        active: true,
        deviceImage: '/images/macbook.png',
        device: 'macbook',
        name: 'Appolo',
        permalink: 'appolo',
        tagline: 'App Portfolio for App developers'
      }]
    };
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

    // animate the current element out
    dynamics.animate(currentEl, { opacity: 0, translateX: dir === 'right' ? -1 * currentEl.offsetWidth / 2 : currentEl.offsetWidth / 2, rotateZ: dir === 'right' ? -10 : 10 }, {
      type: dynamics.spring,
      duration: 3000,
      friction: 600,
      complete: () => {
        dynamics.css(itemCurrent, { opacity: 0, visibility: 'hidden' });
      }
    });

    // animate the current title out
    dynamics.animate(currentTitleEl, { translateX: dir === 'right' ? -250 : 250, opacity: 0 }, {
      type: dynamics.bezier,
      points: [{'x': 0, 'y': 0, 'cp': [{'x': 0.2, 'y': 1}]}, {'x': 1, 'y': 1, 'cp': [{'x': 0.3, 'y': 1}]}],
      duration: 450
    });

    // set the right properties for the next element to come in
    dynamics.css(itemNext, { opacity: 1, visibility: 'visible' });
    dynamics.css(nextEl, { opacity: 0, translateX: dir === 'right' ? nextEl.offsetWidth / 2 : -1 * nextEl.offsetWidth / 2, rotateZ: dir === 'right' ? 10 : -10 });

    // animate the next element in
    dynamics.animate(nextEl, { opacity: 1, translateX: 0 }, {
      type: dynamics.spring,
      duration: 3000,
      friction: 600
      // complete: () => {
      //   items.forEach(function(item) { classie.remove(item, 'slide--current'); });
      //   classie.add(itemNext, 'slide--current');
      // }
    });

    // set the right properties for the next title to come in
    dynamics.css(nextTitleEl, { translateX: dir === 'right' ? 250 : -250, opacity: 0 });
    // animate the next title in
    dynamics.animate(nextTitleEl, { translateX: 0, opacity: 1 }, {
      type: dynamics.bezier,
      points: [{'x': 0, 'y': 0, 'cp': [{'x': 0.2, 'y': 1}]}, {'x': 1, 'y': 1, 'cp': [{'x': 0.3, 'y': 1}]}],
      duration: 650
    });
  }

  render() {
    // Passing down the callback functions from props to each <Zoomer>
    const { onViewDetails, zoomer } = this.props;
    const slides = this.state.slides ? this.state.slides.map((app, key) => {
      return (<Slide key={key}
        ref={app.permalink}
        zoomer={zoomer}
        permalink={app.permalink}
        name={app.name}
        tagline={app.tagline}
        deviceImage={app.deviceImage}
        device={app.device}
        onViewDetails={onViewDetails} />);
    })
    : null;
    return (
      <section className={cx('slider')}>
        {slides}
        <SliderNav onSliderPrev={this.onSliderPrev}
          onSliderNext={this.onSliderNext}
          onViewDetails={onViewDetails} />
      </section>
    );
  }
}

Slider.propTypes = {
  onViewDetails: PropTypes.func.isRequired,
  zoomer: PropTypes.shape({
    animate: PropTypes.bool.isRequried
  })
};
