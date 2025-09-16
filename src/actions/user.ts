"use server";
import connectDB from "@/lib/connectDB";
import bcrypt from "bcrypt";
import { Collection, WithId } from "mongodb";

interface UserData {
  email: string;
  password: string;
}

export interface User {
  email: string;
  role: string;
  UID: string;
}

export interface FunctionReturns {
  status: number;
  message: string;
  acknowledged: boolean;
  user?: User;
}

interface UserOnDatabase {
  email: string;
  passwordHash: string;
  role: string;
  createdAt: string;
  UID: string;
}

// Create User
export const createUser = async (
  userData: UserData
): Promise<FunctionReturns> => {
  const passwordHash = (await hashPassword(userData.password)) as string;
  const email = userData.email;

  //   New User Data
  const newUser: UserOnDatabase = {
    email,
    passwordHash,
    role: "user",
    createdAt: new Date().toISOString(),
    UID: generateUid(),
  };

  const collection: Collection = await connectDB("users");

  //   Storing User Data on DB
  const result = await collection.insertOne(newUser);

  if (result.insertedId) {
    const sendResult: FunctionReturns = {
      status: 201,
      message: "Account created successfully",
      acknowledged: true,
    };

    return sendResult;
  }

  const sendResult: FunctionReturns = {
    status: 500,
    message: "Something went wrong. try again",
    acknowledged: false,
  };

  return sendResult;
};

// getUserData
export const getUserFromDb = async (
  email: string,
  password: string
): Promise<User> => {
  const collection: Collection = await connectDB("users");
  const userData = (await collection.findOne({
    email,
  })) as WithId<UserOnDatabase>;

  if (!userData) {
    throw new Error("User not found");
  }

  const isMatch = verifyPassword(password, userData.passwordHash);

  if (!isMatch) {
    throw new Error("Password doesn't match");
  }

  const user: User = {
    email: userData.email,
    role: userData.role,
    UID: userData.UID,
  };

  return user;
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

// Generate random UID
const generateUid = () => {
  const timestamp = new Date().getTime();

  const random = Math.random().toString(36).substring(2, 10);

  return `${timestamp}${random}`;
};
