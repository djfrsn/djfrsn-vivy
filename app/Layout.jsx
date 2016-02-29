import React, { Component, PropTypes  } from 'react';
import Portfolio from 'Portfolio/Portfolio';
import FullScreen from 'FullScreen/FullScreen';

export default class Layout extends Component {
  render() {
    const params = this.props.params.permalink.split('-');
    return (params[0] === 'preview') && params.length > 1
    ?	<Portfolio routeParams={this.props.params} />
    		: <FullScreen routeParams={this.props.params} />;
  }
}

Layout.propTypes = {
  params: PropTypes.shape({
    permalink: PropTypes.string.isRequried
  })
};
