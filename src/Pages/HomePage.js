import React, { Component } from "react";
import Carousel from "../Components/Carousel";
import Jumbotron from "../Components/Jumbotron";
export default class HomePage extends Component {
  render() {
    return (
      <>
        <Jumbotron />
        <div className="carousel">
          <Carousel />
        </div>
      </>
    );
  }
}
