import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from './FullScreen.scss';

/*
Handling Route Params
https://www.youtube.com/watch?v=ZBxMljq9GSE
*/

const cx = classNames.bind(styles);
/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
class FullScreen extends Component {
  render() {
    return (
      <div className={cx('fullScreen')}>
      {this.props.params.permalink}
      </div>
    );
  }
}

FullScreen.propTypes = {
  params: PropTypes.object
};

export default FullScreen;
