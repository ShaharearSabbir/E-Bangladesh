import nodemailer from "nodemailer";

interface MailerArgs {
    to: string,
    subject: string
    body: 
}

export const sendMail = async ({ to, subject, body }: MailerArgs) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "electrotic.bangladesh@gmail.com",
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: to,
    subject: subject,
    html: body,
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    return result;
  } catch (error) {
    throw error;
  }
};
