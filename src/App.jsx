import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import WorkoutTracker from "./pages/WorkoutTracker";
import Goals from "./pages/Goals";
import Plans from "./pages/Plans";
import About from "./pages/About";
import Footer from "./components/Footer";
import "./assets/css/styles.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<Navigate to="/home" />} />

      <Route path="/home" element={<Home />} />
        <Route path="/workout" element={<WorkoutTracker />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
