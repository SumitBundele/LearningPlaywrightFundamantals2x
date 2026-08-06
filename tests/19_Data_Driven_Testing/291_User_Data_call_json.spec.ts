import { test, expect } from '@playwright/test';

import userData from './test-data/290_User.json'; //import json file using mordern Javascript syntax

test('Verify user data from JSON file', async ({ page }) => {

    console.log('Username:', userData.username);
    console.log('Password:', userData.password);

});