import React, { Component, PropTypes } from 'react';
import Slider from 'Slider/Slider';
import Header from 'Header/Header';
import classNames from 'classnames/bind';
import styles from './Portfolio.scss';

const cx = classNames.bind(styles);
/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
class Portfolio extends Component {
  constructor(props) {
    super(props); // call super in your constructor to access this, you can also pass props to super to access props within the constructor
    // event handlers for Portfolio component
    this.state = { animateHireMeButton: false }; // set initial state
  }
  /*
   * Containers propogate state changes down to components.
   * Components should be dumb and avoid manipulating state.
   * Props vs State: https://github.com/uberVU/react-guide/blob/master/props-vs-state.md
   * Containers are Stateful /\ Components are Stateless
   * Thinking in React: http://facebook.github.io/react/docs/thinking-in-react.html#step-4-identify-where-your-state-should-live
   */
  onAnimateHireMeButton = ( animate ) => {
    this.setState({ ...this.state, animateHireMeButton: animate });
  }

  render() {
    return (
      <div className={cx('portfolio')}>
        <div className={cx('inner__container')}>
          <div>
            <Header animateHireMeButton={this.state.animateHireMeButton} />
            <Slider
              routeParams={this.props.routeParams}
              onAnimateHireMeButton={this.onAnimateHireMeButton} />
          </div>
        </div>
      </div>
    );
  }
}

Portfolio.propTypes = {
  routeParams: PropTypes.shape({
    permalink: PropTypes.string.isRequried
  })
};

export default Portfolio;
