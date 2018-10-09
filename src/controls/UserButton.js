import React, { Component } from 'react';
import '../styles/UserButton.css';

class UserButton extends Component {
  constructor(props) {
    super();
    
    this.showTitle = props.showTitle;
    this.imgSize = props.imgSize || "56px";
  }
  
  render() {
    return (
      <div className="userbutton-main userbutton-has-story">
        <button className="userbutton-btn app-btn">
          <div className="userbutton-img-container">
            <img
              className="userbutton-img"
              width={this.imgSize}
              height={this.imgSize}
              src="https://avatars.githubusercontent.com/u/8445?v=3">
            </img>
          </div>
          {this.showTitle && 
            <h4 className="userbutton-title"> UserName </h4>
          }
        </button>
      </div>
    );
  }
}

export default UserButton;