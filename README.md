# Learning Playwright Fundamentals 2.x

This repository contains the source code for learning Playwright test automation fundamentals (version 2.x).

## Project Overview

This project demonstrates the core concepts of Playwright, including:
- Writing and running end-to-end tests
- Cross-browser testing (Chromium, Firefox, WebKit)
- Mobile viewport testing
- Using Playwright's built-in reporting and debugging tools

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (comes with Node.js)

## Installation

```bash
npm install
```

## Running Tests

```bash
# Run all tests headlessly
npm test

# Run tests in headed mode (browser window visible)
npm run test:headed

# Run tests with UI mode
npm run test:ui

# Run tests in debug mode
npm run test:debug

# Show HTML report
npm run show-report

# Generate code with Playwright codegen
npm run codegen
```

## Project Structure

```
.
├── tests/
│   └── example.spec.ts       # Sample Playwright tests
├── playwright.config.ts      # Playwright configuration
├── package.json              # Project dependencies and scripts
├── package-lock.json         # Locked dependency versions
└── .gitignore                # Files ignored by Git
```

## Configuration

The `playwright.config.ts` file includes configurations for:
- **Test directory:** `./tests`
- **Browsers:** Chromium, Firefox, WebKit
- **Mobile viewports:** Pixel 5, iPhone 12
- **Branded browsers:** Microsoft Edge, Google Chrome
- **Artifacts:** Screenshots, videos, and traces captured on failure

## Useful Links

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)

## License

ISC
