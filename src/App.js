import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CourseDescription from "./Pages/CourseDescription";
import VideoUpload from "./Pages/VideoUpload";
import Success from "./Pages/Success";
function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/course" component={CourseDescription}></Route>
        <Route exact path="/uploadVideo" component={VideoUpload}></Route>
        <Route exact path="/uploadVideo/Success" component={Success}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
