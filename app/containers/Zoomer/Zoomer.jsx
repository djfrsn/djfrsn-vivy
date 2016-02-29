import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import dynamics from 'vendor/dynamics';
import styles from './Zoomer.scss';

const cx = classNames.bind(styles);
const bodyEl = window.document.body;

export default class Zoomer extends Component {
  constructor() {
    super();

    this.state = { animate: false };
  }

  onZoomerClick = () => {
    if ( !this.state.animate ) { // check for state.animate to prevent duplicate animations
      this.props.onViewDetails();
      this.applyTransforms();
      this.onEndTransition();
    }
  }

  applyTransforms = () => {
    this.setState({ animate: true });

    dynamics.animate(bodyEl, { scale: 3, opacity: 0 }, { type: dynamics.easeInOut, duration: 800 });
    // zoomer area and scale value
    const componentArea = this.zoomer;
    const componentAreaSize = {width: componentArea.offsetWidth, height: componentArea.offsetHeight};
    // const componentOffset = componentArea.getBoundingClientRect();
    const scaleVal = componentAreaSize.width / componentAreaSize.height < window.innerWidth / window.innerHeight ? window.innerWidth / componentAreaSize.width : window.innerHeight / componentAreaSize.height;

    // apply transform
    const trans = `scale3d(${scaleVal},${scaleVal},1)`;
    this.zoomer.style.WebkitTransform = trans;
    this.zoomer.style.transform = trans;
  }

  onEndTransition = () => {
    setTimeout(() => { // end of transition stuff
      dynamics.stop(bodyEl);
      dynamics.css(bodyEl, { scale: 1, opacity: 1 });

      // fix for safari (allowing fixed children to keep position)
      bodyEl.style.WebkitTransform = '';
      bodyEl.style.transform = '';
      // this.portfolio.removeEventListener('scroll', noscroll); //
    }, 801);
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
      <div className={zoomerClass} onClick={this.onZoomerClick} ref={(ref) => this.zoomer = ref}>
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
  permalink: PropTypes.string.isRequired,
  onViewDetails: PropTypes.func.isRequired
};
