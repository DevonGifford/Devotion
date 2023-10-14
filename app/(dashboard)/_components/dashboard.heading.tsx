"use client";

import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import Image from "next/image";
import { useTheme } from "next-themes";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const { theme } = useTheme();

  return (
    <div className="max-w-3xl ">
      <div>
          <Image
            src={theme === "light" ? "/devotion-banner-dark.svg" : "/devotion-banner-light.png"}
            alt="Devotion-Logo"
            height={10}
            width={377}
            className="flex w-full justify-center items-center p-10 md:pt-20"
          />
      </div>

      <div className="flex flex-col gap-8">
        <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold ">
          Your Ideas, Documents, & Plans. Unified.
        </h1>
        <h3 className="text-base sm:text-xl md:text-2xl font-light">
          Devotion is the connected workspace where better, faster work happens.
        </h3>

        <div>
          {isLoading && (
            <div className="w-full flex items-center justify-center">
              <Spinner size="lg" />
            </div>
          )}
          {isAuthenticated && !isLoading && (
            <Button asChild>
              <Link href="/documents">
                Your Devotion
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          )}
          {!isAuthenticated && !isLoading && (
            <SignInButton mode="modal">
              <Button>
                Get Devotion free
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </SignInButton>
          )}
        </div>
      </div>
    </div>
  );
};
