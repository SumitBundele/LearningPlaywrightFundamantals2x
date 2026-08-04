# Playwright Test Functions (Latest Version)

The following table lists all the test functions available in the latest version of Playwright:

| Function | Description |
|----------|-------------|
| `test` | Declares a test case. |
| `test.only` | Runs only this specific test, skipping all others. |
| `test.skip` | Skips the test unconditionally. |
| `test.skip(condition, description)` | Skips the test if the condition is true. |
| `test.fixme` | Marks the test as fixme (similar to skip, but indicates it needs fixing). |
| `test.fixme(condition, description)` | Marks the test as fixme if the condition is true. |
| `test.fail` | Marks the test as expected to fail. |
| `test.fail(condition, description)` | Marks the test as expected to fail if the condition is true. |
| `test.slow` | Marks the test as slow, tripling the default timeout. |
| `test.slow(condition, description)` | Marks the test as slow if the condition is true. |
| `test.step` | Defines a test step for better reporting and debugging. |
| `test.use` | Specifies options or fixtures to use for tests in the current scope. |
| `test.beforeAll` | Runs a function before all tests in the current scope. |
| `test.afterAll` | Runs a function after all tests in the current scope. |
| `test.beforeEach` | Runs a function before each test in the current scope. |
| `test.afterEach` | Runs a function after each test in the current scope. |
| `test.describe` | Groups related tests together. |
| `test.describe.only` | Runs only the tests within this describe block. |
| `test.describe.skip` | Skips all tests within this describe block. |
| `test.describe.configure` | Configures the describe block with specific options (e.g., mode, retries). |
| `test.describe.serial` | Marks all tests in the describe block to run serially. |
| `test.describe.parallel` | Marks all tests in the describe block to run in parallel. |
| `test.info` | Returns information about the currently running test. |
| `test.expect` | Used for writing assertions in Playwright tests. |
| `test.setTimeout` | Sets the timeout for the current test. |
| `test.extend` | Creates a new test object with additional fixtures. |
| `test.extend(fixtures)` | Extends the test with custom fixtures. |

## Examples

### test.skip
```javascript
import { test, expect } from '@playwright/test';

test.skip('skips this test', async ({ page }) => {
  // This test will be skipped
});
```

### test.only
```javascript
import { test, expect } from '@playwright/test';

test.only('runs only this test', async ({ page }) => {
  // Only this test will run
});
```

### test.describe
```javascript
import { test, expect } from '@playwright/test';

test.describe('Group of tests', () => {
  test('test one', async ({ page }) => {
    // Test code
  });

  test('test two', async ({ page }) => {
    // Test code
  });
});
```
