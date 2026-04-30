"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useClerk } from "@clerk/nextjs";

export function AuthHeader() {
  const { isSignedIn } = useAuth();
  const { signOut, openSignIn, openSignUp } = useClerk();

  return (
    <header className="flex items-center justify-end gap-3 p-4">
      {!isSignedIn ? (
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button variant="outline" onClick={() => openSignIn()}>
            Sign in
          </Button>
          <Button onClick={() => openSignUp()}>
            Sign up
          </Button>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <UserButton />
          <Button
            variant="outline"
            onClick={() => signOut()}
          >
            Sign out
          </Button>
        </div>
      )}
    </header>
  );
}
