import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Home from './pages/Home'
import NewPost from './pages/NewPost'
import Profile from './pages/Profile'
import Search from './pages/Search'
import './styles/App.css';

class App extends Component {

  render() {
    return ( 
      <div className="app">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"/>
  
        <Router>
          <div className="root">
            <Route exact={true} path='/' component={Home} />
            <Route path='/search' component={Search} />
            <Route path='/search/:text' component={Search} />
            <Route path='/newpost' component={NewPost} />
            <Route path='/profile/:profileId' component={Profile} />
            <Route path='/post/:postId' component={Home} />
             
            <nav className="navigation-main">
              <Link className="app-btn app-btn-big btn-camera" to="/">
                Home
              </Link>

              <Link className="app-btn app-btn-big btn-camera" to="/search">
                Search
              </Link>

              <Link className="app-btn app-btn-big btn-camera" to="/newpost">
                New
              </Link>

              <Link className="app-btn app-btn-big btn-camera" to="/profile/meuprofile">
                My
              </Link>
            </nav>
          </div>
        </Router>
        
      </div>
    );
  }
}

export default App;
