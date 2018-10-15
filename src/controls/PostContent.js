import React, { Component } from 'react';
import '../styles/PostContent.css';

class PostContent extends Component {
  render() {
    return (
      <section className="postcontent-main">
        <img
          className="postcontent-img"
          src="https://source.unsplash.com/collection/190727/500x500">
        </img>
      </section>
    );
  }
}

export default PostContent;