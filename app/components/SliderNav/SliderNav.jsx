import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from './SliderNav.scss';

const cx = classNames.bind(styles);

export default class SliderNav extends Component {

  onViewDetails = () => {
    this.props.onViewDetails();
  }

  onSliderPrev = () => {
    this.props.onSliderPrev();
  }

  onSliderNext = () => {
    this.props.onSliderNext();
  }

  render() {
    return (
      <nav className={cx('slider__nav')}>
        <button className={cx('button', 'button--nav-prev')} onClick={this.onSliderPrev}><i className={cx('icon', 'icon--arrow-left')}></i><span className={cx('text-hidden')}>Previous product</span></button>
        <button className={cx('button', 'button--zoom>')} onClick={this.onViewDetails}><i className={cx('icon', 'icon--zoom')}></i><span className={cx('text-hidden')}>View details</span></button>
        <button className={cx('button', 'button--nav-next')} onClick={this.onSliderNext}><i className={cx('icon', 'icon--arrow-right')}></i><span className={cx('text-hidden')}>Next product</span></button>
      </nav>
    );
  }
}

SliderNav.propTypes = {
  onViewDetails: PropTypes.func.isRequired,
  onSliderPrev: PropTypes.func.isRequired,
  onSliderNext: PropTypes.func.isRequired
};
