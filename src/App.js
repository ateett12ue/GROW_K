import React from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CourseDescription from "./Pages/CourseDescription";
function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <CourseDescription />
      <Footer />
    </div>
  );
}

export default App;
