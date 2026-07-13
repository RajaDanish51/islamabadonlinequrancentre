import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/online_academy_logo.png"; // adjust path to match your assets folder
import {
  PhoneIcon,
  MailIcon,
  GlobeIcon,
  PinIcon,
  WhatsappIcon,
  ClockIcon,
} from "./Icons";
import "./Footer.css";

const FOOTER_LINKS = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/courses" },
  { label: "About Us", to: "/about" },
  { label: "Pricing", to: "/pricing" },
  { label: "Contact", to: "/contact" },
];

const FOOTER_COURSES = [
  { label: "Basic Qae'dah", to: "/courses" },
  { label: "Quran Recitation", to: "/courses" },
  { label: "Quran with Tajweed", to: "/courses" },
  { label: "Hifz-ul-Quran", to: "/courses" },
  { label: "Namaz & Dua", to: "/courses" },
];

const WHATSAPP_NUMBER = "923040001148";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link className="logo logo-light" to="/">
            <span className="logo-icon">
              <img src={logo} alt="Islamabad Online Quran Academy" className="logo-img" />
            </span>
            <span className="logo-text">
              ISLAMABAD
              <small>ONLINE QURAN Centre</small>
            </span>
          </Link>
          <p>
            Providing quality Quran education worldwide with expert teachers
            and flexible timings.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-whatsapp"
          >
            <WhatsappIcon width={16} height={16} />
            Chat on WhatsApp
          </a>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            {FOOTER_LINKS.map((l) => (
              <li key={l.label}><Link to={l.to}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Courses</h4>
          <ul>
            {FOOTER_COURSES.map((c) => (
              <li key={c.label}><Link to={c.to}>{c.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contact Us</h4>
          <ul className="contact-list">
            <li><PhoneIcon width={16} height={16} /> +92 304 0001148</li>
            <li>
              <MailIcon width={16} height={16} />
              <a href="mailto:islamabadqurancentre@gmail.com">islamabadqurancentre@gmail.com</a>
            </li>
            <li><GlobeIcon width={16} height={16} /> www.islamabadonlinequrancentre.com</li>
            <li><PinIcon width={16} height={16} /> Islamabad, Pakistan</li>
          </ul>
        </div>

        <div>
          <h4>Office Hours</h4>
          <ul className="contact-list">
            <li><ClockIcon width={16} height={16} /> 24/7</li>
            
          </ul>
          <p className="office-note">Flexible timings across all time zones.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Islamabad Online Quran Centre. All Rights Reserved.</p>
        <div>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms &amp; Conditions</a>
        </div>
      </div>
    </footer>
  );
}