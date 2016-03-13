import React, { Component, PropTypes } from 'react';
import {
  ContentItem,
  ContentItemInner,
  ContentItemParagraph,
  ContentItemImage,
  SectionTitle,
  AppStoreButton,
  Footer
} from 'PageComponents/PageComponents';

export default class Deep extends Component {
  render() {
    const permalink = this.props.permalink;
    return (
      <div>
        <ContentItem alignment="center">
          <ContentItemInner>

            <ContentItemImage src={`/images/${permalink}/${permalink}-on-devices.png`} alignment="center" alt="Deep for iPhone" />

            <ContentItemParagraph alignment="center">
              Introducing Deep for iPhone. Featuring an easy-to-use gesture-based navigation, Deep has been designed to help you quickly compose quotes and embed them to attractive images for more engaging social media updates. You can never go wrong with more than 1000 visually stunning photos to choose from, carefully selected fonts, and brilliant image effects.
            </ContentItemParagraph>

            <SectionTitle>Choose the best image effect for maximum impact.</SectionTitle>

            <ContentItemImage src={`/images/${permalink}/${permalink}-2.png`} alignment="center" alt="Deep for iPhone" />

            <ContentItemParagraph alignment="center">
              Deep comes with four brilliant image effects for you to choose from, depending on the mood you want to convey. Simply swipe left or right to change the effect.
            </ContentItemParagraph>

          </ContentItemInner>
        </ContentItem>

        <ContentItemImage src={`/images/${permalink}/${permalink}-3.jpeg`} alignment="fill-width" alt="Deep for iPhone" />

        <ContentItem alignment="center">
          <ContentItemInner>

            <SectionTitle>Match the background photo with what you want to convey.</SectionTitle>

            <ContentItemImage src={`/images/${permalink}/${permalink}-4.png`} alignment="center" alt="Deep for iPhone" />

            <ContentItemParagraph alignment="center">
              Deep gives you access to more than 1000 stunning photos in a growing list of categories. Let your inspiring quotes about people look incredibly amazing with any of the photos in People category, for example.
            </ContentItemParagraph>

          </ContentItemInner>
        </ContentItem>

        <ContentItemImage src={`/images/${permalink}/${permalink}-5.jpg`} alignment="fill-width" alt="Deep for iPhone" />

        <ContentItem alignment="center">
          <ContentItemInner>

            <SectionTitle>Save time with intuitive gestures.</SectionTitle>

            <ContentItemImage src={`/images/${permalink}/${permalink}-6.png`} alignment="center" alt="Deep for iPhone" />

            <ContentItemParagraph alignment="center">
              Swipe left or right to quickly change image effects. Swipe up or down to swiftly change fonts. Pinch in or out to easily change the size of the text. Single tap on certain areas of the photo to effortlessly change text position and alignment. Double tap to edit the text.
            </ContentItemParagraph>

            <SectionTitle>Download</SectionTitle>

            <AppStoreButton href="https://itunes.apple.com/app/apple-store/id985064577?pt=320144&amp;ct=Deep%20Website%20Bottom&amp;mt=8" />

          </ContentItemInner>
        </ContentItem>

        <Footer />

      </div>
    );
  }
}

Deep.propTypes = {
  permalink: PropTypes.string.isRequired
};
