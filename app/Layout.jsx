/* eslint-disable indent */
import React, { Component, PropTypes  } from 'react';
import Portfolio from 'Portfolio/Portfolio';
import FullScreen from 'FullScreen/FullScreen';
import portfolio from 'portfolio';
import profile from 'profile';

export default class Layout extends Component {
  render() {
    let View = <Portfolio portfolio={portfolio} routeParams={this.props.params} profile={profile} />;

  	if ( this.props.params.permalink ) {
	    const params = this.props.params.permalink.split('-');
	    View = (params[0] === 'preview') && params.length > 1
	    ?	View : <FullScreen portfolio={portfolio} routeParams={this.props.params} />;
  	}

    return View;
  }
}

Layout.propTypes = {
  params: PropTypes.shape({
    permalink: PropTypes.string.isRequried
  })
};
