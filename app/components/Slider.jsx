import React, { Component, PropTypes } from 'react';
import Slide from 'components/Slide';
// import SliderNav from 'components/SliderNav';
import classNames from 'classnames/bind';
import styles from 'scss/components/_slider';

const cx = classNames.bind(styles);

export default class Slider extends Component {
  render() {
    // Passing down the callback functions from props to each <Zoomer>
    const { onViewDetails, onSliderPrev, onSliderNext } = this.props;
    const slides = this.props.apps ? this.props.apps.map((app,key) => {
      return (<Slide key={key}
        permalink={app.permalink}
        name={app.name}
        tagline={app.tagline}
        deviceImage={app.deviceImage}
        device={app.device}
        onViewDetails={onViewDetails} />);
    })
    : null;
    return (
      <section className={cx('slider')}>
        {slides}    
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
  // {apps}
        

        




      // <SliderNav onSliderPrev={onSliderPrev}
      //   onSliderNext={onSliderNext}
      //   onViewDetails={onViewDetails} />