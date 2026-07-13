import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Breadcrumb from "./Breadcrumb";
import readingQuranImg from "./assets/reading_quran.png"; // adjust path if assets folder is elsewhere
import {
  UsersIcon,
  PlayIcon,
  GraduationCapIcon,
  GlobeIcon,
  UserIcon,
  ClockIcon,
  OneToOneIcon,
  ShieldIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from "./Icons";
import "./AboutPage.css";

const STATS = [
  { icon: UsersIcon, value: "355+", label: "Students Worldwide" },
  { icon: PlayIcon, value: "3k+", label: "Live Classes Completed" },
  { icon: GraduationCapIcon, value: "23", label: "Expert Teachers" },
  { icon: GlobeIcon, value: "15+", label: "Countries Reached" },
];

const ABOUT_POINTS = [
  "Qualified & Experienced Teachers",
  "Interactive & Engaging Classes",
  "100% Satisfaction Guarantee",
  "Flexible Timings for Everyone",
  "English, Urdu & French Language ",
];

const FEATURES = [
  { icon: UserIcon, title: "Expert Teachers", desc: "Male & Female certified Quran teachers with years of experience." },
  { icon: ClockIcon, title: "Flexible Timings", desc: "We offer flexible class schedules to suit your time convenience." },
  { icon: OneToOneIcon, title: "One-to-One Classes", desc: "Personalized attention to improve your Quran learning." },
  { icon: GlobeIcon, title: "Worldwide Access", desc: "Join from anywhere in the world. We are just a click away." },
  { icon: ShieldIcon, title: "Safe & Secure", desc: "A safe and comfortable learning environment for everyone." },
];

export default function AboutPage() {
  return (
    <div className="page">
      <Header />
      <Breadcrumb current="About Us" />

      <section className="about-hero">
        <div className="container about-hero-inner">
          <div className="about-hero-content">
            <span className="eyebrow">About Us</span>
            <h1>
              Learn Quran Online Easy <br /> and{" "}
              <span className="text-accent">Effective Way</span>
            </h1>
            <p>
              At Islamabad Online Quran Academy, we are committed to
              providing high-quality Quran education to students of all ages.
              Our mission is to make Quran learning accessible, effective,
              and enjoyable through modern technology and expert teachers.
            </p>
            <ul className="about-points">
              {ABOUT_POINTS.map((point) => (
                <li key={point}>
                  <CheckCircleIcon width={17} height={17} /> {point}
                </li>
              ))}
            </ul>
            <button className="btn btn-primary">
              Start Free Trial <ArrowRightIcon width={18} height={18} />
            </button>
          </div>

          <div className="about-hero-media">
            <div className="about-photo">
              <img
                src={readingQuranImg}
                alt="Student reading Quran online"
                className="about-photo-img"
              />
            </div>
            <span className="dot-pattern dot-pattern-left" />
            <span className="dot-pattern dot-pattern-right" />
          </div>
        </div>
      </section>

      <div className="container">
        <div className="stats-card">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div className="stats-card-item" key={label}>
              <span className="stats-card-icon">
                <Icon width={22} height={22} />
              </span>
              <div>
                <strong>{value}</strong>
                <p>{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="features">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow eyebrow-center">Why Choose Us</span>
            <h2>The Best Quran Learning Experience</h2>
            <p className="section-subtitle">"hire your personal teacher"</p>
          </div>
          <div className="features-grid">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div className="feature-card" key={title}>
                <div className="feature-icon">
                  <Icon width={26} height={26} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}