"use server";
import connectDB from "@/lib/connectDB";
import bcrypt from "bcrypt";
import { Collection } from "mongodb";

interface UserData {
  email: string;
  password: string;
}

interface CreateUser {
  status: number;
  message: string;
  acknowledged: boolean;
}

// Create User
export const createUser = async (userData: UserData): Promise<CreateUser> => {
  const passwordHash = hashPassword(userData.password);
  const email = userData.email;

  //   New User Data
  const newUser = { email, passwordHash, role: "user", createdAt: new Date() };

  const collection: Collection = await connectDB("users");

  //   Storing User Data on DB
  const result = await collection.insertOne(newUser);

  if (result.insertedId) {
    const sendResult: CreateUser = {
      status: 201,
      message: "Account created successfully",
      acknowledged: true,
    };

    return sendResult;
  }

  const sendResult: CreateUser = {
    status: 500,
    message: "Something went wrong. try again",
    acknowledged: false,
  };

  return sendResult;
};



// Hashing
const saltRounds = 10;

const hashPassword = async (password: string) => {
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  } catch {
    throw new Error("Could not hash password");
  }
};


// Verify Password
export const verifyPassword = async (password: string, storedHash: string) => {
  try {
    const isMatch = await bcrypt.compare(password, storedHash);
    return isMatch;
  } catch (error) {
    console.error("Error comparing password:", error);
    throw error;
  }
};
