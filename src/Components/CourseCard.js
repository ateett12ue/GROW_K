import React, { Component } from "react";
import { Card } from "antd";
import assignment from "../Images/assignment.svg";
import hourGlass from "../Images/hourGlass.svg";
import project from "../Images/project.svg";
import mentor from "../Images/mentor.svg";
import { Button } from "antd";
import star from "../Images/star.svg";

export default class extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: 450, height: 250, marginTop: 16 }}>
          <div className="courseCard">
            <div className="coursePhoto">
              <img
                src={this.props.coursePhoto}
                alt="Course Photo"
                height="200px"
              ></img>
            </div>
            <div className="courseContent">
              <div className="courseInstitute">
                <div className="courseInstituteLogo">
                  <img src={this.props.instiLogo} alt="iit" height="50px" />
                </div>
                <div className="courseInstituteName">
                  <h5>
                    {this.props.instituteName}
                    <br></br> {this.props.instituteLocation}
                  </h5>
                </div>
              </div>
              <div className="courseSection">
                <div className="courseSectionContent">
                  <div className="courseSectionContentImage">
                    <img src={mentor} alt="mentor" height="30px" width="30px" />
                  </div>
                  <div className="courseSectionContentHeader">
                    <h4>{this.props.mentors} Mentors</h4>
                  </div>
                </div>

                <div className="courseSectionContent courseAlignLeft">
                  <div className="courseSectionContentImage">
                    <img
                      src={hourGlass}
                      alt="mentor"
                      height="30px"
                      width="30px"
                    />
                  </div>
                  <div className="courseSectionContentHeader">
                    <h4>{this.props.courseHours} Hrs+</h4>
                  </div>
                </div>
              </div>
              <div className="courseSection">
                <div className="courseSectionContent">
                  <div className="courseSectionContentImageProject">
                    <img
                      src={project}
                      alt="mentor"
                      height="30px"
                      width="30px"
                    />
                  </div>
                  <div className="courseSectionContentHeader">
                    <h4>{this.props.projects} Projects</h4>
                  </div>
                </div>

                <div className="courseSectionContent courseAlignLeft">
                  <div className="courseSectionContentImageAssignment">
                    <img
                      src={assignment}
                      alt="mentor"
                      height="30px"
                      width="30px"
                    />
                  </div>
                  <div className="courseSectionContentHeader">
                    <h4>{this.props.assignment} Assignment</h4>
                  </div>
                </div>
              </div>
              <div className="lowerSection">
                <div className="starRating">
                  <div className="starRatingImage">
                    <img src={star} alt="star" width="20px" height="20px" />
                  </div>
                  <div className="starRatingValue">
                    <p>
                      4<span> (52,328)</span>
                    </p>
                  </div>
                </div>
                <div className="coursePrice">
                  ₹ 432 <span>₹ 2,328</span>
                </div>
              </div>
              <div className="sectionButton">
                <Button shape="round" size="large">
                  View Course
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
