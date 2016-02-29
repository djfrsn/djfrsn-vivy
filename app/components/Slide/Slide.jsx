import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from './Slide.scss';

const cx = classNames.bind(styles);

export default class Slide extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.shouldSlideUpdate; // return false to prevent render down the tree
  }

  onSlideClick = () => {
    this.props.onViewDetails();
  }

  render() {
    const slideClass = cx({
      'slide': true,
      'slide--current': this.props.active
    });
    return (
        <div className={slideClass} onClick={this.onSlideClick} data-content={this.props.permalink} ref={(ref) => this.slide = ref}>
          <div className={cx('slide__mover')} ref={(ref) => this.slideMover = ref}>
            {this.props.children}
          </div>
          <h2 className={cx('slide__title')} ref={(ref) => this.slideTitle = ref}><pre>{this.props.name}</pre><span>{this.props.tagline}</span></h2>
        </div>
    );
  }
}

Slide.propTypes = {
  children: PropTypes.object,
  active: PropTypes.bool.isRequired,
  shouldSlideUpdate: PropTypes.bool.isRequired,
  permalink: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  onViewDetails: PropTypes.func.isRequired
};
