import React, { Component, PropTypes } from 'react';
//import Zoomer from 'components/Zoomer';
// import SliderNav from 'components/SliderNav';
import classNames from 'classnames/bind';
import styles from 'scss/components/_slider';

const cx = classNames.bind(styles);

export default class Slider extends Component {
  render() {
    // Passing down the callback functions from props to each <Zoomer>
    const { onViewDetails, onSliderPrev, onSliderNext } = this.props;
    
    return (
      <section className={cx('slider')}>
        <div className={cx('slide')}>
        </div>       
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
        // <Zoomer name={app.name}
        //   device_image={app.device_image}
        //   device={app.device}
        //   onZoomerClick={onViewDetails}
        //    />

      //    <div className={cx('slide__mover')}>
      //   <h2 className={cx('slide__title')}>{app.name}<span>{app.tagline}</span></h2>
      // </div>

    //   const apps = this.props.apps ? this.props.apps.map((app) => {
    //   return (
    //  );
    // })
    // : null;


      // <SliderNav onSliderPrev={onSliderPrev}
      //   onSliderNext={onSliderNext}
      //   onViewDetails={onViewDetails} />