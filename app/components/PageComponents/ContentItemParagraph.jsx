import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from './ContentItemParagraph.scss';

const cx = classNames.bind(styles);

export default class ContentItemParagraph extends Component {
  render() {
    return (
      <p className={cx(`content__item-${this.props.alignment}`)}>
        {this.props.children}
      </p>
    );
  }
}

ContentItemParagraph.propTypes = {
  alignment: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
