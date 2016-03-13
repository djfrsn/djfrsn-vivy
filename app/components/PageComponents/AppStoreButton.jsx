import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from './ContentItemImage.scss';

const cx = classNames.bind(styles);

export default class AppStoreButton extends Component {
  render() {
    return (
      <a href={this.props.href}>
        <img className={cx('content__item-img-center')} src="../../images/app_store.png" style={{marginBottom: 0}} />
      </a>
    );
  }
}

AppStoreButton.propTypes = {
  href: PropTypes.string.isRequired
};
