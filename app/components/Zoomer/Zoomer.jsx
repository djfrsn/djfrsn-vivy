import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from './Zoomer.scss';
const cx = classNames.bind(styles);

export default class Zoomer extends Component {

  onZoomerClick = () => {
    this.props.onViewDetails({
      slug: this.props.permalink,
      component: this.zoomer
    });
  }

  render() {
    const appPreview = this.props.appPreview || '/images/' + this.props.permalink + '/preview.png';
    const zoomerClass = cx({
      'zoomer': true,
      'zoomer--active': this.props.animate
    });
    const zoomerAreaClass = cx({
      'zoomer__area': true,
      'zoomer__area--size-1': this.props.device === 'applewatch' ? true : false,
      'zoomer__area--size-2': this.props.device === 'iphone' ? true : false,
      'zoomer__area--size-3': this.props.device === 'macbook' ? true : false,
      'zoomer__area--size-4': this.props.device === 'ipad' ? true : false,
      'zoomer__area--size-5': this.props.device === 'imac' ? true : false
    });
    return (
      <div className={zoomerClass} onClick={this.onZoomerClick} ref={(ref) => this.zoomer = ref}>
        <img className={cx('zoomer__image')} src={this.props.deviceImage} alt={this.props.device}/>
        <div className={cx('preview')}>
          <img src={appPreview} alt={this.props.name}/>
          <div className={zoomerAreaClass}></div>
        </div>
      </div>
    );
  }
}

Zoomer.propTypes = {
  deviceImage: PropTypes.string.isRequired,
  device: PropTypes.string.isRequired,
  appPreview: PropTypes.string,
  animate: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  permalink: PropTypes.string.isRequired,
  onViewDetails: PropTypes.func.isRequired
};
