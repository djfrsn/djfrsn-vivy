import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from './SectionTitle.scss';

const cx = classNames.bind(styles);

export default class SectionTitle extends Component {
  render() {
    return (
      <h3 className={cx('section_title')}>
        {this.props.children}
      </h3>
    );
  }
}

SectionTitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
