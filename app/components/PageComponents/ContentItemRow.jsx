import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from './ContentItemRow.scss';

const cx = classNames.bind(styles);

export default class ContentItemRow extends Component {
  render() {
    return (
      <ul className={cx('content__item--row')}>
        {this.props.children}
      </ul>
    );
  }
}

ContentItemRow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
