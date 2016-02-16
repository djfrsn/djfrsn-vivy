import React, { Component, PropTypes } from 'react';
import Zoomer from 'components/Zoomer';
import classNames from 'classnames/bind';
import styles from 'scss/components/_slider';

const cx = classNames.bind(styles);

export default class Slide extends Component {
  render() {
    // Passing down the callback functions from props to each <Zoomer>
    const { onViewDetails } = this.props;
    return (
        <div className={cx('slide', 'slide--current')} data-content={this.props.permalink}>
          <div className={cx('slide__mover')}>
              <Zoomer name={this.props.name}
            deviceImage={this.props.deviceImage}
            device={this.props.device}
            onZoomerClick={onViewDetails} />
          </div>
          <h2 className={cx('slide__title')}>{this.props.name}<span>{this.props.tagline}</span></h2>
        </div>    
    );
  }
}

Slide.propTypes = {
  deviceImage: PropTypes.string.isRequired,
  device: PropTypes.string.isRequired,
  permalink: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  onViewDetails: PropTypes.func.isRequired
};