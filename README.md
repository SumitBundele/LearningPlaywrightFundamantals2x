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

# Show Playwright HTML report
npm run show-report

# Generate code with Playwright codegen
npm run codegen

# View Allure report
npx allure serve allure-results
```

## Topics Covered

The `tests/` directory is organized into the following topic folders:

1. **01_Basics** – Playwright basics and setup
   - `229_Basic_Test.spec.ts` – Basic title verification test
   - `230_Test_Annotation.spec.ts` – Test annotations (`skip`, `only`, `fail`, `slow`, conditional)
2. **02_first_tests** – Writing your first tests
   - `231_First_running_Tc_Verify.spec.ts` – First running test case verifying title and logo
   - `232_Browser_context_Page.spec.ts` – Browser → Context → Page hierarchy demo
   - `233_BCP_ex02.spec.ts` – Multi-user test with separate browser contexts
   - `234_BCP_Multiple_pages.spec.ts` – Multiple tabs inside a single context
   - `235_Test_PW.spec.ts` – Fixture-based tests with automatic browser/context/page handling
   - `236_BCP_TEST_Pw.spec.ts` – Multi-user interaction using the `browser` fixture
   - `237_BCP_TEST_Options.spec.ts` – Browser context with custom options (viewport, locale, timezone, geolocation)
3. **03_Locators_Commands** – Locators and commands
    - `238_Locator_commands.spec.ts` – Locator command basics
    - `239_Project_VWO_login.spec.ts` – VWO login project using locators
    - `240_xpaths.spec.ts` – XPath locator strategies
    - `241_Project3_signup_Vwo.spec.ts` – VWO signup project
    - `242_Project3_SignupVWO_PW_Locators.spec.ts` – VWO signup with Playwright locators
    - `243_Playwright_Commands.spec.ts` – Common Playwright commands
    - `244_Referrer.spec.ts` – Referrer header handling
    - `245_getByRole.spec.ts` – `getByRole` locator usage
    - `246_Press_Sequentially.spec.ts` – Sequential key press actions
    - `263_Wingify_Negative_Login_Test.spec.ts` – Wingify login negative test cases (invalid credentials, empty fields)
4. **04_Session_Storage** – Session and local storage handling
   - `247_SessionStorage.spec.ts` – Save and reuse session storage (serial tests: login → load dashboard)
   - `248_TestVWODashboard.spec.ts` – Direct dashboard/settings access using saved session (no login required). Uses `test.step()` for structured VWO steps visible in Allure and TTA reports
5. **05_Allure_Reporting** – Allure test reporting integration
   - Allure Playwright reporter configured in `playwright.config.ts`
   - Attachments: screenshots, videos, and traces visible in Allure reports
6. **06_Multiple_Element_** – Working with multiple elements
   - `250_Multiple_elemnts.spec.ts` – Handle multiple elements with `allInnerTexts()`, looping, and `all()` to get element handles and attributes
   - `251_multiple_element_ex2.spec.ts` – Filter and click a specific element using `getByTestId()`
7. **07_WebTables** – Handling web tables
   - `252_webTables.spec.ts` – Extract a single value from a web table using dynamic XPath loops
   - `252_Webtable02.spec.ts` – Iterate rows/columns with dynamic XPath to find data (Helen Bennett example)
   - `253_Webtable_dynamic.spec.ts` – Structured row extraction using `nth()` and `allInnerTexts()`
   - `254_Filters_pageLocator.spec.ts` – Filter page locators and assertions on web table data
   - `255_Webtable_Xpath.spec.ts` – XPath strategies for locating web table elements
   - `256_Webtable_While_loop.spec.ts` – Iterate through web table pages using a `while` loop
   - `257_Webtable_forLoop_Pagination.spec.ts` – Pagination handling with `for` loop and collect emails across pages
   - `258_Webtable_pagination_function.spec.ts` – Reusable `findRowByName()` helper for paginated table search
8. **08_Web_Select_Frames_Iframe** – Select elements and iframe basics
   - `259_Web_Select.spec.ts` – Basic web select using `selectOption()`
   - `260_Custom_Dropdown.spec.ts` – Custom dropdown interactions with `getByRole('option')`
   - `261_Advance_Select_Pro.spec.ts` – Advanced select box variants (single, multi-chip, creatable, async searchable)
   - `262_SpiceJet.spec.ts` – SpiceJet flight search with autocomplete location input
9. **09_Frame_Iframe** – Deep dive into frames and iframes
    - `262_IFrame_Locator.spec.ts` – Interact with a single iframe using `frameLocator()` (form filling inside vehicle registration iframe)
    - `263_Frameset_Main_Side_footer.spec.ts` – Handle multiple frames (main, side, footer) and iterate over all frames with `page.locator('//frame').all()`
    - `264_Iframe_exampel2.spec.ts` – Nested iframe traversal (`iframe → iframe → iframe`) on selectorshub.com
10. **10_Keyboard_Hover_Drag_Drop** – Keyboard actions, hover, drag & drop
    - `265_Keyboard_key.spec.ts` – Keyboard key presses (`page.keyboard.press()`, `up()`, `down()`) on keycode.info
    - `266_Hover_select.spec.ts` – Hover over menu items and click submenu options on spicejet.com
    - `267_Hover_only_meal.spec.ts` – Hover on nav items, list all submenu elements, and click a specific option
    - `268_Drag_drop.spec.ts` – Basic drag-and-drop between two columns on the-internet.herokuapp.com
    - `269_Adcance_Drag_drop.spec.ts` – Advanced drag-and-drop with custom data-status attribute locators
    - `270_Context_Menu_right_click.spec.ts` – Right-click context menu handling, reading all menu items, and selecting an option
    - `playwright.cli.Skill.md` – Playwright Agent CLI reference (commands, features, CLI vs MCP comparison)
11. **11_JS_Alerts** – JavaScript alerts and dialogs
    - `271_Js_Alerts.spec.ts` – Handle JS Alert, Confirm, and Prompt dialogs using `page.once('dialog')` with assertions on dialog type, message, and result text
12. **12_Handle_SVG** – SVG element handling
    - `272_SVG_ex.spec.ts` – Flipkart search test with SVG elements using `@smoke` and `@Regression` tags, `test.describe()` with `beforeEach` hook
    - `272_SVG_ex02.spec.ts` – Search for products, click SVG search icon, extract results using dynamic XPath, and iterate titles with `page.locator().allInnerTexts()`
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

## Key API Reference

### `page.goto()`

Navigates to a URL and waits for the page to load.

| Argument | Type | Description | Example |
|---|---|---|---|
| **url** | `string` | The URL to navigate to | `await page.goto('https://example.com')` |
| **options** | `object` | Optional settings (see below) | `await page.goto(url, { waitUntil: 'networkidle' })` |

#### Options

| Option | Type | Default | Description | Example |
|---|---|---|---|---|
| **waitUntil** | `string` | `load` | When to consider navigation done | `await page.goto(url, { waitUntil: 'networkidle' })` |
| **timeout** | `number` | `30000` | Max time to wait in milliseconds | `await page.goto(url, { timeout: 10000 })` |
| **referer** | `string` | - | HTTP referer header value | `await page.goto(url, { referer: 'https://google.com' })` |

#### waitUntil Values

| Value | Meaning |
|---|---|
| `load` | Wait for `load` event (default) |
| `domcontentloaded` | Wait for `DOMContentLoaded` |
| `networkidle` | Wait until no network connections for 500ms |
| `commit` | Wait until navigation response is received |

#### Full Example

```typescript
await page.goto('https://example.com/login', {
  waitUntil: 'networkidle',
  timeout: 15000,
  referer: 'https://example.com'
});
```

### `page.getByRole()`

Locates elements by their ARIA role, ARIA attributes, and accessible name.

| Argument | Type | Description | Example |
|---|---|---|---|
| **role** | `string` | ARIA role of the element | `page.getByRole('button')` |
| **options** | `object` | Optional settings (see below) | `page.getByRole('button', { name: 'Submit' })` |

#### Options

| Option | Type | Default | Description | Example |
|---|---|---|---|---|
| **name** | `string` or `RegExp` | - | Accessible name (screen reader text) | `{ name: 'Submit' }` |
| **exact** | `boolean` | `false` | Match `name` exactly (case-sensitive, whole string) | `{ exact: true }` |
| **checked** | `boolean` | - | Whether checkbox/radio is checked | `{ checked: true }` |
| **disabled** | `boolean` | - | Whether the element is disabled | `{ disabled: false }` |
| **expanded** | `boolean` | - | Whether the element is expanded (`aria-expanded`) | `{ expanded: true }` |
| **pressed** | `boolean` | - | Whether button is pressed (`aria-pressed`) | `{ pressed: true }` |
| **selected** | `boolean` | - | Whether element is selected (`aria-selected`) | `{ selected: true }` |
| **level** | `number` | - | Heading level (`1` to `6`) when role is `heading` | `{ level: 1 }` |
| **includeHidden** | `boolean` | `false` | Include elements not visible or not in accessibility tree | `{ includeHidden: true }` |

#### Common ARIA Roles

`alert`, `alertdialog`, `application`, `article`, `banner`, `blockquote`, `button`, `caption`, `cell`, `checkbox`, `code`, `columnheader`, `combobox`, `complementary`, `contentinfo`, `definition`, `deletion`, `dialog`, `directory`, `document`, `emphasis`, `feed`, `figure`, `form`, `generic`, `grid`, `gridcell`, `group`, `heading`, `img`, `insertion`, `link`, `list`, `listbox`, `listitem`, `log`, `main`, `marquee`, `math`, `meter`, `menu`, `menubar`, `menuitem`, `menuitemcheckbox`, `menuitemradio`, `navigation`, `none`, `note`, `option`, `paragraph`, `presentation`, `progressbar`, `radio`, `radiogroup`, `region`, `row`, `rowgroup`, `rowheader`, `scrollbar`, `search`, `searchbox`, `separator`, `slider`, `spinbutton`, `status`, `strong`, `subscript`, `superscript`, `switch`, `tab`, `table`, `tablist`, `tabpanel`, `term`, `textbox`, `time`, `timer`, `toolbar`, `tooltip`, `tree`, `treeitem`

#### Examples

```typescript
// Basic usage
page.getByRole('button', { name: 'Submit' })

// Exact match
page.getByRole('heading', { name: 'Welcome', exact: true })

// With heading level
page.getByRole('heading', { level: 1 })

// With state filters
page.getByRole('checkbox', { checked: true })
page.getByRole('button', { pressed: true })
page.getByRole('tab', { selected: true })
page.getByRole('button', { expanded: false })

// With disabled state
page.getByRole('button', { name: 'Submit', disabled: false })

// Regex for name
page.getByRole('link', { name: /Download PDF/i })

// Include hidden elements
page.getByRole('button', { name: 'Hidden Button', includeHidden: true })
```

## Project Structure

```
.
├── tests/
│   ├── 01_Basics/                        # Playwright basics
│   │   ├── 229_Basic_Test.spec.ts
│   │   └── 230_Test_Annotation.spec.ts
│   ├── 02_first_tests/                   # First tests
│   │   ├── 231_First_running_Tc_Verify.spec.ts
│   │   ├── 232_Browser_context_Page.spec.ts
│   │   ├── 233_BCP_ex02.spec.ts
│   │   ├── 234_BCP_Multiple_pages.spec.ts
│   │   ├── 235_Test_PW.spec.ts
│   │   ├── 236_BCP_TEST_Pw.spec.ts
│   │   └── 237_BCP_TEST_Options.spec.ts
    │   ├── 03_Locators_Commands/             # Locators and commands
    │   │   ├── 238_Locator_commands.spec.ts
    │   │   ├── 239_Project_VWO_login.spec.ts
    │   │   ├── 240_xpaths.spec.ts
    │   │   ├── 241_Project3_signup_Vwo.spec.ts
    │   │   ├── 242_Project3_SignupVWO_PW_Locators.spec.ts
    │   │   ├── 243_Playwright_Commands.spec.ts
    │   │   ├── 244_Referrer.spec.ts
    │   │   ├── 245_getByRole.spec.ts
    │   │   ├── 246_Press_Sequentially.spec.ts
    │   │   └── 263_Wingify_Negative_Login_Test.spec.ts
│   ├── 04_Session_Storage/               # Session storage
│   │   ├── 247_SessionStorage.spec.ts
│   │   └── 248_TestVWODashboard.spec.ts
│   ├── 05_Allure_Reporting/              # Allure reporting
│   ├── 06_Multiple_Element_/             # Multiple elements
│   │   ├── 250_Multiple_elemnts.spec.ts
│   │   └── 251_multiple_element_ex2.spec.ts
│   ├── 07_WebTables/                     # Web tables
│   │   ├── 252_webTables.spec.ts
│   │   ├── 252_Webtable02.spec.ts
│   │   ├── 253_Webtable_dynamic.spec.ts
│   │   ├── 254_Filters_pageLocator.spec.ts
│   │   ├── 255_Webtable_Xpath.spec.ts
│   │   ├── 256_Webtable_While_loop.spec.ts
│   │   ├── 257_Webtable_forLoop_Pagination.spec.ts
│   │   └── 258_Webtable_pagination_function.spec.ts
│   ├── 08_Web_Select_Frames_Iframe/      # Select & iframes
│   │   ├── 259_Web_Select.spec.ts
│   │   ├── 260_Custom_Dropdown.spec.ts
│   │   ├── 261_Advance_Select_Pro.spec.ts
│   │   └── 262_SpiceJet.spec.ts
    │   ├── 09_Frame_Iframe/                  # Frames & iframes
    │   │   ├── 262_IFrame_Locator.spec.ts
    │   │   ├── 263_Frameset_Main_Side_footer.spec.ts
    │   │   └── 264_Iframe_exampel2.spec.ts
    │   ├── 10_Keyboard_Hover_Drag_Drop/      # Keyboard, hover, drag-drop
    │   │   ├── 265_Keyboard_key.spec.ts
    │   │   ├── 266_Hover_select.spec.ts
    │   │   ├── 267_Hover_only_meal.spec.ts
    │   │   ├── 268_Drag_drop.spec.ts
    │   │   ├── 269_Adcance_Drag_drop.spec.ts
    │   │   ├── 270_Context_Menu_right_click.spec.ts
    │   │   ├── Learning.md
    │   │   └── playwright.cli.Skill.md
    │   ├── 11_JS_Alerts/                     # JS alerts
    │   │   └── 271_Js_Alerts.spec.ts
│   ├── 12_Handle_SVG/                    # SVG handling
│   │   ├── 272_SVG_ex.spec.ts
│   │   └── 272_SVG_ex02.spec.ts
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
├── utils/
│   └── CustomReporter.ts                  # Custom TTA HTML reporter with live console + report generation
├── playwright.config.ts                  # Playwright configuration
├── package.json                          # Project dependencies and scripts
├── package-lock.json                     # Locked dependency versions
└── .gitignore                            # Files ignored by Git
```

## Reporters

This project uses **three reporters** simultaneously:

1. **Line Reporter** – Terminal output with progress indicators
2. **Allure Playwright** – Rich HTML test reports with steps, attachments, and history
3. **Custom TTA Reporter** (`utils/CustomReporter.ts`) – Real-time HTML report with:
   - Live console step tracking (⏳/✅/❌)
   - Screenshot, video, and trace galleries per test
   - Expandable test detail panels with step-level logs
   - Pass/fail statistics dashboard
   - Report history page

### Viewing Reports

| Report Type | Command | Notes |
|---|---|---|
| **Allure** | `npx allure serve allure-results` | Opens in browser; shows screenshots, videos, steps |
| **TTA HTML** | Open `tta-report/index.html` in browser | Use VS Code **Live Server** extension for best experience |
| **Playwright** | `npm run show-report` | Built-in Playwright HTML report |

> **Tip:** Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.liveserver) VS Code extension, then right-click `tta-report/index.html` → **Open with Live Server** to view the TTA report with working videos.

## Configuration

The `playwright.config.ts` file includes configurations for:
- **Test directory:** `./tests`
- **Browser:** Desktop Chrome (other browsers/projects temporarily disabled)
- **Headless mode:** `false` (browser window visible during tests)
- **Viewport:** `1920x1080`
- **Reporters:** Line + Allure + Custom TTA
- **Artifacts:**
  - **Trace:** `on` (always collected)
  - **Screenshot:** `on` (always captured)
  - **Video:** `on` (always recorded)
- *(Mobile viewports and branded browsers are commented out and can be re-enabled as needed)*

## Useful Links

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)

## License

ISC
