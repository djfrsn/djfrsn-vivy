import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from './ContentItemInner.scss';

const cx = classNames.bind(styles);

export default class ContentItemInner extends Component {
  render() {
    return (
      <div className={cx('content__item-inner')}>
        {this.props.children}
      </div>
    );
  }
}

ContentItemInner.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
