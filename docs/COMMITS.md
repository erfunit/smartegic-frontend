# 📘 Commit Naming Convention Guidelines

A clear and consistent commit naming convention is essential for maintaining the quality and readability of the project history, especially in team collaborations. This guideline outlines the commit naming convention for our Next.js project.

## 🛠️ Commit Message Structure

```

<type>(<scope>): <description>

<body>

<footer>
```

### Components

1. **Type**: Specifies the nature of the commit.
2. **Scope**: Indicates the part of the project affected.
3. **Description**: A brief summary of the changes.
4. **Body** (optional): Detailed description of the changes.
5. **Footer** (optional): Information about breaking changes, issue references, etc.

## 📑 Types

-   **feat**: A new feature (e.g., `feat(auth): add login functionality`) ✨
-   **fix**: A bug fix (e.g., `fix(header): correct alignment issues`) 🐛
-   **docs**: Documentation changes (e.g., `docs(readme): update installation instructions`) 📝
-   **style**: Code style changes (formatting, missing semicolons, etc.) that do not affect functionality (e.g., `style(button): adjust margin spacing`) 💄
-   **refactor**: Code refactoring without changing the external behavior (e.g., `refactor(api): simplify fetch logic`) ♻️
-   **perf**: Performance improvements (e.g., `perf(api): improve response time`) ⚡
-   **test**: Adding or updating tests (e.g., `test(auth): add tests for login feature`) ✅
-   **build**: Changes to build process, dependencies, or tools (e.g., `build(deps): update eslint to v7.20.0`) 🛠️
-   **ci**: Changes to CI configuration files and scripts (e.g., `ci(github-actions): add deployment workflow`) 👷
-   **chore**: Other changes that don't modify src or test files (e.g., `chore(deps): update dependency versions`) 🔧
-   **revert**: Revert a previous commit (e.g., `revert: feat(auth): add login functionality`) ⏪

## 🗂️ Scope

-   **components**: Changes to React components (e.g., `feat(components/header): add new logo`)
-   **pages**: Changes to Next.js pages (e.g., `fix(pages/index): correct navigation link`)
-   **styles**: Changes to styling (e.g., `style(styles/global): update global CSS`)
-   **api**: Changes to API routes (e.g., `feat(api/user): add user endpoint`)
-   **hooks**: Changes to custom hooks (e.g., `refactor(hooks/useAuth): optimize hook logic`)
-   **lib**: Changes to utility libraries (e.g., `perf(lib/validation): improve validation performance`)
-   **config**: Changes to configuration files (e.g., `build(config): update webpack config`)

## 📝 Description

-   Use imperative mood (e.g., "add", "fix", "update").
-   Be concise but descriptive.

## 🌟 Examples

### ✨ Feature Addition

```
feat(auth): add login functionality

- Implement login form
- Integrate with authentication API
- Add form validation
```

### 🐛 Bug Fix

```
fix(header): correct alignment issues

- Fixes alignment issues on mobile view
- Adjusts CSS flex properties
```

### 📝 Documentation Update

```
docs(readme): update installation instructions

- Add steps for setting up the project locally
- Include troubleshooting section
```

### ♻️ Code Refactor

```
refactor(api): simplify fetch logic

- Remove redundant code
- Optimize data fetching logic
```

### 💄 Style Changes

```
style(button): adjust margin spacing

- Update margin to be more consistent with design guidelines
```

By following this commit naming convention, our team can maintain a clean, readable, and informative project history, facilitating better collaboration and easier project management.
