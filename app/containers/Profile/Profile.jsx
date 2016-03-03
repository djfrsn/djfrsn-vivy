import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from './Profile.scss';

const cx = classNames.bind(styles);

class Profile extends Component {
  render() {
    const cardheaderBg = { background: `url(${this.props.baseurl}${this.props.author.header_bg})` };
    const avatar = `${this.props.baseurl}${this.props.author.avatar}`;
    return (
      <section className={cx('profile')}>
        <div>
            <div className={cx('card', 'hovercard', 'profile_card')}>
                <a className={cx('bp-icon', 'bp-icon-close', 'close_profile')}><span></span></a>
                <div className={cx('cardheader')} style={cardheaderBg}>

                </div>
                <div className={cx('avatar')}>
                    <img alt='' src={avatar}></img>
                </div>
                <div className={cx('info')}>
                    <div className={cx('title')}>
                        <a target='_blank' href={this.props.author.url}>{this.props.author.name}</a>
                    </div>
                    <div className={cx('desc')}>{this.props.description}</div>
                </div>
                <div className={cx('bottom')}>
                    <a className={cx('btn', 'btn-primary', 'btn-twitter', 'btn-sm')} href={`mailto:${this.props.author.email}`}>
                        Contact me
                    </a>
                </div>
            </div>
        </div>
      </section>
    );
  }
}

Profile.propTypes = {
  author: PropTypes.shape({
    header_bg: PropTypes.string.isRequried,
    avatar: PropTypes.string.isRequried,
    url: PropTypes.string.isRequried,
    name: PropTypes.string.isRequried,
    email: PropTypes.string.isRequried
  }),
  baseurl: PropTypes.string,
  description: PropTypes.string
};

export default Profile;



