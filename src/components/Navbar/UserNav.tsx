"use client";

// In your UserNav component or any component using useSession
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "../ui/button";

const UserNav = () => {
  const { data: session, status } = useSession();


  if (status === "loading") {
    return <div>Loading...</div>;
  }
  // If the user is unauthenticated
  if (status === "unauthenticated") {
    // You can redirect to the login page or show a log-in link
    return (
      <>
        <Link href="/login">
          <Button variant={"outline"}>Login</Button>
        </Link>
        <Link href="/register">
          <Button className="bg-primary">Register</Button>
        </Link>
      </>
    );
  }
  // If the user is authenticated, render the user-specific content
  return <div>Welcome, {session?.user.email}</div>;
};

export default UserNav;
