
import { test as base } from '@playwright/test';
import {execSync} from 'node:child_process'

export const test = base.extend<
    Record<string, unknown>,
    { server: { serverUri: string; dbUri: string } }
    >({

    server: [
        async ({}, use) => {
            console.log('setting up server!');
            console.log(execSync('node --version').toString());
            
            console.log(execSync('node ./test-js-file.js').toString());
            await use({dbUri: 'something', serverUri: 'something'})
        },
        {scope: 'worker', auto: true}
    ]
})