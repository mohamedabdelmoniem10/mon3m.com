export default function handler(req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    host: "mon3m.com",
    port: 465,
    secure: true, // use TLS
    auth: {
      user: "mohamedmon3m10@gmail.com",
      pass: "MOn3m@dev",
    },
    debug: true,
    logger: true,
  });

  const mailData = {
    from: "MO. <mohamedmon3m10@gmail.com>",
    to: "mohamedmon3m10@gmail.com",
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
