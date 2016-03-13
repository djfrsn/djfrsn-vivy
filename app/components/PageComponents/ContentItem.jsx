import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from './ContentItem.scss';

const cx = classNames.bind(styles);

export default class ContentItem extends Component {
  render() {
    return (
      <div className={cx('content__item', `content__item-${this.props.alignment}`)}>
        {this.props.children}
      </div>
    );
  }
}

ContentItem.propTypes = {
  alignment: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
