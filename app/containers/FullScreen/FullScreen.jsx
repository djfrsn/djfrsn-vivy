import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from './FullScreen.scss';

/*
Handling Route Params
https://www.youtube.com/watch?v=ZBxMljq9GSE
*/

const cx = classNames.bind(styles);

class FullScreen extends Component {
  render() {
    return (
      <div className={cx('fullScreen')}>
      {this.props.routeParams.permalink}
      </div>
    );
  }
}

FullScreen.propTypes = {
  routeParams: PropTypes.shape({
    permalink: PropTypes.string.isRequried
  })
};

export default FullScreen;
