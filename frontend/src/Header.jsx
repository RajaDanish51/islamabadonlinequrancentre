import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "./assets/online_academy_logo.png"; // adjust path if assets folder is elsewhere
import { WhatsappIcon } from "./Icons";
import "./Header.css";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/courses" },
  { label: "About Us", to: "/about" },
  { label: "Pricing", to: "/pricing" },
  { label: "Contact", to: "/contact" },
];

const WHATSAPP_NUMBER = "923040001148"; // replace with your actual WhatsApp number (country code, no +)

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link className="logo" to="/">
          <span className="logo-icon">
            <img src={logo} alt="Islamabad Online Quran Academy" className="logo-img" />
          </span>
          <span className="logo-text">
            ISLAMABAD
            <small>ONLINE QURAN CENTRE</small>
          </span>
        </Link>

        {/* Single panel: nav links + actions, reflows into a top-right dropdown on mobile */}
        <div className={`nav-panel ${open ? "open" : ""}`}>
          <nav className="nav-links">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="navbar-actions">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              onClick={() => setOpen(false)}
            >
              <WhatsappIcon width={18} height={18} />
              <span className="btn-whatsapp-text">WhatsApp</span>
            </a>
            <Link to="/contact" className="btn btn-primary" onClick={() => setOpen(false)}>
              Register Now
            </Link>
          </div>
        </div>

        <button
          className="hamburger"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}