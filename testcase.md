# Wingify Login Page - Negative Test Cases

## Project Information
- **Application**: Wingify (app.wingify.com)
- **Module**: Login Module
- **Environment**: Production (https://app.wingify.com)
- **Test Framework**: Playwright
- **Date Created**: 2026-07-20
- **Author**: QA Automation Team

---

## Table of Contents
1. [Test Case Template](#test-case-template)
2. [Test Cases Summary](#test-cases-summary)
3. [Negative Test Cases - Details](#negative-test-cases---details)
4. [Playwright Implementation](#playwright-implementation)
5. [Execution Results](#execution-results)

---

## Test Case Template

### Standard Test Case Format

```
┌─────────────────────────────────────────────────────────────┐
│                     TEST CASE DOCUMENT                       │
├─────────────────────────────────────────────────────────────┤
│ TC ID           : TC_001                                    │
│ Test Scenario   : [Brief description of the scenario]       │
│ Test Case Title : [Detailed title of the test case]         │
│ Precondition    : [Prerequisites before test execution]    │
│ Test Data       : [Input data required for the test]       │
│ Priority        : High / Medium / Low                        │
│ Test Type       : Positive / Negative / Boundary            │
├─────────────────────────────────────────────────────────────┤
│ TEST STEPS                                                   │
│ Step 1: [Action to perform]                                 │
│ Step 2: [Action to perform]                                 │
│ Step 3: [Action to perform]                                 │
├─────────────────────────────────────────────────────────────┤
│ EXPECTED RESULT                                              │
│ [What should happen after executing the steps]             │
├─────────────────────────────────────────────────────────────┤
│ ACTUAL RESULT                                                │
│ [What actually happened during execution]                   │
├─────────────────────────────────────────────────────────────┤
│ STATUS                                                       │
│ PASS / FAIL                                                  │
└─────────────────────────────────────────────────────────────┘
```

---

## Test Cases Summary

| TC ID | Test Scenario | Test Case Title | Priority | Status |
|-------|---------------|-----------------|----------|--------|
| TC_001 | Login with Invalid Credentials | Verify login fails with invalid email and invalid password | High | PASS |
| TC_002 | Login with Empty Email | Verify login fails with empty email field and invalid password | High | PASS |
| TC_003 | Login with Empty Password | Verify login fails with valid email format but empty password | High | PASS |

---

## Negative Test Cases - Details

---

### **TC_001: Login with Invalid Email and Invalid Password**

**Test Scenario**: Login with Invalid Credentials

**Test Case Title**: Verify that the Wingify login page displays appropriate error message when user enters invalid email address and invalid password

**Precondition**:
- User has access to the Wingify login page
- Browser is opened and navigated to https://app.wingify.com
- User is not logged in

**Test Data**:
- Email: `invalid_user@test.com`
- Password: `wrongpassword123`

**Priority**: High

**Test Type**: Negative

**Test Steps**:
1. Navigate to URL: https://app.wingify.com
2. Wait for the login page to load completely
3. Verify the page title contains "Login - Wingify"
4. Locate the "Email address" text field
5. Enter email: `invalid_user@test.com`
6. Locate the "Password" text field
7. Enter password: `wrongpassword123`
8. Click on the "Sign in" button
9. Wait for the response (max 3 seconds)
10. Verify the error message is displayed

**Expected Result**:
- User should remain on the login page
- An error message should be displayed: "Your email, password, IP address or location did not match"
- The URL should remain: https://app.wingify.com/#/login
- The email field should retain the entered value
- The password field should be cleared

**Actual Result**:
- User remained on the login page
- Error message displayed: "Your email, password, IP address or location did not match"
- URL remained: https://app.wingify.com/#/login
- Email field retained value: `invalid_user@test.com`
- Password field was cleared after submission

**Status**: **PASS**

---

### **TC_002: Login with Empty Email and Invalid Password**

**Test Scenario**: Login with Empty Email

**Test Case Title**: Verify that the Wingify login page displays appropriate error message when user leaves email field empty and enters invalid password

**Precondition**:
- User has access to the Wingify login page
- Browser is opened and navigated to https://app.wingify.com
- User is not logged in

**Test Data**:
- Email: `` (Empty)
- Password: `wrongpass`

**Priority**: High

**Test Type**: Negative

**Test Steps**:
1. Navigate to URL: https://app.wingify.com
2. Wait for the login page to load completely
3. Verify the page title contains "Login - Wingify"
4. Locate the "Email address" text field
5. Leave email field empty (clear if any pre-filled value exists)
6. Locate the "Password" text field
7. Enter password: `wrongpass`
8. Click on the "Sign in" button
9. Wait for the response (max 3 seconds)
10. Verify the error message is displayed

**Expected Result**:
- User should remain on the login page
- An error message should be displayed: "Your email, password, IP address or location did not match"
- The URL should remain: https://app.wingify.com/#/login
- The email field should remain empty

**Actual Result**:
- User remained on the login page
- Error message displayed: "Your email, password, IP address or location did not match"
- URL remained: https://app.wingify.com/#/login
- Email field remained empty

**Status**: **PASS**

---

### **TC_003: Login with Valid Email Format but Empty Password**

**Test Scenario**: Login with Empty Password

**Test Case Title**: Verify that the Wingify login page displays appropriate error message when user enters valid email format but leaves password field empty

**Precondition**:
- User has access to the Wingify login page
- Browser is opened and navigated to https://app.wingify.com
- User is not logged in

**Test Data**:
- Email: `testuser@gmail.com`
- Password: `` (Empty)

**Priority**: High

**Test Type**: Negative

**Test Steps**:
1. Navigate to URL: https://app.wingify.com
2. Wait for the login page to load completely
3. Verify the page title contains "Login - Wingify"
4. Locate the "Email address" text field
5. Enter email: `testuser@gmail.com`
6. Locate the "Password" text field
7. Leave password field empty (clear if any pre-filled value exists)
8. Click on the "Sign in" button
9. Wait for the response (max 3 seconds)
10. Verify the error message is displayed

**Expected Result**:
- User should remain on the login page
- An error message should be displayed: "Your email, password, IP address or location did not match"
- The URL should remain: https://app.wingify.com/#/login
- The email field should retain the entered value

**Actual Result**:
- User remained on the login page
- Error message displayed: "Your email, password, IP address or location did not match"
- URL remained: https://app.wingify.com/#/login
- Email field retained value: `testuser@gmail.com`

**Status**: **PASS**

---

## Playwright Implementation

### Test File Location
```
tests/
└── 03_Locators_Commands/
    └── 263_Wingify_Negative_Login_Test.spec.ts
```

### Playwright Test Code

```typescript
//https://app.wingify.com/#/login

import { test, expect } from '@playwright/test';

test.describe('Wingify Login Page - Negative Test Cases', () => {
    
    const loginUrl = 'https://app.wingify.com';
    const expectedErrorMessage = 'Your email, password, IP address or location did not match';

    test.beforeEach(async ({ page }) => {
        // Navigate to login page before each test
        await page.goto(loginUrl);
        // Verify page loaded
        await expect(page).toHaveTitle(/Login - Wingify/);
    });

    test('TC_001: Verify login fails with invalid email and invalid password', async ({ page }) => {
        // Test Data
        const email = 'invalid_user@test.com';
        const password = 'wrongpassword123';

        // Locate elements
        const emailField = page.getByRole('textbox', { name: 'Email address' });
        const passwordField = page.getByRole('textbox', { name: 'Password' });
        const signInButton = page.getByRole('button', { name: 'Sign in', exact: true });
        const errorMessage = page.locator('text=Your email, password, IP address or location did not match');

        // Step 1: Fill email field
        await emailField.fill(email);
        
        // Step 2: Fill password field
        await passwordField.fill(password);
        
        // Step 3: Click Sign in button
        await signInButton.click();
        
        // Step 4: Wait for error message and verify
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toContainText(expectedErrorMessage);
        
        // Step 5: Verify URL remains on login page
        await expect(page).toHaveURL(/.*\/login/);
        
        // Step 6: Verify email field retains value
        await expect(emailField).toHaveValue(email);
    });

    test('TC_002: Verify login fails with empty email and invalid password', async ({ page }) => {
        // Test Data
        const email = '';
        const password = 'wrongpass';

        // Locate elements
        const emailField = page.getByRole('textbox', { name: 'Email address' });
        const passwordField = page.getByRole('textbox', { name: 'Password' });
        const signInButton = page.getByRole('button', { name: 'Sign in', exact: true });
        const errorMessage = page.locator('text=Your email, password, IP address or location did not match');

        // Step 1: Clear email field (ensure it's empty)
        await emailField.clear();
        
        // Step 2: Fill password field
        await passwordField.fill(password);
        
        // Step 3: Click Sign in button
        await signInButton.click();
        
        // Step 4: Wait for error message and verify
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toContainText(expectedErrorMessage);
        
        // Step 5: Verify URL remains on login page
        await expect(page).toHaveURL(/.*\/login/);
    });

    test('TC_003: Verify login fails with valid email format but empty password', async ({ page }) => {
        // Test Data
        const email = 'testuser@gmail.com';
        const password = '';

        // Locate elements
        const emailField = page.getByRole('textbox', { name: 'Email address' });
        const passwordField = page.getByRole('textbox', { name: 'Password' });
        const signInButton = page.getByRole('button', { name: 'Sign in', exact: true });
        const errorMessage = page.locator('text=Your email, password, IP address or location did not match');

        // Step 1: Fill email field
        await emailField.fill(email);
        
        // Step 2: Clear password field (ensure it's empty)
        await passwordField.clear();
        
        // Step 3: Click Sign in button
        await signInButton.click();
        
        // Step 4: Wait for error message and verify
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toContainText(expectedErrorMessage);
        
        // Step 5: Verify URL remains on login page
        await expect(page).toHaveURL(/.*\/login/);
        
        // Step 6: Verify email field retains value
        await expect(emailField).toHaveValue(email);
    });
});
```

---

## Execution Results

### Test Run Configuration
- **Browser**: Chromium
- **Headless Mode**: No
- **Viewport**: 1920x1080
- **Trace**: Enabled
- **Screenshot**: Enabled
- **Video**: Enabled

### Test Execution Summary

| TC ID | Test Case | Execution Time | Status | Screenshot |
|-------|-----------|----------------|--------|------------|
| TC_001 | Invalid Email + Invalid Password | ~3s | PASS | Available |
| TC_002 | Empty Email + Invalid Password | ~2s | PASS | Available |
| TC_003 | Valid Email + Empty Password | ~2s | PASS | Available |

### Observations
1. The Wingify application now redirects from app.vwo.com to app.wingify.com
2. All negative test cases produce the same generic error message for security reasons
3. The application does not have client-side validation for empty fields (relies on server-side validation)
4. The password field is cleared after each submission attempt
5. The email field retains its value after failed submission
6. The error message is displayed at the top of the form in a generic container

### Defects Found
- No defects found. All test cases passed as expected.

### Recommendations
1. Consider adding client-side validation for empty fields to improve user experience
2. Consider adding specific error messages for empty fields vs. invalid credentials
3. Consider rate limiting for multiple failed login attempts

---

## Revision History

| Date | Version | Author | Changes |
|------|---------|--------|---------|
| 2026-07-20 | 1.0 | QA Team | Initial creation of test cases |

---

## Appendix

### Playwright Locators Used
- `page.getByRole('textbox', { name: 'Email address' })` - Email input field
- `page.getByRole('textbox', { name: 'Password' })` - Password input field
- `page.getByRole('button', { name: 'Sign in', exact: true })` - Sign in button
- `page.locator('text=Your email, password, IP address or location did not match')` - Error message

### Error Message Text
```
Your email, password, IP address or location did not match
```

### Page Elements Structure
```
- main "Application main content"
  - img "Wingify" (Logo)
  - paragraph: "Sign in to Wingify platform"
  - textbox "Email address" (placeholder: "Enter email ID")
  - textbox "Password" (placeholder: "Enter password")
  - button "Toggle password visibility"
  - button "Forgot Password?"
  - checkbox/label "Remember me"
  - button "Sign in"
  - heading "Or"
  - button "Sign in with Google"
  - button "Sign in using SSO"
  - button "Sign in with Passkey"
  - link "Start a free trial"
  - link "Privacy policy"
  - link "Terms"
```

---

*End of Test Case Document*
