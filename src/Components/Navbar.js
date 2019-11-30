import React, { Component } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
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
              <Link to="/course">Course</Link>
            </li>

            <div className="loginButton">
              <Link to="/uploadVideo">
                <Button>Upload Video</Button>
              </Link>
              <Button type="primary" icon="user" size="large" shape="circle" />
            </div>
          </ul>
        </div>
      </>
    );
  }
}
