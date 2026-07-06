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

## Topics Covered

The `tests/` directory is organized into the following topic folders:

1. **01_Basics** – Playwright basics and setup
2. **02_first_tests** – Writing your first tests
3. **03_Locators_Commands** – Locators and commands
4. **04_Session_Storage** – Session and local storage handling
5. **05_Allure_Reporting** – Allure test reporting integration
6. **06_Multiple_Element_** – Working with multiple elements
7. **07_WebTables** – Handling web tables
8. **08_Web_Select_Frames_Iframe** – Select elements and iframe basics
9. **09_Frame_Iframe** – Deep dive into frames and iframes
10. **10_Keyboard_Hover_Drag_Drop** – Keyboard actions, hover, drag & drop
11. **11_JS_Alerts** – JavaScript alerts and dialogs
12. **12_Handle_SVG** – SVG element handling
13. **13_Shadow_DOM** – Shadow DOM interactions
14. **14_FileUpload** – File upload scenarios
15. **15_File_Download** – File download scenarios
16. **16_Scroll_toElement** – Scrolling to elements
17. **17_Expect_Assertions** – Expect assertions
18. **18_Test_hooks** – Test hooks (before/after)
19. **19_Data_Driven_Testing** – Data-driven testing patterns
20. **20_Page_Object_Model** – Page Object Model (POM)
21. **21_Fixture** – Playwright fixtures
22. **22_Misc_Concepts** – Miscellaneous concepts
23. **23_Advance_Framework** – Advanced framework topics
24. **Projects** – Practice projects

## Project Structure

```
.
├── tests/
│   ├── 01_Basics/                        # Playwright basics
│   ├── 02_first_tests/                   # First tests
│   ├── 03_Locators_Commands/             # Locators and commands
│   ├── 04_Session_Storage/               # Session storage
│   ├── 05_Allure_Reporting/              # Allure reporting
│   ├── 06_Multiple_Element_/             # Multiple elements
│   ├── 07_WebTables/                     # Web tables
│   ├── 08_Web_Select_Frames_Iframe/      # Select & iframes
│   ├── 09_Frame_Iframe/                  # Frames & iframes
│   ├── 10_Keyboard_Hover_Drag_Drop/      # Keyboard, hover, drag-drop
│   ├── 11_JS_Alerts/                     # JS alerts
│   ├── 12_Handle_SVG/                    # SVG handling
│   ├── 13_Shadow_DOM/                    # Shadow DOM
│   ├── 14_FileUpload/                    # File upload
│   ├── 15_File_Download/                 # File download
│   ├── 16_Scroll_toElement/             # Scroll to element
│   ├── 17_Expect_Assertions/             # Expect assertions
│   ├── 18_Test_hooks/                    # Test hooks
│   ├── 19_Data_Driven_Testing/           # Data-driven testing
│   ├── 20_Page_Object_Model/             # Page Object Model
│   ├── 21_Fixture/                       # Fixtures
│   ├── 22_Misc_Concepts/                 # Misc concepts
│   ├── 23_Advance_Framework/             # Advanced framework
│   ├── Projects/                         # Projects
│   └── example.spec.ts                   # Sample Playwright tests
├── playwright.config.ts                  # Playwright configuration
├── package.json                          # Project dependencies and scripts
├── package-lock.json                     # Locked dependency versions
└── .gitignore                            # Files ignored by Git
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
