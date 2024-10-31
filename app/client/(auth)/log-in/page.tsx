"use client";

import SkipBtn from "@/components/SkipBtn";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import * as motion from "framer-motion/client";
import SocialLoginBar from "@/components/SocialLoginBar";
import { Dispatch, SetStateAction, useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const [loginContainer, setLoginContainer] = useState(false);

  return (
    <div className="">
      {/* TODO: change this href */}
      <SkipBtn href="/" className="absolute top-4 right-4" />

      {loginContainer ? (
        <LoginContainer setLoginContainer={setLoginContainer} />
      ) : (
        <motion.div
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            ease: "anticipate",
            duration: 0.7,
          }}
          className="bg-white rounded-t-[35px] p-4 w-full h-[520px] absolute bottom-0 max-sm:flex max-sm:flex-col items-center gap-y-3"
        >
          <h1>Login to Fitnesspergram</h1>
          <p className="text-muted-foreground mb-6">
            the perfect solution to your personal training
          </p>
          <SocialLoginBar service="google" />
          <SocialLoginBar service="apple" />
          <SocialLoginBar service="facebook" />

          <Divider className="w-[320px] my-6" />

          <Button
            variant="primary"
            className="w-[300px]"
            size="primary"
            onClick={() => setLoginContainer(true)}
          >
            Log In
          </Button>

          <p className="mt-3">
            New Customer ?{" "}
            <Link
              href="/client/sign-up"
              className="underline underline-offset-2"
            >
              Sign Up
            </Link>
          </p>
        </motion.div>
      )}
    </div>
  );
};
export default Login;

const Divider = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center justify-center w-full", className)}>
      <div className="w-full h-px bg-black" />
      <p className="px-3">OR</p>
      <div className="w-full h-px bg-black" />
    </div>
  );
};

const LoginContainer = ({
  setLoginContainer,
}: {
  setLoginContainer: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <motion.div
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        ease: "anticipate",
        duration: 0.7,
      }}
      className="bg-white rounded-t-[35px] p-4 w-full h-[520px] absolute bottom-0 max-sm:flex max-sm:flex-col items-center gap-y-3"
    >
      <h1>Login to Fitnesspergram</h1>
      <p className="text-muted-foreground mb-6">
        the perfect solution to your personal training
      </p>
      <div className="w-[300px] flex flex-col gap-y-2">
        <Label htmlFor="email">Email address</Label>
        <Input id="email" />
      </div>
      <div className="w-[300px] flex flex-col gap-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" />
      </div>
      <Button variant="primary" className="w-[300px] mt-3" size="primary">
        Log In
      </Button>
      <Button
        variant="secondary"
        className="w-[300px] mt-3"
        size="secondary"
        onClick={() => setLoginContainer(false)}
      >
        Back
      </Button>
    </motion.div>
  );
};
