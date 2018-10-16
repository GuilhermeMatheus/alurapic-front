import React from 'react';

let TitleBar = (props) =>
{
  return (
    <div className="app-header title-bar">
      <button className="app-btn app-btn-big btn-camera" onClick={props.goBack}>
        <i className="fas fa-chevron-left"></i>
      </button>

      <span className="title-bar-title"> {props.title} </span>
    </div>
  );
}

export default TitleBar;