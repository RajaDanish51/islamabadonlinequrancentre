import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import heroImg from "./assets/home_holding_quran.png"; // adjust path if assets folder is elsewhere
import quranImg from "./assets/quran_pak.png"; // adjust path if assets folder is elsewhere
import teacherStudentImg from "./assets/teacher_student1.png"; // adjust path if assets folder is elsewhere
import {
  UsersIcon,
  PlayIcon,
  GraduationCapIcon,
  GlobeIcon,
  UserIcon,
  ClockIcon,
  OneToOneIcon,
  ShieldIcon,
  BookOpenIcon,
  BookIcon,
  HeadsetIcon,
  CubeIcon,
  ScrollIcon,
  MosqueIcon,
  CalendarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
} from "./Icons";
import "./Home.css";

/* ---------------------------------- DATA ---------------------------------- */

const WHATSAPP_NUMBER = "923040001148";

const handleFreeTrial = () => {
    const message =
      "Assalamu Alaikum! I would like to book a FREE trial Quran class.";

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

const HERO_STATS = [
  { icon: UsersIcon, value: "355+", label: "Students Worldwide" },
  { icon: PlayIcon, value: "3k+", label: "Live Classes Completed" },
  { icon: GraduationCapIcon, value: "23", label: "Expert Teachers" },
];

const STRIP_STATS = [
  { icon: UsersIcon, value: "355+", label: "Worldwide Learners" },
  { icon: PlayIcon, value: "3k+", label: "Live & Recorded Sessions" },
  { icon: GraduationCapIcon, value: "23", label: "Certified Instructors" },
  { icon: GlobeIcon, value: "15+", label: "Countries Reached" },
];

const FEATURES = [
  {
    icon: UserIcon,
    title: "Expert Teachers",
    desc: "Male & Female certified Quran teachers with years of experience.",
  },
  {
    icon: ClockIcon,
    title: "Flexible Timings",
    desc: "We offer flexible class schedules to suit your time convenience.",
  },
  {
    icon: OneToOneIcon,
    title: "One-to-One Classes",
    desc: "Personalized attention to improve your Quran learning.",
  },
  {
    icon: GlobeIcon,
    title: "Worldwide Access",
    desc: "Join from anywhere in the world. We are just a click away.",
  },
  {
    icon: ShieldIcon,
    title: "Safe & Secure",
    desc: "A safe and comfortable learning environment for everyone.",
  },
];

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
    icon: MosqueIcon,
    title: "Namaz & Duas",
    desc: "Learn basic Islamic teachings, Duas, and Salah.",
  },
];

const STEPS = [
  { num: 1, icon: CalendarIcon, title: "Register", desc: "Create your account in just a minute." },
  { num: 2, icon: CalendarIcon, title: "Book Free Trial", desc: "Choose a time and book your free trial class." },
  { num: 3, icon: HeadsetIcon, title: "Meet Your Teacher", desc: "Attend your trial class and meet your teacher." },
  { num: 4, icon: GraduationCapIcon, title: "Start Learning", desc: "Begin your Quran learning journey with us." },
];

const ABOUT_POINTS = [
  "Qualified & Experienced Teachers",
  "Interactive & Engaging Classes",
  "100% Satisfaction Guarantee",
];

const TESTIMONIALS = [
  {
    quote:
      "Alhamdulillah! My son has improved a lot in Quran reading. The teachers are very patient and kind.",
    name: "Ayesha Khan",
    place: "UK",
    initials: "AK",
  },
  {
    quote:
      "Best online academy! The classes are well organized and very effective for kids.",
    name: "Muhammad Ali",
    place: "USA",
    initials: "MA",
  },
  {
    quote:
      "Flexible timings and professional teachers. Highly recommended for everyone.",
    name: "Fatima Zahra",
    place: "Canada",
    initials: "FZ",
  },
];

/* -------------------------------- COMPONENTS -------------------------------- */

function Hero() {

  const navigate = useNavigate();

  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="eyebrow">
            <StarIcon width={14} height={14} /> Trusted by Students Worldwide
          </span>
          <h1>
            Learn Quran Online <br />
            with <span className="text-accent">Personal Teachers</span>
          </h1>
          <p className="hero-desc">
            One-to-one Quran classes for kids and adults. Male &amp; Female
            teachers available with flexible timings worldwide.
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={handleFreeTrial}
            >
              Start Free Trial
              <ArrowRightIcon width={18} height={18} />
            </button>

            <button
              className="btn btn-outline"
              onClick={() => navigate("/courses")}
            >
              Explore Courses
              <ArrowRightIcon width={18} height={18} />
            </button>
          </div>
          <div className="hero-social-proof">
            <div className="avatar-stack">
              <span className="mini-avatar">A</span>
              <span className="mini-avatar">B</span>
              <span className="mini-avatar">C</span>
              <span className="mini-avatar">D</span>
            </div>
            <div>
              <strong>3K+ Happy Students</strong>
              <p>
                from <span className="text-accent">15+ Countries</span>
              </p>
            </div>
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-photo">
            <img
              src={heroImg}
              alt="Student holding the Quran"
              className="hero-photo-img"
            />
          </div>

          <div className="floating-stats">
            {HERO_STATS.map(({ icon: Icon, value, label }) => (
              <div className="floating-card" key={label}>
                <div className="floating-icon">
                  <Icon width={20} height={20} />
                </div>
                <div>
                  <strong>{value}</strong>
                  <p>{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="stats-card">
          {STRIP_STATS.map(({ icon: Icon, value, label }) => (
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
    </section>
  );
}

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="section-heading">
      <span className="eyebrow eyebrow-center">{eyebrow}</span>
      <h2>{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

function Features() {
  return (
    <section className="features">
      <div className="container">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The Best Quran Learning Experience"
          subtitle='"hire your personal teacher"'
        />
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
  );
}

function Courses() {
  return (
    <section className="courses" id="courses">
      <div className="container">
        <SectionHeading eyebrow="Our Courses" title="Our Online Quran Courses" />
        <div className="home-courses-grid">
          {COURSES.map(({ icon: Icon, title, desc }) => (
            <div className="home-course-card" key={title}>
              <div className="home-course-icon">
                <Icon width={28} height={28} />
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
  );
}

function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="container">
        <SectionHeading eyebrow="How It Works" title="Start Learning in 4 Simple Steps" />
        <div className="steps-grid">
          {STEPS.map(({ num, icon: Icon, title, desc }, i) => (
            <React.Fragment key={num}>
              <div className="step-card">
                <div className="step-icon">
                  <span className="step-num">{num}</span>
                  <Icon width={26} height={26} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
              {i < STEPS.length - 1 && <span className="step-arrow">&#10148;</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutUs() {
  return (
    <section className="about" id="about-us">
      <div className="container about-inner">
        <div className="home-about-photo">
          <img
            src={teacherStudentImg}
            alt="Teacher and student learning Quran online"
            className="home-about-photo-img"
          />
        </div>
        <div className="about-content">
          <span className="eyebrow">About Us</span>
          <h2>
            Learn Quran Online Easy <br /> and Effective Way
          </h2>
          <p>
            At Islamabad Online Quran Academy, we are committed to providing
            high-quality Quran education to students of all ages. Our mission
            is to make Quran learning accessible, effective, and enjoyable
            through modern technology and expert teachers.
          </p>
          <ul className="home-about-points">
            {ABOUT_POINTS.map((point) => (
              <li key={point}>
                <CheckCircleIcon width={18} height={18} /> {point}
              </li>
            ))}
          </ul>
          <div className="about-footer">
            <div className="experience-badge">
              <UsersIcon width={22} height={22} />
              <div>
                <strong>5+</strong>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);
  return (
    <section className="testimonials">
      <div className="container">
        <SectionHeading eyebrow="Testimonials" title="What Parents & Students Say" />
        <div className="testimonials-grid">
          {TESTIMONIALS.map(({ quote, name, place, initials }) => (
            <div className="testimonial-card" key={name}>
              <p className="quote">&ldquo;{quote}&rdquo;</p>
              <div className="testimonial-footer">
                <span className="mini-avatar">{initials}</span>
                <div>
                  <strong>{name}</strong>
                  <p className="text-accent">{place}</p>
                </div>
                <div className="stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} width={14} height={14} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="dots">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === active ? "active" : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Show testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="cta-banner" id="pricing">
      <div className="container cta-inner">
        <div>
          <h2>Start Your Quran Learning Journey Today</h2>
          <p>
            Book your free trial class now and experience the best Quran
            learning environment with certified teachers.
          </p>
          <button
            className="btn btn-white"
            onClick={handleFreeTrial}
          >
            Book Free Trial Now
            <ArrowRightIcon width={18} height={18} />
          </button>
        </div>
        <div className="cta-image">
          <img src={quranImg} alt="Holy Quran" className="cta-image-img" />
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------- APP ----------------------------------- */

export default function Home() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Features />
      <Courses />
      <HowItWorks />
      <AboutUs />
      <Testimonials />
      <CTABanner />
      <Footer />
    </div>
  );
}