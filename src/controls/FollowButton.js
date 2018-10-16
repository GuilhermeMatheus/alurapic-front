import React, { Component } from 'react';
import './../styles/FollowButton.css';

class FollowButton extends Component {
  render() {
    return (
      <button className="button-follow not-following">
        Seguir
      </button>
    );
  }
}

export default FollowButton;