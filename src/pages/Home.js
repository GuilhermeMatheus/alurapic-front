import React, { Component } from 'react';
import Stories from './../controls/Stories';
import Timeline from './../controls/Timeline';
import logo from './../logo.png';
import './../styles/App.css';

class Home extends Component {
  render() {
    return (
      <div className="page-home">
        <div className="app-stories">
          <Stories></Stories>
        </div>

        <main className="app-timeline">
          <Timeline></Timeline>
        </main>

        <nav className="app-header-container">
          <header className="app-header">
            <button className="app-btn app-btn-big btn-camera">
              <i className="fas fa-camera"></i>
            </button>

            <h1 className="app-title">
              <a href="/">
                <img className="app-logo" src={logo}/>
              </a>
            </h1>

            <button className="app-btn app-btn-big btn-bars">
            </button>
          </header>
        </nav>
      </div>
    );
  }
}

export default Home;