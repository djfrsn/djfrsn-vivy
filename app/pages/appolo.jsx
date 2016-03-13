import React, { Component, PropTypes } from 'react';
import ContentItemImage from 'PageComponents/ContentItemImage';

export default class AppoloPage extends Component {
  render() {
    const permalink = this.props.permalink;
    return (
      <div>
        <ContentItemImage src={`/images/${permalink}/${permalink}-on-devices.png`} alignment="center" alt="Appolo for React" />
      </div>
    );
  }
}

AppoloPage.propTypes = {
  permalink: PropTypes.string.isRequired
};
