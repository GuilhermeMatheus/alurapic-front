import React, { Component } from 'react';
import PostCard from './PostCard';

class Timeline extends Component {
  render() {
    return (
      <div>
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
      </div>
    );
  }
}

export default Timeline;