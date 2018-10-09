import React, { Component } from 'react';
import UserButton from './UserButton';
import PostContent from './PostContent';
import PostControls from './PostControls';
import PostComments from './PostComments';
import '../styles/PostCard.css';

class PostCard extends Component {

  render() {
    return (
      <article className="postcard-main">

        <header className="postcard-header">

          <UserButton imgSize="36px"> </UserButton>

          <div className="postcard-username">
            <a> 9gag </a>
          </div>

          <button className="app-btn app-btn-sm btn-postcard-options">
            <i className="fas fa-ellipsis-h"></i>
          </button>
        </header>

        <div className="postcard-content">
          <PostContent></PostContent>
        </div>

        <div className="postcard-controls">
          <PostControls></PostControls>
          <a className="postcard-likecount" href="/p/BosbXaAAzop/liked_by/">
            <span>160</span> curtida
          </a>
          <PostComments></PostComments>
          <a className="postcard-time" href="/p/BosbXaAAzop/liked_by/">
            <time> há 33 minutos </time>
          </a>
        </div>

      </article>
    );
  }
}

export default PostCard;