/* eslint-disable indent */
import React, { Component, PropTypes  } from 'react';
import Portfolio from 'Portfolio/Portfolio';
import FullScreen from 'FullScreen/FullScreen';

const portfolio = [{
  active: true,
  device: 'macbook',
  name: 'Appolo',
  permalink: 'appolo',
  tagline: 'App Portfolio for App developers'
}, {
  active: false,
  device: 'imac',
  name: 'Meeru',
  permalink: 'meeru',
  tagline: 'Watch multiple videos simultaneously'
}, {
  active: false,
  device: 'iphone',
  name: 'Deep',
  permalink: 'deep',
  tagline: 'Embed quotes on captivating images'
}];

export default class Layout extends Component {
  render() {
    let View = <Portfolio portfolio={portfolio} routeParams={this.props.params} />;

  	if ( this.props.params.permalink ) {
	    const params = this.props.params.permalink.split('-');
	    View = (params[0] === 'preview') && params.length > 1
	    ?	View : <FullScreen routeParams={this.props.params} />;
  	}

    return View;
  }
}

Layout.propTypes = {
  params: PropTypes.shape({
    permalink: PropTypes.string.isRequried
  })
};
