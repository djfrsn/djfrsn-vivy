import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from './FullScreen.scss';
import { browserHistory } from 'react-router';

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

    if ( !this.app ) { // send user home when app isn't found
      this.app = this.props.portfolio[0];
      browserHistory.push('/');
    }

    this.state = { onClose: false };
  }

  componentDidMount() {
    this.loadPage();
  }

  loadPage = () => {
    require([`../../pages/${this.app.name}.jsx`], (mod) => {
      this.Page = mod.default;
      this.forceUpdate();
    });
  }

  onClose = () => {
    this.setState({ onClose: true });
    this.onEndTransition();
  }

  onEndTransition = () => {
    setTimeout(() => {
      browserHistory.push(`preview-${this.app.permalink}`);
    }, 750);
  }

  render() {
    const contentClass = cx({
      'content': true,
      'content--open': this.state.onClose ? false : true
    });
    const Page = this.Page ? this.Page : 'Loading';
    return (
      <div className={cx('fullScreen')}>
        <section className={contentClass}>

          <Page {...this.app} onClose={this.state.onClose}/>

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
