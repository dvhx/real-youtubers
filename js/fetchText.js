// Fetch text from server then call callback
// linter: ngspicejs-lint --browser
"use strict";

export function fetchText (url, callback) {
    // Fetch text from server then call callback
    var p = fetch(url)
        .then((r) => r.text())
        .catch((err) => {
            console.error("fetchYrcy failed for URL:", url, err);
            throw err;
        });
    return callback ? p.then(callback) : p;
}
