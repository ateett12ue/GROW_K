import React, { Component } from "react";
import { Tabs } from "antd";
import MyCourseContent from "../Components/MyCourseContent";
const { TabPane } = Tabs;

export default class MyCourses extends Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1" tabPosition="left" style={{ height: 220 }}>
          {[...Array(30).keys()].map(i => (
            <TabPane tab={`Tab-${i}`} key={i}>
              <MyCourseContent />
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}
