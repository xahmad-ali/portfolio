const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT ;

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `${firstName} ${lastName} <${email}>`,
      to: process.env.EMAIL_USER,
      subject,
      html: `<p>${message}</p>`,
    });

    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error sending message' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
