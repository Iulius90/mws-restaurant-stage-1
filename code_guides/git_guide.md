# Udacity Git Commit Message Style Guide
---

## Message Structure
A commit messages consists of three distinct parts separated by a blank line: the title, an optional body and an optional footer. The layout looks like this:

### 1. type: subject
The type is contained within the title and can be one of these types:
- **feat**: a new feature
- **fix**: a bug fix
- **docs**: changes to documentation
- **style**: formatting, missing semi colons, etc; no code change
- **refactor**: refactoring production code
- **test**: adding tests, refactoring test; no production code change
- **chore**: updating build tasks, package manager configs, etc; no production code change


Subjects should be no greater than **50 characters**, should **begin with a capital letter** and do **not end with a period**.

Use an imperative tone to describe what a commit does, rather than what it did. For example, use change; not changed or changes.

### 2. body

Not all commits are complex enough to warrant a body, therefore it is optional and only used when a commit requires a bit of explanation and context. Use the body to explain the **what** and **why** of a commit, not the how.

When writing a body, the blank line between the title and the body is required and you should limit the length of each line to no more than 72 characters.

### 3. footer
The footer is optional and is used to reference issue tracker IDs.