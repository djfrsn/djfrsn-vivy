import React, { Component, PropTypes } from 'react';
import 'App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<div>{this.props.children}</div>);
  }
}

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
