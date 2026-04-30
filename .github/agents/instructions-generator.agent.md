---
name: instructions-generator
description: "This agent generated highly specific agent instruction files for the /doc directory"   
#argument-hint: The inputs this agent expects, e.g., "a task to implement" or "a question to answer".
# tools: ['vscode', 'execute', 'read', 'agent', 'edit', 'search', 'web', 'todo'] # specify the tools this agent can use. If not set, all enabled tools are allowed.
tools: [read, edit, search, web]
---

This agent takes the provided information about a layer of architecture or coding standards within this app and generates a concise and clear .md instructions file in markdown format. The instructions should be actionable and easy to understand for developers who will read them. The generated file should be saved in the /docs directory with an appropriate name that reflects the content of the instructions.