import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.scss';

const cx = classNames.bind(styles);

export default class Footer extends Component {
  render() {
    return (
      <div className={cx('footer')}>
        <p>∆ 2016 Vivy</p>
      </div>
    );
  }
}
