import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

const SkipBtn = ({
  href,
  className = "",
}: {
  href: string;
  className?: string;
}) => {
  return (
    <Button
      className={cn("bg-white text-black py-6 px-8", className)}
      variant="secondary"
      asChild
    >
      <Link href={href}>
        Skip
        <ChevronRight className="w-4 h-4 font-semibold" />
      </Link>
    </Button>
  );
};
export default SkipBtn;
