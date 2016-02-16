import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logOut } from 'actions/users';
import classNames from 'classnames/bind';
import styles from 'scss/components/_navigation';

const cx = classNames.bind(styles);

class Navigation extends Component {

  render() {
    const { dispatch } = this.props;
    return (
      <header className={cx('bp-header')}>
        <span>Dennis Jefferson<span className={cx('bp-icon', 'bp-icon-about', 'site-info-button')} data-content="Rwarr"></span></span>
        <div className={cx('site-info')}>Dev since 12</div>
        <h1>Full Stack Developer</h1>
        <nav role="navigation">
          <a className={cx('bp-icon', 'bp-icon-child', 'hire_me_button')} data-info='Hire Me'><span>Hire Me</span></a>
          <a href="Twitter user url" className={cx('bp-icon', 'bp-icon-twitter')} data-info='kaw kaw' target='_blank'><span>@twitter.name</span></a>
          <a href="mailto:Site Email" className={cx('bp-icon', 'bp-icon-email')} data-info='email!'><span>send me e-mail</span></a>
        </nav>
      </header>
    );
  }

}

Navigation.propTypes = {
  user: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Navigation);

// <nav className={styles.navigation} role="navigation">
//   <Link to="/" className={styles.navigation__item + ' ' + styles['navigation__item--logo']} activeClassName={styles['navigation__item--active']}>DJ</Link>
//   <Link className={styles.navigation__item} to="/journal">Journal</Link>
//   <Link to="/about" className={styles.navigation__item} activeClassName={styles['navigation__item--active']}>About</Link>
//   <Link className={styles.navigation__item} to="/projects">Projects</Link>
// </nav>