import React, { Component, PropTypes } from 'react';
import Slider from 'Slider/Slider';
import Profile from 'Profile/Profile';
import Header from 'Header/Header';
import Zoomer from 'Zoomer/Zoomer';
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
    this.state = { animateHireMeButton: false, showProfile: false }; // set initial state
  }
  /*
   * Containers propogate state changes down to components.
   * Components should be dumb and avoid manipulating state. If it has state, it's not a component.
   * Props vs State: https://github.com/uberVU/react-guide/blob/master/props-vs-state.md
   * Containers are Stateful /\ Components are Stateless
   * Thinking in React: http://facebook.github.io/react/docs/thinking-in-react.html#step-4-identify-where-your-state-should-live
   */
  onAnimateHireMeButton = ( animate ) => {
    this.setState({ ...this.state, animateHireMeButton: animate });
  }

  onShowProfile = ( show ) => {
    this.setState({ ...this.state, showProfile: show });
  }

  render() {
    const children = this.props.portfolio.map((app) => {
      return (<Zoomer name={app.name}
                device={app.device}
                permalink={app.permalink} />);
    });
    return (
      <div className={cx('portfolio')}>
        <Header animateHireMeButton={this.state.animateHireMeButton} onShowProfile={this.onShowProfile} />
        <div className={cx('inner__container')}>
          <Slider
            children={children}
            slides={this.props.portfolio}
            routeParams={this.props.routeParams}
            onAnimateHireMeButton={this.onAnimateHireMeButton} />
        </div>
        <Profile {...this.props.profile} onShowProfile={this.onShowProfile} show={this.state.showProfile} />
      </div>
    );
  }
}

Portfolio.propTypes = {
  portfolio: PropTypes.arrayOf(PropTypes.shape({
    active: PropTypes.bool,
    device: PropTypes.string.isRequried,
    name: PropTypes.string.isRequried,
    permalink: PropTypes.string.isRequried,
    tagline: PropTypes.string.isRequried
  })),
  routeParams: PropTypes.shape({
    permalink: PropTypes.string.isRequried
  }),
  profile: PropTypes.shape({
    author: PropTypes.shape({
      header_bg: PropTypes.string.isRequried,
      avatar: PropTypes.string.isRequried,
      url: PropTypes.string.isRequried,
      name: PropTypes.string.isRequried,
      email: PropTypes.string.isRequried
    }),
    baseurl: PropTypes.string,
    description: PropTypes.string
  })
};

export default Portfolio;
