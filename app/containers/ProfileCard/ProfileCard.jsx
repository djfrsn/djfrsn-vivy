import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from './ProfileCard.scss';

const cx = classNames.bind(styles);

class ProfileCard extends Component {
  constructor(props) {
    super(props);

    this.state = { show: false };
  }

  componentDidMount() {
    this.ProfileCardParent.addEventListener('animationend', () => {
      this.onEndTransition();
    });
  }

  componentWillReceiveProps(nextProps) { // Runs when parent changes 'show' prop
    this.setState({
      show: nextProps.show,
      bounceIn: nextProps.show === true ? true : false
    });
  }

  closeProfile = () => {
    this.setState({ ...this.state, bounceOutUp: true });
    this.props.onHideProfileCard(false);
  }

  onEndTransition = () => {
    if ( this.state.bounceOutUp ) {
      this.setState({ ...this.state, bounceOutUp: false, bounceIn: false, show: false });
    } else if ( this.state.show ) {
      this.setState({ ...this.state, bounceOutUp: false, bounceIn: false });
    }
  }

  render() {
    const cardheaderBg = { background: `url(${this.props.baseurl}${this.props.author.header_bg})` };
    const avatar = `${this.props.baseurl}${this.props.author.avatar}`;
    // Images above, animations below
    const profile = this.state.show ? { zIndex: 1000, visibility: 'visible' } : { zIndex: 0, visibility: 'hidden' };
    const profileSection = this.state.show ? { zIndex: 1000, visibility: 'visible' } : { zIndex: 0, visibility: 'hidden' };
    const profileCardParent = cx({
      'profile_card_parent': true,
      'animated': true,
      'bounceIn': this.state.bounceIn,
      'bounceOutUp': this.state.bounceOutUp
    });
    const profileCard = this.state.show ? { visibility: 'visible', zIndex: 1000 } : { visibility: 'hidden', zIndex: 0 };
    const closeProfileButton = !this.state.bounceIn && this.state.show ? { visibility: 'visible' } : { visibility: 'hidden' };
    return (
      <section className={cx('profile')} style={profile} onClick={this.closeProfile}>
        <div className={profileCardParent} style={profileSection} ref={(ref) => this.ProfileCardParent = ref}>
            <div className={cx('card', 'hovercard', 'profile_card')} style={profileCard}>
                <a className={cx('bp-icon', 'bp-icon-close', 'close_profile')} onClick={this.closeProfile} style={closeProfileButton}><span></span></a>
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

ProfileCard.propTypes = {
  show: PropTypes.bool.isRequired,
  author: PropTypes.shape({
    header_bg: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }),
  baseurl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onHideProfileCard: PropTypes.func.isRequired
};

export default ProfileCard;
