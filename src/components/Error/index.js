import React, { Component } from "react";
import "./styles.scss";

export default class Error extends Component {
  render() {
    return (
      <div className="gif">
        <h5> Ooops.. Something we can't find the page that you're looking </h5>
        <img alt="gif" className="pngError" src="./images/error.png"></img>
      </div>
    );
  }
}
