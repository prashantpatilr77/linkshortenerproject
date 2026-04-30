"use client";

import { useClerk } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export function AuthButtons() {
  const { openSignIn, openSignUp } = useClerk();

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <Button variant="outline" onClick={() => openSignIn()}>
        Sign in
      </Button>
      <Button onClick={() => openSignUp()}>
        Sign up
      </Button>
    </div>
  );
}
