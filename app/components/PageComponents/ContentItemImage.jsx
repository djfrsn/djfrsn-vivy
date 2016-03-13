import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from './ContentItemImage.scss';

const cx = classNames.bind(styles);

export default class ContentItemImage extends Component {
  render() {
    return (
      <img className={cx('content__item-img-center', 'animated', 'zoomIn')} src={this.props.src} alt={this.props.alt} />
    );
  }
}

ContentItemImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
};
