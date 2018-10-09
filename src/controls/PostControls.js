import React, { Component } from 'react';
import '../styles/PostControls.css';

class PostControls extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="postcontrols-main">
        <div className="postcontrols-buttons">
          <button className="app-btn app-btn-md btn-postcontrols-like">
            <i className="far fa-heart"></i>
          </button>
          <button className="app-btn app-btn-md btn-postcontrols-comment">
            <i className="far fa-comment"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default PostControls;