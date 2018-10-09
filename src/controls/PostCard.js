import React, { Component } from 'react';
import UserButton from './UserButton';

class PostCard extends Component {

  render() {
    return (
      <article className="postcard-main">
        
        <header className="postcard-header">

            <UserButton
              showTitle={false}
              imgSize="30px">
            </UserButton>

          <div className="postcard-username">
            <h3> UserName </h3>
          </div>
        </header>

        <div className="postcard-content">
          Content
        </div>

        <div className="postcard-action-buttons">
          <button className="btn-like">
            <i className="fas fa-heart"></i>
          </button>
        </div>

        <div className="postcard-action-buttons">
          Comments
        </div>

      </article>
    );
  }
}

export default PostCard;