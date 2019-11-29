import React, { Component } from "react";
import { Icon } from "antd";
export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer">
          <p>Copyright ©2019 Company. All rights reserved</p>

          <div className="socialLogo">
            <ul>
              <li>
                <a href="#">
                  <Icon type="facebook" size="extralarge" />
                </a>
              </li>

              <li>
                <a href="#">
                  <Icon type="instagram" />
                </a>
              </li>

              <li>
                <a href="#">
                  <Icon type="twitter" />
                </a>
              </li>

              <li>
                <a href="#">
                  <Icon type="medium" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
