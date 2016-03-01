import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from './Zoomer.scss';

const cx = classNames.bind(styles);

export default class Zoomer extends Component {
  constructor() {
    super();

    this.state = { animate: false };
  }

  onZoomerClick = () => {
    this.animate();
  }

  animate = () => {
    if ( !this.state.animate ) { // check for state.animate to prevent duplicate animations
      this.setState({ animate: true });
    }
  }

  render() {
    const zoomerClass = cx({
      'zoomer': true,
      'zoomer--active': this.state.animate
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
      <div className={zoomerClass} onClick={this.onZoomerClick} ref={(ref) => this.Zoomer = ref}>
        <img className={cx('zoomer__image')} src={`/images/${this.props.device}.png`} alt={this.props.device}/>
        <div className={cx('preview')}>
          <img src={`/images/${this.props.permalink}/preview.png`} alt={this.props.name}/>
          <div className={zoomerAreaClass}></div>
        </div>
      </div>
    );
  }
}

Zoomer.propTypes = {
  device: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  permalink: PropTypes.string.isRequired
};
