// newsletterService.js
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export const sendNewsletter = async (email) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Welcome to Global Vision Solution!',
    text: 'Thank you for subscribing to our newsletter!',
    html: `
      <h2>Welcome to Global Vision Solution!</h2>
      <p>Thank you for subscribing to our newsletter. We’re excited to share our latest updates with you!</p>
      <p>Stay connected,</p>
      <p><strong>Global Vision Solution Team</strong></p>
    `,
  };

  await transporter.sendMail(mailOptions);
};
