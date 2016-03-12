import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from './FullScreen.scss';
import { browserHistory } from 'react-router';

/*
Handling Route Params
https://www.youtube.com/watch?v=ZBxMljq9GSE
*/

const cx = classNames.bind(styles);

class FullScreen extends Component {
  constructor(props) {
    super(props);

    this.props.portfolio.every((app) => {
      if ( app.permalink === props.routeParams.permalink ) {
        this.app = app;
        return false;
      }
      return true;
    });

    if (!this.app) { // send user home when app isn't found
      this.app = this.props.portfolio[0];
      browserHistory.push('/');
    }
    this.state = { onCloseAnimation: false };
    this.initialRender = true;
  }

  onClose = () => {
    this.setState({ onCloseAnimation: true });
    this.onEndTransition();
  }

  onEndTransition = () => {
    setTimeout(() => {
      browserHistory.push(`preview-${this.app.permalink}`);
    }, 400);
  }

  render() {
    const appIconClass = cx({
      'content__item-img': true,
      'animated': true,
      'bounceInDown': this.initialRender ? true : false,
      'bounceOutUp': this.state.onCloseAnimation ? true : false
    });
    const contentItemClass = cx({
      'content__item': true,
      'content__item--current': this.state.onCloseAnimation ? false : true,
      'content__item--reset': true
    });
    this.initialRender = false;
    return (
      <div className={cx('fullScreen')}>
      <section className={cx('content', 'content--open')}>
      <div className={contentItemClass} ref={(ref)=>{ this.ContentItem = ref; }}>
        <div className={cx('content__item-inner')}>
          <img className={appIconClass} src={`/images/${this.app.permalink}/icon.png`} alt={this.app.title} />
          <h2>{this.app.title}</h2>
          <h3>{this.app.subtitle}</h3>


          <div className={cx('footer')}>
            <p>∆ 2016 Vivy</p>
          </div>
        </div>
      </div>
      <button className={cx('button', 'button--close')} onClick={this.onClose}><i className={cx('icon', 'icon--circle-cross')}></i><span className={cx('text-hidden')}>Close content</span></button>
      </section>
      </div>
    );
  }
}

FullScreen.propTypes = {
  routeParams: PropTypes.shape({
    permalink: PropTypes.string.isRequried
  }),
  portfolio: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    permalink: PropTypes.string.isRequired
  }))
};

export default FullScreen;
