const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

// ================================
// Middleware
// ================================

app.use(cors());
app.use(express.json());

// ================================
// Test Route
// ================================

app.get("/", (req, res) => {
  res.send("🚀 Express Backend is Running...");
});

// ================================
// SMTP Configuration
// ================================

console.log("========== BREVO SMTP ==========");
console.log("SMTP HOST:", process.env.SMTP_HOST);
console.log("SMTP PORT:", process.env.SMTP_PORT);
console.log("SMTP USER:", process.env.SMTP_USER);
console.log("EMAIL FROM:", process.env.EMAIL_FROM);

// ================================
// Email Transporter (Brevo)
// ================================

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify SMTP connection
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ SMTP Verification Failed");
    console.error(error);
  } else {
    console.log("✅ SMTP Server is Ready");
  }
});

// ================================
// Contact / Registration Route
// ================================

app.post("/api/contact", async (req, res) => {
  try {
    const {
      studentName,
      age,
      whatsappNumber,
      country,
      subject,
      message,
    } = req.body;

    // Validate required fields
    if (
      !studentName ||
      !age ||
      !whatsappNumber ||
      !country ||
      !subject
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    // ================================
    // Email Options
    // ================================

    const mailOptions = {
      from: `"Islamabad Online Quran Academy" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_FROM,

      subject: `📩 New Quran Registration - ${subject}`,

      html: `
      <div style="font-family:Arial,sans-serif;line-height:1.8;padding:20px;">

        <h2 style="color:#0f766e;">
          📚 New Student Registration
        </h2>

        <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;">

          <tr>
            <td><strong>Student Name:</strong></td>
            <td>${studentName}</td>
          </tr>

          <tr>
            <td><strong>Age:</strong></td>
            <td>${age}</td>
          </tr>

          <tr>
            <td><strong>WhatsApp Number:</strong></td>
            <td>${whatsappNumber}</td>
          </tr>

          <tr>
            <td><strong>Country:</strong></td>
            <td>${country}</td>
          </tr>

          <tr>
            <td><strong>Course:</strong></td>
            <td>${subject}</td>
          </tr>

        </table>

        <hr>

        <h3>Message</h3>

        <p>${message || "No message provided."}</p>

        <hr>

        <small>
          This registration was submitted from the
          <strong>Islamabad Online Quran Academy Website</strong>.
        </small>

      </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Registration submitted successfully!",
    });

  } catch (error) {

    console.error("========== EMAIL ERROR ==========");
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
});

// ================================
// Start Server
// ================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});