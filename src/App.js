import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CourseDescription from "./Pages/CourseDescription";
import VideoUpload from "./Pages/VideoUpload";
function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/course">
          <CourseDescription />
        </Route>
        <Route exact path="/uploadVideo">
          <VideoUpload />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
