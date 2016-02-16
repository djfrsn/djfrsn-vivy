import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'scss/components/_slider';

const cx = classNames.bind(styles);

const ENTER_KEY_CODE = 13;

export default class SliderNav extends Component {
  constructor(props) {
    super(props);
    this.onSave = this.onSave.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }
  /*
   * Invokes the callback passed in as onSave, allowing this component to be
   * used in different ways. I personally think this makes it more reusable.
   */
  onSave() {
    const { onEntrySave, value } = this.props;
    onEntrySave(value);
  }

  /*
   * Invokes the callback passed in as onSave, allowing this component to be
   * used in different ways. I personally think this makes it more reusable.
   */
  onChange(event) {
    const { onEntryChange } = this.props;
    onEntryChange(event.target.value);
  }

  /*
   * @param  {object} event
   */
  onKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this.onSave();
    }
  }

  render() {
    const { className, placeholder, value } = this.props;
    return (
      <nav className={cx('slider__nav')}>
        <button className={cx('button','button--nav-prev')}><i className={cx('icon','icon--arrow-left')}></i><span className={cx('text-hidden')}>Previous product</span></button>
        <button className={cx('button','button--zoom>')}><i className={cx('icon','icon--zoom')}></i><span className={cx('text-hidden')}>View details</span></button>
        <button className={cx('button','button--nav-next')}><i className={cx('icon','icon--arrow-right')}></i><span className={cx('text-hidden')}>Next product</span></button>
      </nav>
    );
  }
}

SliderNav.propTypes = {
  onViewDetails: PropTypes.func,
  onSliderPrev: PropTypes.func,
  onSliderNext: PropTypes.func
};