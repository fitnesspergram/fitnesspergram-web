import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-sm:flex items-center justify-center max-sm:min-h-screen">
      <div className="max-sm:flex max-sm:flex-col items-center gap-y-4 h-full">
        <Image
          src="/logo.png"
          alt="logo"
          width={400}
          height={400}
          className="max-sm:w-[640px]"
        />

        <Button
          variant="secondary"
          size="secondary"
          className="w-[300px]"
          asChild
        >
          {/* TODO: change this to login */}
          <Link href="/trainer/sign-up">I am trainer</Link>
        </Button>
        <Button
          variant="secondary"
          size="secondary"
          className="w-[300px]"
          asChild
        >
          {/* TODO: change this to login */}
          <Link href="/client/sign-up">I am client</Link>
        </Button>
      </div>
    </div>
  );
}
