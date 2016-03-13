import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from './ContentItemList.scss';

const cx = classNames.bind(styles);

export default class ContentItemList extends Component {
  render() {
    return (
      <ul className={cx('content__item--list')}>
        {this.props.children}
      </ul>
    );
  }
}

ContentItemList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
