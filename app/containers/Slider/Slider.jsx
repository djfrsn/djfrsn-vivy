import React, { Component, PropTypes } from 'react';
import Slide from 'Slide/Slide';
import SliderNav from 'SliderNav/SliderNav';
import classNames from 'classnames/bind';
import styles from './Slider.scss';

const cx = classNames.bind(styles);

export default class Slider extends Component {

  onSliderPrev = () => {

  }

  onSliderNext= () => {

  }

  render() {
    // Passing down the callback functions from props to each <Zoomer>
    const { onViewDetails, zoomer } = this.props;
    const slides = this.props.apps ? this.props.apps.map((app, key) => {
      return (<Slide key={key}
        zoomer={zoomer}
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
        <SliderNav onSliderPrev={this.onSliderPrev}
          onSliderNext={this.onSliderNext}
          onViewDetails={onViewDetails} />
      </section>
    );
  }
}

Slider.propTypes = {
  apps: PropTypes.array.isRequired,
  onViewDetails: PropTypes.func.isRequired,
  zoomer: PropTypes.shape({
    animate: PropTypes.bool.isRequried
  })
};
