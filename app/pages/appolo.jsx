import React, { Component, PropTypes } from 'react';
import ContentItemImage from 'PageComponents/ContentItemImage';
import ContentItemParagraph from 'PageComponents/ContentItemParagraph';
import SectionTitle from 'PageComponents/SectionTitle';
import Footer from 'PageComponents/Footer';
import classNames from 'classnames/bind';
import styles from 'styles/core/_pages.scss';

const cx = classNames.bind(styles);

export default class Appolo extends Component {
  render() {
    const permalink = this.props.permalink;
    return (
      <div className={cx('content__item', 'content__item--current', 'content__item--reset')} ref={(ref)=>{ this.ContentItem = ref; }}>
        <div className={cx('content__item-inner')}>
            <ContentItemImage src={`/images/${permalink}/${permalink}-on-devices.png`} alignment="center" alt="Appolo for React" />

            <ContentItemParagraph alignment="center">
              Introducing Appolo, a set of plugins and themes for <a href="http://jekyllrb.com">Jekyll</a> to create a static portfolio website for app developers to showcase their work. Its minimalistic theme and playful animations make it perfect to display the amazing apps you have made. The responsive design looks perfect in desktop or mobile. It also comes with a set of plugins to remove the hassle of formatting your apps’ pages. The theme is based on a <a href="http://tympanus.net/codrops/2015/07/06/zoom-slider/">Zoom Slider demo</a> in <a href="http://tympanus.net/codrops">Codrops</a>.
            </ContentItemParagraph>

            <SectionTitle>Adding A New App</SectionTitle>

            <ContentItemParagraph alignment="center">
              To add a new app, simply create a markdown file in <code>_posts</code> directory or just duplicate the markdown file for this page in <code>_posts/2015-12-26-appolo.markdown</code>. Set the variables in the YAML Front Matter block with your app’s parameters.
            </ContentItemParagraph>

            <table className={cx('table__center--fluid')}>
              <tbody>
                <tr><td className={cx('colored')}>layout
                </td><td>Always use <code>post</code>.
                </td></tr><tr><td className={cx('colored')}>title
                </td><td><code>title</code> appears on the top of the app’s page.
                </td></tr><tr><td className={cx('colored')}>subtitle
                </td><td><code>subtitle</code> appears after the <code>title</code> in the app’s page.
                </td></tr><tr><td className={cx('colored')}>description
                </td><td>Used in the head’s meta.
                </td></tr><tr><td className={cx('colored')}>date
                </td><td>Published date.
                </td></tr><tr><td className={cx('colored')}>categories
                </td><td>Not used currently.
                </td></tr><tr><td className={cx('colored')}>permalink
                </td><td>NEEDED. This sets the app’s URL to baseurl/permalink.
                </td></tr><tr><td className={cx('colored')}>device
                </td><td>Type of device to use for this app in the landing page. Available options: imac, macbook, iphone, ipad, and apple-watch.
                </td></tr><tr><td className={cx('colored')}>name
                </td><td>Name of the app that is shown on the landing page.
                </td></tr><tr><td className={cx('colored')}>tagline
                </td><td>Shown under <code>name</code> on the landing page.
                </td></tr>
              </tbody>
            </table>

            <SectionTitle>Writing an App Page</SectionTitle>

            <ContentItemParagraph alignment="center">
              Appolo comes with some custom React components to make it easy writing an app page.
            </ContentItemParagraph>

            <table className={cx('table__center--fluid')}>
              <tbody>
                <tr><td className={cx('colored')}>SectionTitle
                </td><td>Use this tag to render a section title.
                </td></tr><tr><td className={cx('colored')}>ContentItemImage
                </td><td>Use <code>img</code> tag to render an image with an assigned <code>alignment</code>. You can use one of the four alignments: <code>center</code>, <code>right</code>, <code>left</code>, or <code>fill-width</code>.
                </td></tr><tr><td className={cx('colored')}>ContentItemParagraph
                </td><td>Use textalign block to set the paragraph alignment.
                </td></tr><tr><td className={cx('colored')}>YouTube
                </td><td> Use youtube followed by the id of the video to show a responsive YouTube frame.
                </td></tr><tr><td className={cx('colored')}>Features
                </td><td>Use <code>features</code> block to list the features of your apps.
                </td></tr><tr><td className={cx('colored')}>AppStoreButton
                </td><td>Use <code>download</code> tag to render a button to download your app. Available options for <code>type</code> are <code>app_store</code>, <code>play_store</code>, <code>direct</code>, and <code>coming_soon</code>.
                </td></tr>
              </tbody>
            </table>

            <SectionTitle>App's Images</SectionTitle>

            <ContentItemParagraph alignment="center">
              When adding a new app, there are some images you need to prepare. You need to put these images in <code>images/app_name</code> folder.
            </ContentItemParagraph>

            <table className={cx('table__center--fluid')}>
              <tbody>
                <tr><td className={cx('colored')}>preview.png
                </td><td>321 x 193 px
                </td><td>This preview image is used on the landing page. It is positioned inside the device you chose for the app.
                </td></tr><tr><td className={cx('colored')}>icon.png
                </td><td>512 x 512 px
                </td><td>Icon of the app.
                </td></tr><tr><td className={cx('colored')}>fb.png
                </td><td>1200 x 630 px
                </td><td>The image for Facebook Open Graph.
                </td></tr>
              </tbody>
            </table>
          <Footer />
        </div>
      </div>
    );
  }
}

Appolo.propTypes = {
  permalink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  onClose: PropTypes.bool.isRequired
};
