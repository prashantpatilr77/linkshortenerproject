# Authentication

## Overview

This application uses **Clerk** for all authentication needs. No other authentication methods or libraries should be implemented or used. Clerk provides secure, scalable authentication with features like social logins, email/password, and multi-factor authentication.

## Key Requirements

### Protected Routes
- The `/dashboard` page is a protected route and **must** require the user to be logged in to access it.
- Use Clerk's authentication middleware or server-side checks to enforce this.

### Redirections
- If a user is logged in and attempts to access the homepage (`/`), they should be automatically redirected to `/dashboard`.
- Implement this logic in the root page component or layout.

### Sign In and Sign Up
- Sign in and sign up flows via Clerk **must** always launch as modals, not redirect to separate pages.
- Use Clerk's `<SignIn />` and `<SignUp />` components configured for modal display.

## Implementation Guidelines

### Server-Side Authentication
- Always verify the `userId` on the server before performing any database operations or accessing protected resources.
- Use `auth()` from `@clerk/nextjs/server` in Server Components and Server Actions:

```typescript
import { auth } from '@clerk/nextjs/server';

export default async function ProtectedPage() {
  const { userId } = await auth();
  
  if (!userId) {
    return <div>Please sign in to access this page.</div>;
  }

  // Proceed with authenticated logic
}
```

### Client-Side Authentication
- Use `useAuth()` from `@clerk/nextjs` for client-side authentication state.
- For modals, use Clerk's modal components:

```typescript
import { SignIn, SignUp } from '@clerk/nextjs';

export default function AuthButtons() {
  return (
    <div>
      <SignIn routing="modal" />
      <SignUp routing="modal" />
    </div>
  );
}
```

### Middleware
- Implement authentication middleware to protect routes:

```typescript
// middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)']);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
```

### Redirection Logic
- In the homepage component, check authentication status and redirect if logged in:

```typescript
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function HomePage() {
  const { userId } = await auth();
  
  if (userId) {
    redirect('/dashboard');
  }

  // Render landing page for unauthenticated users
}
```

## Best Practices

✅ **DO:**
- Always check `userId` before database operations
- Use Server Components for authentication checks when possible
- Implement proper error handling for authentication failures
- Test authentication flows thoroughly

❌ **DON'T:**
- Implement custom authentication logic
- Store sensitive authentication data in client-side state
- Bypass Clerk for any authentication needs
- Use authentication in Client Components unless necessary

## Testing Authentication

- Test protected routes by attempting access without authentication
- Verify redirections work correctly for both authenticated and unauthenticated states
- Test modal sign-in/sign-up flows
- Ensure database operations fail gracefully without valid `userId`

## Questions?

For specific implementation details or troubleshooting authentication issues, refer to the [Clerk Next.js documentation](https://clerk.com/docs/references/nextjs/overview) or check the project's existing authentication code.