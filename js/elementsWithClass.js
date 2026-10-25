// Return all elements with classes, mapped by class name
// linter: ngspicejs-lint --browser
// global:
"use strict";

export function elementsWithClass (root) {
    // return all elements with classes, mapped by class name
    // first element wins on duplicate classes (duplicates are ignored)
    root = root || document.body;
    var o = Object.create(null);
    for (var n of root.querySelectorAll('[class]')) {
        for (var cls of n.classList) {
            if (!(cls in o)) {
                o[cls] = n;
            }
        }
    }
    return o;
}
