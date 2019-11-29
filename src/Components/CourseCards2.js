import React, { Component } from "react";
import CourseCard from "./CourseCard";
import collegeLogo1 from "../Images/College1.gif";
import collegeLogo2 from "../Images/College2.png";
import collegeLogo3 from "../Images/College3.png";
import collegeLogo4 from "../Images/College4.JPG";
import CoursePhoto1 from "../Images/CoursePhoto1.jpg";
import CoursePhoto2 from "../Images/CoursePhoto2.jpg";
import CoursePhoto3 from "../Images/CoursePhoto3.jpg";
import CoursePhoto4 from "../Images/CoursePhoto4.jpg";
export default class CourseCards extends Component {
  render() {
    return (
      <div className="horizontalContent">
        <div className="horizontalContentCardGroup">
          <div className="horizontalContentCards">
            <div className="horizontalCourseCard">
              <CourseCard
                coursePhoto={CoursePhoto4}
                instiLogo={collegeLogo4}
                instituteLocation="Jaipur"
                instituteName="Manipal Institute of Technology"
                mentors="4"
                courseHours="35"
                projects="1"
                assignment="4"
              />
            </div>
            <div className="horizontalCourseCard">
              <CourseCard
                coursePhoto={CoursePhoto3}
                instiLogo={collegeLogo3}
                instituteLocation="Raipur"
                instituteName="Jamshedpur Computer College"
                mentors="1"
                courseHours="30"
                projects="3"
                assignment="1"
              />
            </div>
          </div>
          <div className="horizontalContentCards">
            <div className="horizontalCourseCard">
              <CourseCard
                coursePhoto={CoursePhoto2}
                instiLogo={collegeLogo2}
                instituteLocation="Chattishgarh"
                instituteName="Institute of Excellence"
                mentors="2"
                courseHours="25"
                projects="9"
                assignment="5"
              />
            </div>
            <div className="horizontalCourseCard">
              <CourseCard
                coursePhoto={CoursePhoto1}
                instiLogo={collegeLogo1}
                instituteLocation="Delhi"
                instituteName="Indian Institute of Infor Technology"
                mentors="3"
                courseHours="20"
                projects="7"
                assignment="6"
              />
            </div>
          </div>
        </div>
        <div className="horizontalContentCardGroup">
          <div className="horizontalContentCards">
            <div className="horizontalCourseCard">
              <CourseCard
                coursePhoto={CoursePhoto1}
                instiLogo={collegeLogo1}
                instituteLocation="Delhi"
                instituteName="Indian Institute of Technology"
                mentors="2"
                courseHours="45"
                projects="4"
                assignment="2"
              />
            </div>
            <div className="horizontalCourseCard">
              <CourseCard
                coursePhoto={CoursePhoto2}
                instiLogo={collegeLogo2}
                instituteLocation="Bombay"
                instituteName="Indian Institute of Technology"
                mentors="1"
                courseHours="50"
                projects="5"
                assignment="1"
              />
            </div>
          </div>
          <div className="horizontalContentCards">
            <div className="horizontalCourseCard">
              <CourseCard
                coursePhoto={CoursePhoto3}
                instiLogo={collegeLogo3}
                instituteLocation="Kanpur"
                instituteName="Indian Institute of Technology"
                mentors="5"
                courseHours="95"
                projects="2"
                assignment="2"
              />
            </div>
            <div className="horizontalCourseCard">
              <CourseCard
                coursePhoto={CoursePhoto4}
                instiLogo={collegeLogo4}
                instituteLocation="Jaipur"
                instituteName="LNM Institute of Technology"
                mentors="2"
                courseHours="45"
                projects="4"
                assignment="3"
              />
            </div>
          </div>
        </div>

        <div className="horizontalContentCardGroup">
          <div className="horizontalContentCards">
            <div className="horizontalCourseCard">
              <CourseCard
                coursePhoto={CoursePhoto4}
                instiLogo={collegeLogo4}
                instituteLocation="Manali"
                instituteName="Jay shiv Shankar College"
                mentors="6"
                courseHours="55"
                projects="4"
                assignment="4"
              />
            </div>
            <div className="horizontalCourseCard">
              <CourseCard
                coursePhoto={CoursePhoto3}
                instiLogo={collegeLogo3}
                instituteLocation="Jammu"
                instituteName="National Institute of Technology"
                mentors="3"
                courseHours="35"
                projects="3"
                assignment="5"
              />
            </div>
          </div>
          <div className="horizontalContentCards">
            <div className="horizontalCourseCard">
              <CourseCard
                coursePhoto={CoursePhoto2}
                instiLogo={collegeLogo2}
                instituteLocation="Kashmir"
                instituteName="Indian Institute of Technology"
                mentors="6"
                courseHours="25"
                projects="2"
                assignment="1"
              />
            </div>
            <div className="horizontalCourseCard">
              <CourseCard
                coursePhoto={CoursePhoto1}
                instiLogo={collegeLogo1}
                instituteLocation="Surat"
                instituteName="National Institute of Technology"
                mentors="4"
                courseHours="30"
                projects="1"
                assignment="3"
              />
            </div>
          </div>
        </div>
        <div className="horizontalContentCardGroup">
          <div className="horizontalContentCards">
            <div className="horizontalCourseCard">
              <CourseCard
                coursePhoto={CoursePhoto1}
                instiLogo={collegeLogo1}
                instituteLocation="Madras"
                instituteName="Indian Institute of Technology"
                mentors="2"
                courseHours="45"
                projects="8"
                assignment="7"
              />
            </div>
            <div className="horizontalCourseCard">
              <CourseCard
                coursePhoto={CoursePhoto2}
                instiLogo={collegeLogo2}
                instituteLocation="Trichy"
                instituteName="National Institute of Technology"
                mentors="1"
                courseHours="55"
                projects="6"
                assignment="1"
              />
            </div>
          </div>
          <div className="horizontalContentCards">
            <div className="horizontalCourseCard">
              <CourseCard
                coursePhoto={CoursePhoto3}
                instiLogo={collegeLogo3}
                instituteLocation="Surat"
                instituteName="National Institute of Technology"
                mentors="5"
                courseHours="60"
                projects="5"
                assignment="2"
              />
            </div>
            <div className="horizontalCourseCard">
              <CourseCard
                coursePhoto={CoursePhoto4}
                instiLogo={collegeLogo4}
                instituteLocation="Uttrakhand"
                instituteName="Vikas RamChand College"
                mentors="4"
                courseHours="65"
                projects="5"
                assignment="3"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
