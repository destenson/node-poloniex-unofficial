#!/usr/bin/env node
/*
 *
 * poloniex-unofficial
 * https://git.io/polonode
 *
 * Yet another unofficial Node.js wrapper for the Poloniex cryptocurrency
 * exchange APIs.
 *
 * Copyright (c) 2016 Tyler Filla
 *
 * This software may be modified and distributed under the terms of the MIT
 * license. See the LICENSE file for details.
 *
 */

"use strict";

// Import main module
const polo = require("./../../../");

// Create push API wrapper
const poloPush = new polo.PushWrapper();

// Demonstrate the ticker feed
poloPush.ticker((err, response) => {
    if (err) {
        console.log("An error occurred: " + err.msg);

        // Disconnect from feed
        return true;
    }

    console.log(response);
});
