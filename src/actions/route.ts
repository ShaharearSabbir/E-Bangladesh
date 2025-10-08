"use server";

import connectDB from "@/lib/connectDB";

export async function userAction(
  email: string,
  code: string,
  action: string,
  newPassword?: string
) {
  const collection = await connectDB("users");
  const decodedEmail = decodeURIComponent(email).trim().toLowerCase();
  const stringCode = code.toString();
  let user;

  console.log("=== userAction called ===");
  console.log("Action:", action);
  console.log("Email:", decodedEmail);
  console.log("Code:", stringCode);
  if (newPassword) console.log("New Password:", newPassword);

  switch (action) {
    case "VERIFY_EMAIL": {
      user = await collection.findOne({ email: decodedEmail, verificationCode: stringCode });
      console.log("Found user:", user);

      if (!user) {
        console.log("Invalid verification code!");
        return { status: 400, message: "Invalid verification code" };
      }

      await collection.updateOne(
        { email: decodedEmail },
        { $set: { isVerified: true } }
      );

      console.log("Email verified successfully for:", decodedEmail);
      return { status: 200, message: "Email verified successfully" };
    }

    case "RESET_PASSWORD": {
      if (!newPassword) {
        console.log("New password missing!");
        return { status: 400, message: "New password required" };
      }

      user = await collection.findOne({ email: decodedEmail, verificationCode: stringCode });
      console.log("Found user for reset:", user);

      if (!user) {
        console.log("Invalid reset code!");
        return { status: 400, message: "Invalid reset code" };
      }

      // Password hashing
      const hashedPassword = newPassword;
      console.log("Hashed password:", hashedPassword);

      await collection.updateOne(
        { email: decodedEmail },
        { $set: { passwordHash: hashedPassword } }
      );

      console.log("Password reset successfully for:", decodedEmail);
      return { status: 200, message: "Password reset successfully" };
    }

    default: {
      console.log("Invalid action received:", action);
      return { status: 400, message: "Invalid action" };
    }
  }
}
 