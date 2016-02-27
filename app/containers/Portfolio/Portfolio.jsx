import React, { Component, PropTypes } from 'react';
import Slider from 'Slider/Slider';
import Header from 'Header/Header';
import classNames from 'classnames/bind';
import styles from './Portfolio.scss';

const cx = classNames.bind(styles);
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
    this.state = { zoomer: { animate: true } };
  }

  onViewDetails() {
    // update state & components reaction to state to make things happen...
    // add 'zoomer--active' class to .zoomer, triggers slide out anim for appi on device
    // disallow scroll on .container through noscroll function....
    // execute applyTransforms(zoomer)
    //if (bodyScale) ...
    // execute onEndTransition()
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
