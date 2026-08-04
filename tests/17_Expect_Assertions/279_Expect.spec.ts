import { test, expect } from '@playwright/test';

test.describe('Expected Assertion', () => {
    test('should assert the expected value', async ({ page }) => {
        //page fixture will inject the page directly into playwright 
        //fixture ,before running the test
        //browsweContext was created first -> then Browser was created -> then Page was created automatically by playwright
        //BCP was automatically done by playwright before running the test

        // Test implementation
        expect(1 + 2).toBe(3);
        //expect(actualValue).toEqual(expectedValue);
        expect(false).toBeFalsy();
        expect(true).toBeTruthy();
        expect(null).toBeNull();
        expect(20).toBeGreaterThan(10);
        expect([1, 2, 3]).toEqual([1, 2, 3]);
        expect({ role: 'admin' }).toEqual({ role: 'admin' });
        expect({ age: 30, role: 'admin' }).toEqual({ role: 'admin' });



    });
});
