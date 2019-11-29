import React, { Component } from "react";
import { Button } from "antd";
export default class Navbar extends Component {
  render() {
    return (
      <>
        <div className="navbar">
          <ul>
            <li>
              <div className="logo">Logo</div>
            </li>
            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>

            <div className="loginButton">
              <Button type="primary" icon="user" size="large" shape="circle" />
            </div>
          </ul>
        </div>
      </>
    );
  }
}
