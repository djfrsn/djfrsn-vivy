import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from './Profile.scss';

const cx = classNames.bind(styles);

class Profile extends Component {
  closeProfile = () => {
    this.props.onShowProfile(false);
  }

  render() {
    const cardheaderBg = { background: `url(${this.props.baseurl}${this.props.author.header_bg})` };
    const avatar = `${this.props.baseurl}${this.props.author.avatar}`;
    const profile = this.props.show ? { zIndex: 1000, visibility: 'visible' } : {};
    const profileSection = this.props.show ? {position: 'relative', zIndex: 1000, visibility: 'visible' } : {};
    return (
      <section className={cx('profile')} style={profile} >
        <div style={profileSection}>
            <div className={cx('card', 'hovercard', 'profile_card')}>
                <a className={cx('bp-icon', 'bp-icon-close', 'close_profile')} onClick={this.closeProfile}><span></span></a>
                <div className={cx('cardheader')} style={cardheaderBg}>

                </div>
                <div className={cx('avatar')}>
                    <img alt="" src={avatar}></img>
                </div>
                <div className={cx('info')}>
                    <div className={cx('title')}>
                        <a target="_blank" href={this.props.author.url}>{this.props.author.name}</a>
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
  onShowProfile: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  author: PropTypes.shape({
    header_bg: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }),
  baseurl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Profile;
