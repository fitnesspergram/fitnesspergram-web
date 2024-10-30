import SkipBtn from "@/components/SkipBtn";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import * as motion from "framer-motion/client";

const SignUp = () => {
  return (
    <div className="">
      {/* TODO: change this href */}
      <SkipBtn href="/" className="absolute top-4 right-4" />

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

        <Button variant="primary" className="w-[300px]" size="primary">
          Create Account
        </Button>

        <p className="mt-3">
          Already have an account ?{" "}
          <Link href="/client/log-in" className="underline underline-offset-2">
            Log In
          </Link>
        </p>
      </motion.div>
    </div>
  );
};
export default SignUp;

const SocialLoginBar = ({ service }: { service: string }) => {
  return (
    <div className="rounded-full w-[300px] h-[50px] p-3 border border-black flex items-center justify-center gap-x-3">
      {service == "google" && (
        <>
          <Image src="/google-logo.svg" alt="google" width={30} height={30} />
          <p className="font-semibold">Continue with Google</p>
        </>
      )}
      {service == "apple" && (
        <>
          <Image
            src="/facebook-logo.svg"
            alt="facebook"
            width={30}
            height={30}
          />
          <p className="font-semibold">Continue with Facebook</p>
        </>
      )}
      {service == "facebook" && (
        <>
          <Image src="/apple-logo.svg" alt="apple" width={30} height={30} />
          <p className="font-semibold">Continue with Apple</p>
        </>
      )}
    </div>
  );
};

const Divider = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center justify-center w-full", className)}>
      <div className="w-full h-px bg-black" />
      <p className="px-3">OR</p>
      <div className="w-full h-px bg-black" />
    </div>
  );
};
