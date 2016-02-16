import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Slider from 'components/Slider';
import classNames from 'classnames/bind';
import styles from 'scss/components/_portfolio';

const cx = classNames.bind(styles);
/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    // event handlers for Portfolio component
    this.onViewDetails = this.onViewDetails.bind(this);
    this.onSliderPrev = this.onSliderPrev.bind(this);
    this.onSliderNext = this.onSliderNext.bind(this);
  }

  onViewDetails(params) {
    // const { dispatch } = this.props;
    // dispatch(onViewDetails(params))
  }

  onSliderPrev(params) {
    // const { dispatch } = this.props;
    // dispatch(onSliderPrev(params))
  }

  onSliderNext(params) {
    // const { dispatch } = this.props;
    // dispatch(onSliderNext(params))
  }

  render() {
    const apps = [{  
      deviceImage: '/images/macbook.png',
      device: "macbook",
      name: "Appolo",
      permalink: 'appolo',
      tagline: "App Portfolio for App developers"
    }];
    return (
      <div className={cx('portfolio')}>
        <Slider apps={apps}
          onViewDetails={this.onViewDetails}
          onSliderPrev={this.onSliderPrev}
          onSliderNext={this.onSliderNext} />
      </div>
    );
  }
}

// Portfolio.propTypes = {
//   apps: PropTypes.array.isRequired,
//   dispatch: PropTypes.func.isRequired
// };

function mapStateToProps(state) {
  return {
    apps: state.portfolio.apps
  };
}

export default Portfolio;