"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { userAction } from "@/app/api/auth/verify/route";

export default function VerifyEmailPage() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const email = searchParams.get("email");
  const action = searchParams.get("action") || "VERIFY_EMAIL"; 
  const [message, setMessage] = useState("Processing...");

  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    const runAction = async () => {
      if (!code || !email) {
        setMessage("Invalid link");
        return;
      }

      const res = await userAction(email, code, action, newPassword || undefined);
      setMessage(res.message);
    };

    runAction();
  }, [code, email, action, newPassword]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-6 border rounded-md shadow-md">
        <h1 className="text-xl font-bold">User Action</h1>
        <p className="mt-4">{message}</p>

        {action === "RESET_PASSWORD" && (
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="mt-4 p-2 border rounded w-full"
          />
        )}
      </div>
    </div>
  );
}
