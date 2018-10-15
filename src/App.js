import React, { Component } from 'react';
import Home from './pages/Home'
import Navigation from './controls/Navigation';
import './styles/App.css';

class App extends Component {

  navigate() {

  }

  render() {
    return (
      <div className="app">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"/>

        <Navigation onNavigate={this.navigate}></Navigation>
      </div>
    );
  }
}

export default App;
