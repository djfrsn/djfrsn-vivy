import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.scss';

const cx = classNames.bind(styles);

class Navigation extends React.Component {
  render() {
    return (
      <header className={cx('bp-header')}>
        <span>Dennis Jefferson<span className={cx('bp-icon', 'bp-icon-about', 'site-info-button')} data-content="Rwarr"></span></span>
        <div className={cx('site-info')}>Dev since 12</div>
        <h1>Software Developer</h1>
        <nav role="navigation">
          <a className={cx('bp-icon', 'bp-icon-child', 'hire_me_button')} data-info="Hire Me"><span>Hire Me</span></a>
          <a href="Twitter user url" className={cx('bp-icon', 'bp-icon-twitter')} data-info="kaw kaw" target="_blank"><span>@twitter.name</span></a>
          <a href="mailto:Site Email" className={cx('bp-icon', 'bp-icon-email')} data-info="email!"><span>send me e-mail</span></a>
        </nav>
      </header>
    );
  }

}

export default Navigation;
