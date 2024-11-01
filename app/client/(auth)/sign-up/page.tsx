"use client";

import SkipBtn from "@/components/SkipBtn";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import * as motion from "framer-motion/client";
import SocialLoginBar from "@/components/SocialLoginBar";
import { Dispatch, SetStateAction, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const SignUp = () => {
  const [signUpContainer, setSignUpContainer] = useState(false);

  return (
    <div className="">
      {/* TODO: change this href */}
      <SkipBtn href="/" className="absolute top-4 right-4" />

      {signUpContainer ? (
        <SignUpContainer setSignUpContainer={setSignUpContainer} />
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
          <h1>Sign Up to Fitnesspergram</h1>
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
            onClick={() => setSignUpContainer(true)}
          >
            Create Account
          </Button>

          <p className="mt-3">
            Already have an account ?{" "}
            <Link
              href="/client/log-in"
              className="underline underline-offset-2"
            >
              Log In
            </Link>
          </p>
        </motion.div>
      )}
    </div>
  );
};
export default SignUp;

const Divider = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center justify-center w-full", className)}>
      <div className="w-full h-px bg-black" />
      <p className="px-3">OR</p>
      <div className="w-full h-px bg-black" />
    </div>
  );
};

const SignUpContainer = ({
  setSignUpContainer,
}: {
  setSignUpContainer: Dispatch<SetStateAction<boolean>>;
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
      <h1>Sign up to Fitnesspergram</h1>
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
      <div className="w-[300px] flex flex-col gap-y-2">
        <Label htmlFor="cpassword">Confirm password</Label>
        <Input id="cpassword" />
      </div>
      <Button variant="primary" className="w-[300px] mt-3" size="primary">
        Sign Up
      </Button>
      <Button
        variant="secondary"
        className="w-[300px] mt-3"
        size="secondary"
        onClick={() => setSignUpContainer(false)}
      >
        Back
      </Button>
    </motion.div>
  );
};
