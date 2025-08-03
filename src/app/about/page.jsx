"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function About() {
  const router = useRouter();
  const isLoggedIn = true;
  const handleNavigation = () => {
    if (isLoggedIn) {
      router.push("/");
    }
  };
  return (
    <div>
      {" "}
      <p>This is About page

      </p>
      <p>
        <Link href="/about/address"> Address page </Link>
      </p>
      <button type="button" onClick={handleNavigation}>
        {" "}
        Address page
      </button>
    </div>
  );
}
