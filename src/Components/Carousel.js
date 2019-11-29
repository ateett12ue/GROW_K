import React, { Component } from "react";
import { Card } from "antd";
import CourseCards1 from "./CourseCards1";

import CourseCards2 from "./CourseCards2";

import CourseCards3 from "./CourseCards3";

const tabList = [
  {
    key: "tab1",
    tab: "Computer Science"
  },
  {
    key: "tab2",
    tab: "Computer Organisation"
  },
  {
    key: "tab3",
    tab: "Data Science"
  },
  {
    key: "tab4",
    tab: "Data Mining"
  },
  {
    key: "tab5",
    tab: "Compatative Programming"
  },
  {
    key: "tab6",
    tab: "Social Media Analysis"
  }
];

const contentList = {
  tab1: <CourseCards1 />,
  tab2: <CourseCards2 />,
  tab3: <CourseCards3 />,
  tab4: <CourseCards2 />,
  tab5: <CourseCards3 />,
  tab6: <CourseCards1 />
};

export default class Carousel extends Component {
  state = {
    key: "tab1"
  };

  onTabChange = (key, type) => {
    this.setState({ [type]: key });
  };

  render() {
    return (
      <>
        <div className="carousel">
          <Card
            style={{ width: "100%" }}
            title="Our Courses"
            extra={<a href="#">More</a>}
            tabList={tabList}
            activeTabKey={this.state.key}
            onTabChange={key => {
              this.onTabChange(key, "key");
            }}
          >
            {contentList[this.state.key]}
          </Card>
        </div>
      </>
    );
  }
}
