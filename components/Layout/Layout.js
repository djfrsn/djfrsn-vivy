/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import Styles from './Layout.scss';
import Navigation from '../Navigation';

const cx = classNames.bind(Styles);

function Layout({ children }) {
  return (
    <div className={cx('Layout')}>
      <Navigation />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
