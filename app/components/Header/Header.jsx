import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.scss';

const cx = classNames.bind(styles);

class Header extends Component {

  onShowProfile = () => {
    this.props.onToggleProfileCard(true);
  }

  render() {
    const HireMeButtonClass = cx({
      'bp-icon': true,
      'bp-icon-child': true,
      'animated': this.props.animateHireMeButton,
      'rubberBand': this.props.animateHireMeButton
    });
    return (
      <header className={cx('bp-header')}>
        <span>Dennis Jefferson<span className={cx('bp-icon', 'bp-icon-about', 'site-info-button')} data-content="Rwarr"></span></span>
        <div className={cx('site-info')}>Dev since 12</div>
        <h1>Software Developer</h1>
        <nav role="navigation">
          <a className={HireMeButtonClass} onClick={this.onShowProfile} data-info="Hire Me"><span>Hire Me</span></a>
          <a href="Twitter user url" className={cx('bp-icon', 'bp-icon-twitter')} data-info="kaw kaw" target="_blank"><span>@twitter.name</span></a>
          <a href="mailto:Site Email" className={cx('bp-icon', 'bp-icon-email')} data-info="email!"><span>send me e-mail</span></a>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  animateHireMeButton: PropTypes.bool.isRequired,
  onToggleProfileCard: PropTypes.func.isRequired
};

export default Header;
