import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from './PortfolioCard.scss';

/*
Handling Route Params
https://www.youtube.com/watch?v=ZBxMljq9GSE
*/

const cx = classNames.bind(styles);

class PortfolioCard extends Component {
  render() {
    return (
      <section class="profile">


      </section>
    );
  }
}

// PortfolioCard.propTypes = {
//   routeParams: PropTypes.shape({
//     permalink: PropTypes.string.isRequried
//   })
// };

export default PortfolioCard;


          // <div style="position: relative;z-index: 1000;" id="profile_card_parent">
          //     <div class="card hovercard" id="profile_card">
          //         <a class="bp-icon bp-icon-close" id="close_profile"><span></span></a>
          //         <div class="cardheader" style="background: url('{{ site.author.header_bg | prepend: site.baseurl }}') no-repeat center">

          //         </div>
          //         <div class="avatar">
          //             <img alt="" src="{{ site.author.avatar | prepend: site.baseurl }}">
          //         </div>
          //         <div class="info">
          //             <div class="title">
          //                 <a target="_blank" href="{{ site.author.url }}">{{ site.author.name }}</a>
          //             </div>
          //             <div class="desc">{% markdown %}{% include profile_description.md %}{% endmarkdown %}</div>
          //         </div>
          //         <div class="bottom">
          //             <a class="btn btn-primary btn-twitter btn-sm" href="mailto:{{ site.author.email }}">
          //                 Contact me
          //             </a>
          //         </div>
          //     </div>
          // </div>