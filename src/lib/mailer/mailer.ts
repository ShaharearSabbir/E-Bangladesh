"use server"

import nodemailer from "nodemailer";

interface MailerArgs {
  to: string;
  subject: string;
  body: string;
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "electrotic.bangladesh@gmail.com",
    pass: process.env.GMAIL_APP_PASSWORD as string,
  },
});

export const sendMail = async ({ to, subject, body }: MailerArgs) => {
  const mailOptions = {
    from: "electrotic.bangladesh@gmail.com",
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
