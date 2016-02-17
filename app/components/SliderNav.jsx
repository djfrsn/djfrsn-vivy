import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'scss/components/_slider';

const cx = classNames.bind(styles);

export default class SliderNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className={cx('slider__nav')}>
        <button className={cx('button', 'button--nav-prev')}><i className={cx('icon', 'icon--arrow-left')}></i><span className={cx('text-hidden')}>Previous product</span></button>
        <button className={cx('button', 'button--zoom>')}><i className={cx('icon', 'icon--zoom')}></i><span className={cx('text-hidden')}>View details</span></button>
        <button className={cx('button', 'button--nav-next')}><i className={cx('icon', 'icon--arrow-right')}></i><span className={cx('text-hidden')}>Next product</span></button>
      </nav>
    );
  }
}

SliderNav.propTypes = {
  onViewDetails: PropTypes.func,
  onSliderPrev: PropTypes.func,
  onSliderNext: PropTypes.func
};
