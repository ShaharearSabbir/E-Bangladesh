"use server";

import { sendMail } from "./lib/mailer/mailer";


export const sendVerificationEmail = async (email: string, code: string) => {
  try {
    const subject = "Email Verification Code";
    const body = `
      <div style="font-family: sans-serif; text-align: center;">
        <h2>Verify Your Email</h2>
        <p>Use the following verification code to verify your account:</p>
        <h3 style="color: #4F46E5;">${code}</h3>
        <p>Enter this code in the app to activate your account.</p>
      </div>
    `;

    const result = await sendMail({ to: email, subject, body });
    return { success: true, info: result };
  } catch (error: any) {
    console.error("Error sending verification email:", error);
    return { success: false, error: error.message };
  }
};
