import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/_intro';

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
        <h1 className={cx('intro__header')}>Dennis Jefferson</h1>
      </div>
    );
  }
}
