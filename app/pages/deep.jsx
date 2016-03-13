import React, { Component, PropTypes } from 'react';
import ContentItemImage from 'PageComponents/ContentItemImage';
import ContentItemParagraph from 'PageComponents/ContentItemParagraph';
import SectionTitle from 'PageComponents/SectionTitle';


export default class Deep extends Component {
  render() {
    const permalink = this.props.permalink;
    return (
      <div>
        <ContentItemImage src={`/images/${permalink}/${permalink}-on-devices.png`} alignment="center" alt="Deep for iPhone" />

        <ContentItemParagraph alignment="center">
          Introducing Deep for iPhone. Featuring an easy-to-use gesture-based navigation, Deep has been designed to help you quickly compose quotes and embed them to attractive images for more engaging social media updates. You can never go wrong with more than 1000 visually stunning photos to choose from, carefully selected fonts, and brilliant image effects.
        </ContentItemParagraph>

        <SectionTitle>Choose the best image effect for maximum impact.</SectionTitle>

        <ContentItemImage src={`/images/${permalink}/${permalink}-2.png`} alignment="center" alt="Deep for iPhone" />

        <ContentItemParagraph alignment="center">
          Deep comes with four brilliant image effects for you to choose from, depending on the mood you want to convey. Simply swipe left or right to change the effect.
        </ContentItemParagraph>

        <ContentItemImage src={`/images/${permalink}/${permalink}-3.jpeg`} alignment="fill-width" alt="Deep for iPhone" />

      </div>
    );
  }
}

Deep.propTypes = {
  permalink: PropTypes.string.isRequired
};
