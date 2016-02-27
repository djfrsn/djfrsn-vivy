import React, { Component, PropTypes } from 'react';
import Slider from 'Slider/Slider';
import Header from 'Header/Header';
import classNames from 'classnames/bind';
import dynamics from 'vendor/dynamics';
import styles from './Portfolio.scss';
import { browserHistory } from 'react-router';

const cx = classNames.bind(styles);
const bodyEl = window.document.body;
/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
class Portfolio extends Component {
  constructor(props) {
    super(props);
    // event handlers for Portfolio component
    this.onViewDetails = this.onViewDetails.bind(this);
    this.onSliderPrev = this.onSliderPrev.bind(this);
    this.onSliderNext = this.onSliderNext.bind(this);
    this.state = { zoomer: { animate: false } }; // set initial state
  }
  /*
   * Note: 'event' here refers to our own custom events. These 'events' are
   * plain objects passed through callbacks. components bubble events up to parents,
   * to just like native dom elements. Containers use these events to take action(change state) &
   * propogate state changes down to components. Your components should be dumb and avoid manipulating state.
   * Props vs State: https://github.com/uberVU/react-guide/blob/master/props-vs-state.md
   * Containers are Stateful /\ Components are Stateless
   * Thinking in React: http://facebook.github.io/react/docs/thinking-in-react.html#step-4-identify-where-your-state-should-live
   */
  onViewDetails(event) {
    // treat state as if its immutable. When changing state. State = Previous state + New state;
    this.setState({
      zoomer: {
        animate: true
      }
    });

    // this.portfolio.addEventListener('scroll', NoScroll);

    this.applyTransforms(event.component);

    dynamics.animate(bodyEl, { scale: 3, opacity: 0 }, { type: dynamics.easeInOut, duration: 800, friction: 300 });

    this.onEndTransition(event);
  }

  applyTransforms(component) {
    // zoomer area and scale value
    const componentArea = component;
    const componentAreaSize = {width: componentArea.offsetWidth, height: componentArea.offsetHeight};
    // const componentOffset = componentArea.getBoundingClientRect();
    const scaleVal = componentAreaSize.width / componentAreaSize.height < window.innerWidth / window.innerHeight ? window.innerWidth / componentAreaSize.width : window.innerHeight / componentAreaSize.height;

    // apply transform
    const trans = 'scale3d(' + scaleVal + ',' + scaleVal + ',1)';
    component.style.WebkitTransform = trans;
    component.style.transform = trans;
  }

  onEndTransition(event) {
    setTimeout(() => { // end of transition stuff
      browserHistory.push('portfolio/' + event.slug);
      dynamics.stop(bodyEl);
      dynamics.css(bodyEl, { scale: 1, opacity: 1 });

      // fix for safari (allowing fixed children to keep position)
      bodyEl.style.WebkitTransform = '';
      bodyEl.style.transform = '';
    }, 1000);
  }

  onSliderPrev() {
  }

  onSliderNext() {
  }

  render() {
    const apps = [{
      deviceImage: '/images/macbook.png',
      device: 'macbook',
      name: 'Appolo',
      permalink: 'appolo',
      tagline: 'App Portfolio for App developers'
    }];
    return (
      <div className={cx('portfolio')}>
        <Header />
        <Slider apps={apps}
          zoomer={this.state.zoomer}
          onViewDetails={this.onViewDetails}
          onSliderPrev={this.onSliderPrev}
          onSliderNext={this.onSliderNext} />
      </div>
    );
  }
}

Portfolio.propTypes = {
  zoomer: PropTypes.shape({
    animate: PropTypes.bool.isRequried
  })
};

export default Portfolio;
