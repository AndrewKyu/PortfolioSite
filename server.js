const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();

const PORT = process.env.PORT || 5000;

// View engine setup
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// Static folder
app.use("/public", express.static(path.join(__dirname, "public")));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Loading fields to add to JSON
const password = require("./config/credentials").password;
const sendTo = require("./config/credentials").toEmail;
const fromEmail = require("./config/credentials").fromEmail;

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/send", (req, res) => {
  console.log(req.body);
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "andrewkyuportfolioemailer@gmail.com", // generated ethereal user
      pass: password // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Portfolio Site Contact" <andrewkyuportfolioemailer@gmail.com>', // sender address
    to: sendTo, // list of receivers
    subject: "Portfolio Site Contact", // Subject line
    text: "Hello world?", // plain text body
    html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.render("index", { msg: "Email has been sent" });
  });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
