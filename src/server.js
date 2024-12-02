const express = require('express');
require('dotenv').config();
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();


const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

app.use(cors());
app.use(express.json());


app.post('/data', async (req, res) => {
  const { name, email, message } = req.body;
  
  // Email options
  const mailOptions = {
    from: email, // Sender's email
    to: 'mondalrohan201@gmail.com', // Your email address to receive messages
    subject: `New Contact Form Submission from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send({ message: 'Error sending message' });
  }
});

// Start the server
const PORT = 1000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
