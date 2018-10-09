import React, { Component } from 'react';
import Stories from './controls/Stories';
import Timeline from './controls/Timeline';
import logo from './logo.png';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"/>
        <div className="app-stories">
          <Stories></Stories>
        </div>

        <main className="app-timeline">
          <Timeline></Timeline>
        </main>

        <div className="app-header-container">
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
              {/* <i className="fas fa-bars"></i> */}
            </button>
          </header>
        </div>
      </div>
    );
  }
}

export default App;
