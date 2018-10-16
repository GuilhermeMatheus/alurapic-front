import React, { Component } from 'react';
import TitleBar from './../controls/TitleBar';
import UserButton from './../controls/UserButton';
import FollowButton from './../controls/FollowButton';
import Stories from './../controls/Stories';
import Timeline from './../controls/Timeline';
import './../styles/App.css';

class Home extends Component {
  render() {
    return (
      <div className="page-profile">
        <TitleBar goBack={this.props.history.goBack} title='Perfil' />

        <div className="profile-header">
          <div className="profile-header-main">
            <UserButton hasStory={true} imgSize="77px"/>
            <div className="profile-header-title-container">
              <h1 className="profile-header-title"> guilherme.matheus </h1>
              <div className="profile-header-follow-container">
                <FollowButton />
              </div>
            </div>
          </div>

          <h2 className="profile-fullname"> Guilherme Matheus Costa </h2>
          <span className="profile-description"> Perfil do GuiMatheus, instrutor na Alura que curte computadores e gatos. </span>

        </div>

        <div className="profile-counters-container">
          <div className="profile-counter">
            <span className="profile-counter-value">
              55
            </span>
            <span className="profile-counter-caption">
              publicações
            </span>
          </div>

          <div className="profile-counter">
            <span className="profile-counter-value">
              311
            </span>
            <span className="profile-counter-caption">
              seguidores
            </span>
          </div>
          
          <div className="profile-counter">
            <span className="profile-counter-caption">
              seguindo
            </span>
            <span className="profile-counter-value">
              201
            </span>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;