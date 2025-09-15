import React from "react";
import RegisterForm from "./RegisterForm";

const page = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center">

      <div className="p-6 bg-background rounded-2xl space-y-6 border shadow-2xl">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-center">Register as a Smart Citizen</h1>
          <p className="text-sm text-center text-gray-600">Get All Your citizen services in one place</p>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
};

export default page;
