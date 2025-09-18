import { ObjectId } from "mongodb";

// Refined Address interface
interface Address {
  division?: string;
  zila?: string;
  thana?: string;
  RMO?: RMO;
  union?: string;
  mouza?: string;
  word?: number;
  village?: string;
  holdingNumber?: string;
  postOffice?: string;
  postCode?: number;
  voterArea?: string;
}

// User-friendly type aliases
type BloodGroup = "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
type MaritalStatus = "Single" | "Married" | "Divorced" | "Widowed";
type Religion = "Islam" | "Hinduism" | "Buddhism" | "Christianity" | "Other";
type RMO =
  | "Rural"
  | "Municipality"
  | "City"
  | "Other Area"
  | "Cantonment"
  | "City Corporation";
type Gender = "Male" | "Female" | "Other";
type UserRole = "citizen" | "admin" | "officer";

// Separate interface for family members to avoid storing sensitive data
interface FamilyMember {
  name?: string;
  relation?: string;
  isDead?: boolean;
  dateOfDeath?: string;
}

export interface UserOnDatabase {
  UID: string;
  email: string;
  passwordHash?: string;
  role: UserRole;
  createdAt: string;
  updatedAt?: string;
  lastLoginAt?: string;
  isVerified: boolean;
  hasAgreedToTermsAndConditions?: boolean;

  // Personal Information
  firstName?: string;
  lastName?: string;
  gender?: Gender;
  bloodGroup?: BloodGroup;
  DOB?: string;
  placeOfBirth?: string;
  religion?: Religion;
  maritalStatus?: MaritalStatus;
  occupation?: string;
  disabilities?: string;
  birthMark?: string;
  educationalQualification?: string;
  image?: string;

  // Contact Information
  mobileNumber?: string;
  telephoneNumber?: string;

  // Identity Documents
  NID?: string;
  birthCertificate?: string;
  TIN?: string;
  drivingLicense?: string;
  passportNumber?: string;

  // Address
  presentAddress?: Address;
  permanentAddress?: Address;
  voterAddress?: "present" | "permanent";

  // Family Information
  father?: FamilyMember;
  mother?: FamilyMember;
  spouse?: FamilyMember[];
  siblings?: FamilyMember[];
}
