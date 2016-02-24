/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React from 'react';
import classNames from 'classnames/bind';
import Styles from './Navigation.scss';
import Link from '../Link';

const cx = classNames.bind(Styles);

function Navigation() {
  return (
    <ul className={cx('Navigation')} role="menu">
      <li className={cx('Navigation-item')}>
        <a className={cx('Navigation-link')} href="/" onClick={Link.handleClick}>Home</a>
      </li>
      <li className={cx('Navigation-item')}>
        <a className={cx('Navigation-link')} href="/about" onClick={Link.handleClick}>About</a>
      </li>
    </ul>
  );
}

export default Navigation;
