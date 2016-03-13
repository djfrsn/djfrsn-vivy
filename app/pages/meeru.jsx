import React, { Component, PropTypes } from 'react';
import { ContentItem, ContentItemInner, ContentItemImage, Footer } from 'PageComponents/PageComponents';

export default class Meeru extends Component {
  render() {
    const permalink = this.props.permalink;
    return (
      <ContentItem alignment="center">
        <ContentItemInner>
          <ContentItemImage src={`/images/${permalink}/${permalink}-on-devices.png`} alignment="center" alt="Meeru for Mac" />

          <Footer />
        </ContentItemInner>
      </ContentItem>
    );
  }
}

Meeru.propTypes = {
  permalink: PropTypes.string.isRequired
};
