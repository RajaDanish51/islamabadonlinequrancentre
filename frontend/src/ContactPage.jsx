import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Breadcrumb from "./Breadcrumb";
import {
  PhoneIcon,
  MailIcon,
  WhatsappIcon,
  PinIcon,
  SendIcon,
} from "./Icons";
import "./ContactPage.css";

const WHATSAPP_NUMBER = "923040001148";

const CONTACT_INFO = [
  {
    icon: PhoneIcon,
    label: "Phone Number",
    value: "+92 304 0001148",
  },
  {
    icon: MailIcon,
    label: "Email Address",
    value: "islamabadqurancentre@gmail.com",
  },
  {
    icon: WhatsappIcon,
    label: "WhatsApp",
    value: "+92 304 0001148",
  },
  {
    icon: PinIcon,
    label: "Location",
    value: "Islamabad, Pakistan",
  },
];

const SUBJECT_OPTIONS = [
  "Basic Qaedah",
  "Recitation",
  "Tajweed",
  "Memorization (Hifz)",
  "Namaz & Dua",
  "Translation",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    studentName: "",
    age: "",
    whatsappNumber: "",
    country: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous message
    setStatus({
      type: "",
      message: "",
    });

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: "success",
          message: "Registration submitted successfully!",
        });

        setForm({
          studentName: "",
          age: "",
          whatsappNumber: "",
          country: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: data.message || "Registration could not be submitted.",
        });
      }
    } catch (error) {
      console.error(error);

      setStatus({
        type: "error",
        message: "Unable to submit registration. Please try again.",
      });
    }
  };

  return (
    <div className="page">
      <Header />

      <Breadcrumb current="Contact" />

      <section className="contact-section">
        <div className="container contact-inner">

          {/* ================= LEFT SIDE ================= */}

          <div className="contact-info">

            <span className="eyebrow">
              Contact Us
            </span>

            <h1>
              We're Here to Help You
              <br />
              Start Your{" "}
              <span className="text-accent">
                Quran Journey
              </span>
            </h1>

            <p>
              Have any questions about our online Quran classes,
              admission process, teachers, or timings?
              Feel free to contact us. Our team will respond
              as soon as possible.
            </p>

            <ul className="contact-details">
              {CONTACT_INFO.map(({ icon: Icon, label, value }) => (
                <li key={label}>
                  <span className="contact-icon">
                    <Icon width={18} height={18} />
                  </span>

                  <div>
                    <strong>{label}</strong>
                    <p>{value}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* WhatsApp Button */}

            <div className="contact-whatsapp">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <WhatsappIcon width={18} height={18} />
                WhatsApp Us
              </a>
            </div>

          </div>

          {/* ================= RIGHT SIDE ================= */}

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-row">

              <div className="form-field">
                <label htmlFor="studentName">
                  Student Name
                </label>

                <input
                  id="studentName"
                  name="studentName"
                  type="text"
                  placeholder="Enter student name"
                  value={form.studentName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="age">
                  Age
                </label>

                <input
                  id="age"
                  name="age"
                  type="number"
                  min="1"
                  max="100"
                  placeholder="Enter age"
                  value={form.age}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            <div className="form-row">

              <div className="form-field">
                <label htmlFor="whatsappNumber">
                  WhatsApp Number
                </label>

                <input
                  id="whatsappNumber"
                  name="whatsappNumber"
                  type="tel"
                  placeholder="Enter WhatsApp number"
                  value={form.whatsappNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="country">
                  Country
                </label>

                <input
                  id="country"
                  name="country"
                  type="text"
                  placeholder="Enter your country"
                  value={form.country}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            <div className="form-field">

              <label htmlFor="subject">
                Subject
              </label>

              <select
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
              >
                <option value="">
                  Select Subject
                </option>

                {SUBJECT_OPTIONS.map((option) => (
                  <option
                    key={option}
                    value={option}
                  >
                    {option}
                  </option>
                ))}

              </select>

            </div>

            <div className="form-field">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Write your message..."
                value={form.message}
                onChange={handleChange}
              />

            </div>

            {/* Success / Error Message */}

            {status.message && (
              <div
                className={`form-message ${status.type}`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary"
            >
              Register Now
              <SendIcon
                width={16}
                height={16}
              />
            </button>

          </form>

        </div>
      </section>

      <Footer />
    </div>
  );
}