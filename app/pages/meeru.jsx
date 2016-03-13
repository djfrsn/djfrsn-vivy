import React, { Component, PropTypes } from 'react';
import {
  ContentItem,
  ContentItemInner,
  ContentItemParagraph,
  ContentItemRow,
  ContentItemList,
  ContentItemImage,
  SectionTitle,
  YouTube,
  AppStoreButton,
  Footer
} from 'PageComponents/PageComponents';
import classNames from 'classnames/bind';
import styles from 'styles/core/_helpers.scss';

const cx = classNames.bind(styles);

export default class Meeru extends Component {
  render() {
    const permalink = this.props.permalink;
    return (
      <ContentItem alignment="center">
        <ContentItemInner>
          <ContentItemImage src={`/images/${permalink}/${permalink}-on-devices.png`} alignment="center" alt="Meeru for Mac" />

          <ContentItemParagraph alignment="center">
            Meeru is the app that allows you to play multiple videos from streaming websites at the same time.
          </ContentItemParagraph>

          <SectionTitle>Supported services</SectionTitle>

          <ContentItemRow>
            <li>&#xe80c;</li>
            <li>&#xe80d;</li>
            <li className={cx('ted')}>TED</li>
          </ContentItemRow>

          <YouTube src="https://www.youtube.com/embed/tQzKfvn3RZY" />

          <SectionTitle>Features</SectionTitle>

          <ContentItemList>
            <li>Play up to 10 videos at the same time.</li>
            <li>Add and remove videos without hassle.</li>
            <li>Move position of a video simply by dragging it around.</li>
            <li>Save the video lists to a .meeru file. Simply double click the .meeru file to re-open all the saved videos.</li>
          </ContentItemList>

          <SectionTitle>Download</SectionTitle>

          <AppStoreButton comingSoon="true" />

          <Footer />

        </ContentItemInner>
      </ContentItem>
    );
  }
}

Meeru.propTypes = {
  permalink: PropTypes.string.isRequired
};
