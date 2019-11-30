import React, { Component } from "react";
import imageJumbotron from "../Images/jumbotron.svg";
import { Button } from "antd";
import CourseContent from "./courseJumbotronContent";
import CourseCarousel from "./CourseCarousel";
import CourseFaculty from "./CourseFaculty";
export default class JumbotronCourses extends Component {
  render() {
    return (
      <>
        <div className="courseJumbotron">
          <div className="courseJumbotron-image">
            <img
              src={imageJumbotron}
              alt="image-jumbotron"
              width="100%"
              height="550px"
            />
          </div>
          <div className="courseJumbotron-content">
            <div className="courseJumbotron-content-left">
              <CourseContent
                buttonIcon="download"
                content={[
                  { header: "Assignment", footer: 3 },
                  { header: "Days Of Completion", footer: "3 Months" }
                ]}
                buttonContent="Download Syllabus"
              />
            </div>
            <div className="courseJumbotron-content-right">
              <CourseContent
                buttonIcon="experiment"
                content={[
                  { header: "Total Student Enrolled", footer: 428 },
                  { header: "Per Month Price", footer: "₹2500" }
                ]}
                buttonContent="Enroll Now"
              />
            </div>
          </div>
        </div>
        <div className="courseAboutUs">
          <h3>About Us</h3>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
        <div className="courseCertificate">
          <div className="courseCertificateImage">
            <img src="" alt="image"></img>
          </div>
          <div className="courseCertificateButton">
            <Button type="primary" shape="round">
              Enroll Now
            </Button>

            <Button type="primary" shape="round">
              Contact Faculty
            </Button>
          </div>
        </div>
        <div className="courseCarousel">
          <CourseCarousel />
        </div>
        <div className="courseFaculty">
          <CourseFaculty />
        </div>
      </>
    );
  }
}
