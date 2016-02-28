import React, { Component, PropTypes } from 'react';
import Zoomer from 'Zoomer/Zoomer';
import classNames from 'classnames/bind';
import styles from './Slide.scss';

const cx = classNames.bind(styles);

export default class Slide extends Component {
  render() {
    // Passing through the onViewDetails callback function from props to <Zoomer>
    const { onViewDetails } = this.props;
    return (
        <div className={cx('slide', 'slide--current')} data-content={this.props.permalink}>
          <div className={cx('slide__mover')} ref={(ref) => this.slideMover = ref}>
              <Zoomer name={this.props.name}
            animate={this.props.zoomer.animate}
            deviceImage={this.props.deviceImage}
            device={this.props.device}
            permalink={this.props.permalink}
            onViewDetails={onViewDetails} />
          </div>
          <h2 className={cx('slide__title')}><pre>{this.props.name}</pre><span>{this.props.tagline}</span></h2>
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
  onViewDetails: PropTypes.func.isRequired,
  zoomer: PropTypes.shape({
    animate: PropTypes.bool.isRequried
  })
};
