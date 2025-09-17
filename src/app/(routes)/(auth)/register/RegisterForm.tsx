"use client";

import { createUser } from "@/actions/user";
import SubmitButton from "@/components/SubmitButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

interface RegisterFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>();

  const formSubmit: SubmitHandler<RegisterFormValues> = async (data) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Password Didn't match");
      return;
    }

    const payload = {
      email: data.email,
      password: data.password,
    };

    const res = await createUser(payload);
    if (!res.acknowledged) {
      toast.error(res.message);
    } else {
      toast.success("User Registration Successful")
    }

    await signIn("credentials", { ...payload, redirect: false });
    router.push("/");
  };

  return (
    <div className="w-sm pb-8 bg-white dark:bg-gray-900 rounded-2xl p-6">
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="flex flex-col items-center justify-center gap-6"
      >
        <div className="grid w-full max-w-sm items-start gap-1">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="grid w-full max-w-sm items-start gap-1">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <div className="grid w-full max-w-sm items-start gap-1">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
            })}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* <Button className="w-full" type="submit">Register</Button> */}

        <SubmitButton loadingText="Loading..." submitText="Register" className="w-full"></SubmitButton>

        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
