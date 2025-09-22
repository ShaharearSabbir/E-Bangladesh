"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import dPro from "../../assets/default-profile.jpg"
import { toast } from "sonner";

const UserNav = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "unauthenticated") {
    return (
      <>
        {" "}
        <Link href="/login">
          <Button variant={"outline"}>Login</Button>{" "}
        </Link>{" "}
        <Link href="/register">
          <Button className="bg-primary">Register</Button>{" "}
        </Link>{" "}
      </>
    );
  }
  return (
    <div className="flex items-center gap-6">
      <span>Welcome, {session?.user.email}</span>{" "}
      <div className=" border-2 rounded-full p-0.5">
        <Image src={dPro} alt="" className="h-10 w-10 rounded-full cursor-pointer" />
      </div>
      {/* Call the official signOut() function{" "} */}
      <Button variant={"destructive"}
        onClick={() => {
          signOut();
          toast.warning("User Logout")
        }}>logout
      </Button>{" "}
    </div>
  );
};

export default UserNav;
