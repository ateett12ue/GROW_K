import { Card, Button } from "antd";
import React, { Component } from "react";

export default class courseJumbotronContent extends Component {
  render() {
    return (
      <Card bordered={false} style={{ width: 300 }}>
        {this.props.content.map(item => {
          return (
            <p>
              <strong>{item.header}</strong>: {item.footer}
            </p>
          );
        })}
        <Button type="primary" shape="round" icon={this.props.buttonIcon}>
          {this.props.buttonContent}
        </Button>
      </Card>
    );
  }
}
