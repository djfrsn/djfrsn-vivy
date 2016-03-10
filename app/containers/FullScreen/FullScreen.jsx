import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from './FullScreen.scss';

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
  }
  render() {
    return (
      <div className={cx('fullScreen')}>
      <section className={cx('content', 'content--open')}>
      <div className={cx('content__item', 'content__item--current', 'content__item--reset')}>
        <div className={cx('content__item-inner')}>
          <img className={cx('content__item-img', 'animated', 'bounceInDown')} src={`/images/${this.app.permalink}/icon.png`} alt={this.app.title} />
          <h2>{this.app.title}</h2>
          <h3>{this.app.subtitle}</h3>

            {this.props.routeParams.permalink}

            <div className={cx('footer')}>
              ∆ 2016 Vivy
            </div>
        </div>
      </div>
      <button className={cx('button', 'button--close')}><i className={cx('icon', 'icon--circle-cross')}></i><span className={cx('text-hidden')}>Close content</span></button>
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
