import React, { Component, PropTypes } from 'react';
import { Footer } from 'PageComponents/PageComponents';

export default class Meeru extends Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>

      <Footer />
      </div>
    );
  }
}

Meeru.propTypes = {
  permalink: PropTypes.string.isRequired
};
