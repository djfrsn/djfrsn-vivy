import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'scss/components/_zoomer';

const cx = classNames.bind(styles);

export default class Zoomer extends Component {
  constructor(props) {
    super(props);
    this.onZoomerClick = this.onZoomerClick.bind(this);
    this.applyTransforms = this.applyTransforms.bind(this);
    this.onEndTransition = this.onEndTransition.bind(this);
  }

  onZoomerClick() {
    this.applyTransforms();
    this.props.onViewDetails();
    // dispatch to next state
    //this.onEndTransition();
  }

  applyTransforms() {
    // zoomer area and scale value
    var zoomerArea = this.zoomer,
      zoomerAreaSize = {width: zoomerArea.offsetWidth, height: zoomerArea.offsetHeight},
      zoomerOffset = zoomerArea.getBoundingClientRect(),
      scaleVal = zoomerAreaSize.width/zoomerAreaSize.height < window.innerWidth/window.innerHeight ? window.innerWidth/zoomerAreaSize.width : window.innerHeight/zoomerAreaSize.height;

    // if( bodyScale && !nobodyscale ) {
    //   scaleVal /= bodyScale;
    // }
     
    // apply transform
    var trans = 'scale3d(' + scaleVal + ',' + scaleVal + ',1)';
    this.zoomer.style.WebkitTransform = trans;
    this.zoomer.style.transform = trans;
  }

  onEndTransition() {
    
  }

  render() {
    const appPreview = this.props.appPreview || '/images/' + this.props.name.toLowerCase() + '/preview.png';
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
        <img className={cx('zoomer__image')} src={this.props.deviceImage} alt={this.props.device} />
        <div className={cx('preview')}>
          <img src={appPreview} alt={this.props.name}/>
          <div className={cx(zoomerAreaClass)}></div>
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
  onViewDetails: PropTypes.func.isRequired
};
