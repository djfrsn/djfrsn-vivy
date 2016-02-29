import React, { Component, PropTypes } from 'react';
import Zoomer from 'Zoomer/Zoomer';
import classNames from 'classnames/bind';
import styles from './Slide.scss';

const cx = classNames.bind(styles);

export default class Slide extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.shouldSlideUpdate || nextProps.zoomer.animate; // return false to prevent render down the tree
  }
  render() {
    // Passing through the onViewDetails callback function from props to <Zoomer>
    const { onViewDetails } = this.props;
    const slideClass = cx({
      'slide': true,
      'slide--current': this.props.active
    });
    return (
        <div className={slideClass} data-content={this.props.permalink} ref={(ref) => this.slide = ref}>
          <div className={cx('slide__mover')} ref={(ref) => this.slideMover = ref}>
              <Zoomer name={this.props.name}
            animate={this.props.zoomer.animate}
            device={this.props.device}
            permalink={this.props.permalink}
            onViewDetails={onViewDetails} />
          </div>
          <h2 className={cx('slide__title')} ref={(ref) => this.slideTitle = ref}><pre>{this.props.name}</pre><span>{this.props.tagline}</span></h2>
        </div>
    );
  }
}

Slide.propTypes = {
  active: PropTypes.bool.isRequired,
  shouldSlideUpdate: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  device: PropTypes.string.isRequired,
  permalink: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  onViewDetails: PropTypes.func.isRequired,
  zoomer: PropTypes.shape({
    animate: PropTypes.bool.isRequried
  })
};
