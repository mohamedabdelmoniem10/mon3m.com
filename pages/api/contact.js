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
    from: "MO. <mohamedabdelmoniem10@gmail.com>",
    to: "mohamedabdelmoniem10@gmail.com",
    subject: `contact form From: ${req.body.name} `,
    text: `Email: ${req.body.email},
          Message: ${req.body.message}`,
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
