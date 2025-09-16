"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { Button } from "../ui/button";

const UserNav = () => {
  const { data: session, status } = useSession();

  console.log(status);

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
    <div>
      <span>Welcome, {session?.user.email}</span>{" "}
      {/* Call the official signOut() function */}{" "}
      <Button onClick={() => signOut()}>logout</Button>{" "}
    </div>
  );
};

export default UserNav;
