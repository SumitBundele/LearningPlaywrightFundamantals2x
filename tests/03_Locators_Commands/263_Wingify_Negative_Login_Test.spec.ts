//https://app.wingify.com/#/login
// Test Case Document: testcase.md

import { test, expect } from '@playwright/test';

test.describe('Wingify Login Page - Negative Test Cases', () => {
    
    const loginUrl = 'https://app.wingify.com';
    const expectedErrorMessage = 'Your email, password, IP address or location did not match';

    test('TC_001: Verify login fails with invalid email and invalid password', async ({ page }) => {
        // Navigate to login page
        await page.goto(loginUrl, { timeout: 60000 });
        await page.waitForLoadState('networkidle', { timeout: 30000 });
        
        // Verify page loaded
        await expect(page).toHaveTitle(/Login - Wingify/);
        
        // Test Data
        const email = 'invalid_user@test.com';
        const password = 'wrongpassword123';

        // Locate elements using multiple strategies
        const emailField = page.getByRole('textbox', { name: 'Email address' });
        const passwordField = page.getByRole('textbox', { name: 'Password' });
        const signInButton = page.getByRole('button', { name: 'Sign in', exact: true });
        
        // Step 1: Fill email field
        await emailField.waitFor({ state: 'visible' });
        await emailField.fill(email);
        
        // Step 2: Fill password field
        await passwordField.fill(password);
        
        // Step 3: Click Sign in button
        await signInButton.click();
        
        // Step 4: Wait for error message and verify using multiple locator strategies
        await page.waitForTimeout(3000);
        const errorMessage = page.getByText(expectedErrorMessage);
        await expect(errorMessage).toBeVisible({ timeout: 10000 });
        await expect(errorMessage).toContainText(expectedErrorMessage);
        
        // Step 5: Verify URL remains on login page
        await expect(page).toHaveURL(/.*login/);
        
        // Step 6: Verify email field retains value
        await expect(emailField).toHaveValue(email);
    });

    test('TC_002: Verify login fails with empty email and invalid password', async ({ page }) => {
        // Navigate to login page
        await page.goto(loginUrl, { timeout: 60000 });
        await page.waitForLoadState('networkidle', { timeout: 30000 });
        
        // Verify page loaded
        await expect(page).toHaveTitle(/Login - Wingify/);
        
        // Test Data
        const email = '';
        const password = 'wrongpass';

        // Locate elements
        const emailField = page.getByRole('textbox', { name: 'Email address' });
        const passwordField = page.getByRole('textbox', { name: 'Password' });
        const signInButton = page.getByRole('button', { name: 'Sign in', exact: true });

        // Step 1: Clear email field (ensure it's empty)
        await emailField.waitFor({ state: 'visible' });
        await emailField.clear();
        
        // Step 2: Fill password field
        await passwordField.fill(password);
        
        // Step 3: Click Sign in button
        await signInButton.click();
        
        // Step 4: Wait for error message and verify
        await page.waitForTimeout(3000);
        const errorMessage = page.getByText(expectedErrorMessage);
        await expect(errorMessage).toBeVisible({ timeout: 10000 });
        await expect(errorMessage).toContainText(expectedErrorMessage);
        
        // Step 5: Verify URL remains on login page
        await expect(page).toHaveURL(/.*login/);
    });

    test('TC_003: Verify login fails with valid email format but empty password', async ({ page }) => {
        // Navigate to login page
        await page.goto(loginUrl, { timeout: 60000 });
        await page.waitForLoadState('networkidle', { timeout: 30000 });
        
        // Verify page loaded
        await expect(page).toHaveTitle(/Login - Wingify/);
        
        // Test Data
        const email = 'testuser@gmail.com';
        const password = '';

        // Locate elements
        const emailField = page.getByRole('textbox', { name: 'Email address' });
        const passwordField = page.getByRole('textbox', { name: 'Password' });
        const signInButton = page.getByRole('button', { name: 'Sign in', exact: true });

        // Step 1: Fill email field
        await emailField.waitFor({ state: 'visible' });
        await emailField.fill(email);
        
        // Step 2: Clear password field (ensure it's empty)
        await passwordField.clear();
        
        // Step 3: Click Sign in button
        await signInButton.click();
        
        // Step 4: Wait for error message and verify
        await page.waitForTimeout(3000);
        const errorMessage = page.getByText(expectedErrorMessage);
        await expect(errorMessage).toBeVisible({ timeout: 10000 });
        await expect(errorMessage).toContainText(expectedErrorMessage);
        
        // Step 5: Verify URL remains on login page
        await expect(page).toHaveURL(/.*login/);
        
        // Step 6: Verify email field retains value
        await expect(emailField).toHaveValue(email);
    });
});
