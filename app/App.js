import React from 'react';
import Navigation from 'Navigation/Navigation';
import Portfolio from 'Portfolio/Portfolio';
import 'App.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { animate: false };
  }
  render() {
    return (
      <div>
        <Navigation />
        <Portfolio zoomer={this.state}/>
      </div>
    );
  }
}
