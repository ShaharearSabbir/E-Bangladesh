"use client";
import { login } from "@/actions/user";
import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

interface RegisterFormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>();

  const formSubmit: SubmitHandler<RegisterFormValues> = async (data) => {
    console.log("Form Data:", data);
    login(data);

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

        <Button className="w-full" type="submit">
          Register
        </Button>

        <p className="text-center text-sm">
          Not Have an Account?{" "}
          <Link href="/register" className="font-semibold underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
