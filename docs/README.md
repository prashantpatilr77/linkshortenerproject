# Agent Instructions for Link Shortener Project

Welcome! This directory contains comprehensive instructions for LLMs and development agents working on the Link Shortener application.

## Quick Navigation

### Getting Started

### Development Standards

## Key Points to Remember

### ⚠️ Critical: Next.js 16 Breaking Changes
This project uses Next.js **16.2.4** which has breaking changes from earlier versions.
ALWAYS refer to the relevant .md file under /docs BEFORE generating any code. 

**ALWAYS** check `/node_modules/next/dist/docs/` before implementing Next.js features.

### 🔒 Type Safety
- TypeScript **strict mode** is enabled
- All code must pass type checking
- Never use `any` without justification

### 🔑 Authentication
- All protected features require Clerk authentication
- Always verify `userId` on the server before database operations
- Use `auth()` from `@clerk/nextjs/server` in server components and actions

### 💾 Database
- Use Drizzle ORM for type-safe queries
- Access database only in Server Components and API routes
- Leverage TypeScript type inference from schema

### 🎨 UI Components
- Use shadcn/ui components from `/components/ui/`
- Style with Tailwind CSS utilities (no custom CSS)
- Support dark mode with `dark:` prefixes

### 📝 File Organization
- One component per file
- Use `@/` for absolute imports
- Keep related logic together by feature

## For Common Tasks

### Creating a New Feature

### Adding an API Endpoint


### Updating the Database
1. Update schema in `/db/schema.ts` → [04-DATABASE.md](04-DATABASE.md)
2. Generate migration: `npm run db:generate`
3. Push changes: `npm run db:push`
4. Update TypeScript types automatically (they're inferred from schema)

### Creating a New Component


## Project Structure

```
linkshortenerproject/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   ├── dashboard/         # Dashboard feature
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # React components
│   └── ui/                # shadcn/ui components
├── db/                    # Database layer
│   ├── schema.ts          # Drizzle schema
│   ├── index.ts           # DB client
│   └── drizzle.config.ts  # ORM config
├── lib/                   # Utilities
│   └── utils.ts           # Helper functions
├── docs/                  # Agent instructions (this directory)
├── public/                # Static assets
├── tsconfig.json          # TypeScript config
├── eslint.config.mjs      # Linting rules
├── package.json           # Dependencies
└── README.md              # Project documentation
```

## Quick Reference

### Technology Versions
- Next.js: 16.2.4
- React: 19.2.4
- TypeScript: 5
- Tailwind CSS: 4
- Clerk: 7.2.7
- Drizzle ORM: 0.45.2
- Node: 18+ recommended

### Common Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run db:generate  # Generate database migration
npm run db:push      # Apply migrations
```

### Environment Setup
1. Copy `.env.example` to `.env.local`
2. Fill in required values (Clerk keys, Database URL)
3. Run `npm install`
4. Run `npm run dev`
5. Open http://localhost:3000

## Best Practices Summary

✅ **DO:**
- Use Server Components by default
- Leverage TypeScript strict mode
- Check `/node_modules/next/dist/docs/` for Next.js features
- Verify user ID before database operations
- Use Drizzle ORM for all database access
- Keep components focused and single-responsibility
- Use shadcn/ui components for UI
- Style with Tailwind utilities
- Document complex logic
- Use absolute imports (`@/`)

❌ **DON'T:**
- Use `any` type in TypeScript
- Access database from Client Components
- Trust user IDs from client without verification
- Create custom CSS (use Tailwind)
- Use relative imports
- Mix multiple features in one file
- Disable ESLint rules without justification
- Expose secret keys to client code
- Ignore TypeScript errors
- Forget to handle errors properly

## Questions?

Refer to the specific instruction files for detailed information on any topic. Each file covers its domain comprehensively with examples and best practices.

---

**Last Updated**: April 29, 2026  
**Project**: Link Shortener Application  
**Version**: 0.1.0
