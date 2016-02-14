import React, { Component, PropTypes } from 'react';
import Zoomer from 'components/Zoomer';
import SliderNav from 'components/SliderNav';
import classNames from 'classnames/bind';
import styles from 'scss/components/_slider';

const cx = classNames.bind(styles);

export default class Slider extends Component {
  render() {
    // Passing down the callback functions from props to each <Zoomer>
    const { onViewDetails, onSliderPrev, onSliderNext } = this.props;
    const apps = this.props.apps ? this.props.apps.map((app, key) => {
      return (
      <div className={cx('slide__mover')}>
        <Zoomer name={app.name}
          tagline={app.tagline}
          key ={key}
          device_image={app.device_image}
          device={app.device}
          app_preview={app.app_preview}
          onZoomerClick={onViewDetails}
           />
        <h2 className={cx('slide_title')}>{app.name}<span>{app.tagline}</span></h2>
      </div>);
    })
    : null;
    return (
      <section className={cx('slider')}>
        <div className={cx('slide')}>
          {apps}
        </div>        
      <SliderNav onSliderPrev={onSliderPrev}
        onSliderNext={onSliderNext}
        onViewDetails={onViewDetails} />
      </section>
    );
  }
}

Slider.propTypes = {
  apps: PropTypes.array.isRequired,
  onViewDetails: PropTypes.func.isRequired,
  onSliderPrev: PropTypes.func.isRequired,
  onSliderNext: PropTypes.func.isRequired
};
