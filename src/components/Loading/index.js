import React, { Component } from "react";
import "./styles.scss";

export default class Loading extends Component {
  render() {
    return (
      <div className="gif">
        <img alt="gif" className="gifLoad" src="./images/load.gif"></img>
      </div>
    );
  }
}
