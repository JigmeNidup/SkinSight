"use client";
import { Button } from "antd";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const SignInPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session) {
      router.push("/profile");
    }
  }, [session]);
  return (
    <div>
      <br />
      <Button onClick={() => signIn("google")}>Sign in with Google</Button>
    </div>
  );
};

export default SignInPage;
