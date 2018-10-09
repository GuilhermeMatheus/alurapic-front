import React, { Component } from 'react';
import Stories from './controls/Stories';
import Timeline from './controls/Timeline';
import PostCard from './controls/PostCard';
import logo from './logo.svg';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"/>
        <header className="app-header">
          <button className="app-btn btn-camera">
            <i className="fas fa-camera"></i>
          </button>

          <h1 className="app-title">
            <a href="/">
              AluraPic
            </a>
          </h1>

          <button className="app-btn btn-camera">
            <i className="fas fa-bars"></i>
          </button>
        </header>

        <Stories></Stories>

        <Timeline></Timeline>

      </div>
    );
  }
}

export default App;
