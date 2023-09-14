export default function handler(req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true, // use TLS
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
    debug: true,
    logger: true,
  });

  const mailData = {
    from: `MO. <${req.body.email}>`,
    to: "mohamedabdelmoniem10@gmail.com",
    subject: `Contact form From Mon3m.com`,
    // text: `Email: ${req.body.email}Message: ${req.body.message}`,
    html: `
      <h3>Name:</h3><b>${req.body.name}</b>
      <br />
      <h3>Message:</h3><b>${req.body.message}</b>
    `
  };
  transporter.sendMail(mailData, (errors, info) => {
    if (errors) {
      res.status(500);
      return {
        status: "error",
        message: "Something went wrong",
      };
    }
    res.status(200);
    res.send({
      status: "ok",
      message: "Email successfully sent",
    });
  });
}
