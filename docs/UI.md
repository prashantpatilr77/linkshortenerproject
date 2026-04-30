# UI Component Guidelines

## Overview
This document outlines the strict guidelines for UI components in the Link Shortener project.

## Rules
- **ALL UI elements in this app use shadcn/ui components.**
- **DO NOT create any custom components.**
- **ALWAYS use shadcn/ui components from `/components/ui/`.**

## Rationale
This ensures:
- Consistency across the application
- Maintainability by leveraging pre-built, accessible components
- Faster development without reinventing common UI elements

## Implementation
- Import components from `@/components/ui/`
- Style using Tailwind CSS utilities
- Support dark mode with `dark:` prefixes

## Examples
- Use `Button` from shadcn/ui instead of creating a custom button
- Use `Input` for form fields
- Use `Card` for content containers

## Exceptions
None. All UI elements must follow these guidelines.