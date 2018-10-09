import React, { Component } from 'react';
import UserButton from './UserButton';
import '../styles/Stories.css';

class Stories extends Component {
  render() {
    return (
      <div className="stories-container">
        <span className="stories-title">Histórias</span>
        <div className="stories-list-container">
          <nav className="stories-list">
            <UserButton hasStory={true} showTitle={true} imgSize="56px"> </UserButton>
            <UserButton hasStory={true} showTitle={true} imgSize="56px"> </UserButton>
            <UserButton hasStory={true} showTitle={true} imgSize="56px"> </UserButton>
            <UserButton hasStory={true} showTitle={true} imgSize="56px"> </UserButton>
            <UserButton hasStory={true} showTitle={true} imgSize="56px"> </UserButton>
            <UserButton hasStory={true} showTitle={true} imgSize="56px"> </UserButton>
            <UserButton hasStory={true} showTitle={true} imgSize="56px"> </UserButton>
            <UserButton hasStory={true} showTitle={true} imgSize="56px"> </UserButton>
            <UserButton hasStory={true} showTitle={true} imgSize="56px"> </UserButton>
          </nav>
        </div>
      </div>
    );
  }
}

export default Stories;