import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'scss/components/_zoomer';

const cx = classNames.bind(styles);

export default class Zoomer extends Component {
  constructor(props) {
    super(props);
    this.onZoomerClick = this.props.onZoomerClick.bind(this);
    //this.onZoomerClick = this.onZoomerClick.bind(this); Should be doing this...
  }

  render() {
    const appPreview = this.props.appPreview || '/images/' + this.props.name + '/preview.png'; 
    return (
      <div className={cx('zoomer')} onClick={this.onZoomerClick}>
        <img className={cx('zoomer__image')} src={this.props.deviceImage} alt={this.props.device} />
        <div className={cx('preview')}>
          <img src={appPreview} alt={this.props.name}/>
          <div className={cx('zoomer__area zoomer__area--size-5')}></div>
        </div>
      </div>
    );
  }
}

Zoomer.propTypes = {
  deviceImage: PropTypes.string.isRequired,
  device: PropTypes.string.isRequired,
  appPreview: PropTypes.string,
  name: PropTypes.string.isRequired,
  onZoomerClick: PropTypes.func.isRequired
};
