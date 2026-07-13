import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Breadcrumb from "./Breadcrumb";
import coursesImage from "./assets/courses.png";

import {
  BookOpenIcon,
  BookIcon,
  HeadsetIcon,
  CubeIcon,
  ScrollIcon,
  MosqueIcon,
  ArabicIcon,
  HandsPrayIcon,
} from "./Icons";

import "./CoursesPage.css";

const COURSES = [
  {
    icon: BookOpenIcon,
    title: "Basic Qae'dah",
    desc: "Start from the basics with our Basic Qae'dah course.",
  },
  {
    icon: BookIcon,
    title: "Quran Recitation",
    desc: "Learn to read Quran with proper pronunciation.",
  },
  {
    icon: HeadsetIcon,
    title: "Quran with Tajweed",
    desc: "Perfect your recitation with Tajweed rules.",
  },
  {
    icon: CubeIcon,
    title: "Hifz-ul-Quran",
    desc: "Memorize the Quran with expert guidance.",
  },
  {
    icon: ScrollIcon,
    title: "Tafseer-ul-Quran",
    desc: "Understand the meanings of Quran deeply.",
  },
  {
    icon: HandsPrayIcon,
    title: "Namaz & Duas",
    desc: "Learn Namaz, daily duas and their benefits.",
  },
];

export default function CoursesPage() {
  return (
    <div className="page">
      <Header />
      <Breadcrumb current="Courses" />

      <section className="courses-hero">
        <div className="container courses-hero-inner">

          <div className="courses-hero-content">
            <span className="eyebrow">Our Courses</span>

            <h1>
              Our Online <br />
              <span className="text-accent">Quran Courses</span>
            </h1>

            <p>
              Choose the course that best suits your learning journey. Our qualified teachers provide one-on-one online classes for students of all ages to help them recite, understand, and practice the teachings of the Holy Quran.

              Whether you are a beginner learning the Arabic alphabet or an advanced student aiming to improve Tajweed, memorize the Quran, or study its translation, our flexible and personalized lessons are designed to help you achieve your goals with confidence and consistency.

            </p>
          </div>

          <div className="courses-hero-media">

            <span className="mosque-silhouette">
              <MosqueIcon width={220} height={220} />
            </span>

            <div className="courses-image-wrapper">
              <img
                src={coursesImage}
                alt="Online Quran Courses"
                className="courses-image"
              />
            </div>

          </div>

        </div>
      </section>

      <section className="courses-list">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow eyebrow-center">Explore</span>
            <h2>Online Courses</h2>
          </div>

          <div className="courses-grid">
            {COURSES.map(({ icon: Icon, title, desc }) => (
              <div className="course-card" key={title}>
                <div className="course-icon">
                  <Icon width={26} height={26} />
                </div>

                <div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}