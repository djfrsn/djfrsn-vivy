import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'scss/components/_zoomer';

const cx = classNames.bind(styles);

export default class Zoomer extends Component {
  constructor(props) {
    super(props);
    this.onZoomerClick = this.onZoomerClick.bind(this);
  }

  render() {
    const appPreview = '/images/' + this.props.name + '/preview.png'; 
    return (
      <div className={cx('zoomer')} onClick={this.onZoomerClick}>
        <img className={cx('zoomer__image')} src={this.props.device_image} alt={this.props.device} />
        <div className={cx('preview')}>
          <img src={appPreview} alt={this.props.name}/>
          <div className={cx('zoomer__area zoomer__area--size-5')}></div>
        </div>
      </div>
    );
  }
}

Zoomer.propTypes = {
  device_image: Proptypes.string.isRequired,
  device: Proptypes.string.isRequired,
  //app_preview: PropTypes.string,
  name: PropTypes.string.isRequired,
  onZoomerClick: PropTypes.func.isRequired
};
