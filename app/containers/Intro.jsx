import React from 'react';
import classNames from 'classnames/bind';
import styles from 'scss/components/_intro';

const cx = classNames.bind(styles);

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
export default class Intro extends React.Component {
  render() {
    return (
      <div className={cx('intro')}>
        <h1 className={cx('intro__header')}>Dennis</h1>
        <h5 className={cx('intro__sub_header')}>[ creates ]</h5>
        <p className={cx('intro__header_description')}>Web Apps</p>
      </div>
    );
  }
}
