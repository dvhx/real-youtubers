// Return all elements with defined id all in one object
// linter: ngspicejs-lint --browser
// global:
"use strict";

export function elementsWithId (root) {
    // return all elements with defined id, if id is set
    root = root || document.body;
    var o = {};
    for (var n of root.querySelectorAll('[id]')) {
        if (n.id) {
            o[n.id] = n;
        }
    }
    return o;
}

