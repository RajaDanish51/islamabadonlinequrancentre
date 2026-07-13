import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AboutPage from "./AboutPage";
import CoursesPage from "./CoursesPage";
import PricingPage from "./PricingPage";
import ContactPage from "./ContactPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}