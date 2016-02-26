import React from 'react';
import Navigation from 'Navigation/Navigation';
import Portfolio from 'Portfolio/Portfolio';
import 'App.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    const initialState = { animate: false };
    return (
      <div>
        <Navigation />
        <Portfolio zoomer={initialState}/>
      </div>
    );
  }
}
