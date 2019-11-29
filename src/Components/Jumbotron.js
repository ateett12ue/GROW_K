import React, { Component } from "react";
import HeaderImage from "../Images/HeaderImage.svg";
//import HeaderImage from "./headerImage.jpg";
export default class Jumbotron extends Component {
  render() {
    return (
      <>
        <div className="jumbotron">
          <div className="jumbotron-image">
            <img
              src={HeaderImage}
              alt="header Image"
              width="100%"
              height="500px"
              float="right"
            />
          </div>
          <div className="jumbotron-searchbar">
            <input type="text" placeholder="please search here"></input>
          </div>
        </div>
      </>
    );
  }
}
