// emailService.js
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export const sendEmail = async ({ company, name, ddd, telephone, email, message }) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name} <${email}>" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: 'New Contact Us Form Submission',
    text: `Company: ${company}\nName: ${name}\nDDD: ${ddd}\nTelephone: ${telephone}\nEmail: ${email}\nMessage: ${message}`,
    replyTo: email,
  };

  await transporter.sendMail(mailOptions);
};