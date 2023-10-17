import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center">
      <Image
        src="/devotion-logo-dark.png"
        height="45"
        width="45"
        alt="Logo"
        className="dark:hidden"
      />
      <Image
        src="/devotion-logo-light.png"
        height="45"
        width="45"
        alt="Logo"
        className="hidden dark:block"
      />
      {/* <p className={cn("font-bold", font.className)}>
        Devotion
      </p> */}
    </div>
  );
};
