"use client";

import { createUser } from "@/actions/user";
import SubmitButton from "@/components/SubmitButton";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface RegisterForm {
  [k: string]: FormDataEntryValue;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm = () => {
  const [error, setError] = useState<string>("");
  const route = useRouter();

  //   handle form submit
  const handleSubmit = async (data: FormData) => {
    setError("");
    const userData = Object.fromEntries(data.entries()) as RegisterForm;
    if (userData.password !== userData.confirmPassword) {
      setError("Password doesn't match");
      return;
    }

    const newUser = { email: userData.email, password: userData.password };

    const result = await createUser(newUser);

    if (result.acknowledged) {
      route.push("/");
    }
  };

  return (
    <form action={handleSubmit}>
      <label htmlFor="">
        Email
        <input className="p-2 border-1" type="email" name="email" />
      </label>
      <br />
      <label htmlFor="">
        Password
        <input className="p-2 border-1" type="password" name="password" />
      </label>
      <br />
      <label htmlFor="">
        Confirm Password
        <input
          className="p-2 border-1"
          type="password"
          name="confirmPassword"
        />
      </label>
      <br />
      {error && <p>{error}</p>}
      <SubmitButton
        loadingText="Creating Account"
        submitText="Create Account"
        className="btn"
      />
    </form>
  );
};

export default RegisterForm;
