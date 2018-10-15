import React, { Component } from 'react';
import PostCard from './PostCard';
import './../styles/Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <nav className="navigation-main">
        <button className="app-btn app-btn-big btn-camera">
          Home
        </button>

        <button className="app-btn app-btn-big btn-camera">
          Search
        </button>

        <button className="app-btn app-btn-big btn-camera">
          New
        </button>

        <button className="app-btn app-btn-big btn-camera">
          My
        </button>
      </nav>
    );
  }
}

export default Navigation;