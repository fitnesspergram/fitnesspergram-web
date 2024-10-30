import { Button } from "@/components/ui/button";
import Image from "next/image";

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
        <Button variant="secondary" size="secondary" className="w-[300px]">
          I am trainer
        </Button>
        <Button variant="secondary" size="secondary" className="w-[300px]">
          I am client
        </Button>
      </div>
    </div>
  );
}
