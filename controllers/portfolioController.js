const nodemailer = require("nodemailer");

require('dotenv').config();



const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  }
})

const sendEmailController = (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(500).send({
        success: false,
        message: "please provide all fields",
      });
    }
    transporter.sendMail({
      to: "suryamani91228083@gmail.com",
      from: "suryamani91228083@gmail.com",
      subject: "Regarding Portfolio",
      html: `
      <h5>Details Information</h5>
      <ul>
      <li><p>Name: ${name}</p></li>
      <li><p>Email: ${email}</p></li>
      <li><p>Message: ${message}</p></li>
      </ul>`,
    });
    return res.status(200).send({
      success: true,
      message: "your message sent successfully",
    });
  } catch (error) {
    // console.log(error);
    return res.status(500).send({
      success: false,
      message: "send email api error",
      error,
    });
  }
};

module.exports = { sendEmailController };
