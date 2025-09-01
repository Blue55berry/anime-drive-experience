// server.js
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/api/send-email", async (req, res) => {
  const { firstName, lastName, email, phone, model, message } = req.body;

  try {
    // Send to showroom
    await transporter.sendMail({
      from: `"Test Drive Booking" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Test Drive Request",
      html: `
        <h2>New Test Drive Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Preferred Model:</strong> ${model}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // Confirmation to customer
    await transporter.sendMail({
      from: `"ElectricDrive Showroom" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Test Drive Request is Confirmed 🚗⚡",
      html: `
        <h3>Hi ${firstName},</h3>
        <p>Thank you for booking a test drive with <strong>ElectricDrive</strong>.</p>
        <p>Our team will contact you shortly.</p>
        <p><strong>Model Chosen:</strong> ${model}</p>
        <br/>
        <p>Best Regards,<br/>ElectricDrive Team</p>
      `,
    });

    res.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ success: false, error: "Email failed to send" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
