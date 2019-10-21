const mailer = require('nodemailer');


module.exports = async (email) => {
  // Check https://myaccount.google.com/lesssecureapps?pli=1
  const transport = mailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_PASS,
    },
  });
  await transport.sendMail({
    to: email,
    from: 'email',
    html: 'Congratulations! You have been successfully signed up.',
    subject: 'Successful registration into LUN.',
  });
};
