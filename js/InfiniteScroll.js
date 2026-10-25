// Infinite scroll
// linter: ngspicejs-lint --browser -const
// global: IntersectionObserver
// usage: new InfiniteScroll('#sentinel', fetchMoreData);
"use strict";

export class InfiniteScroll {

    constructor (sentinel, callback, triggerDistancePx = 200) {
        this.sentinel = typeof sentinel === 'string' ? document.querySelector(sentinel) : sentinel;
        this.onIntersect = this.onIntersect.bind(this);
        this.observer = new IntersectionObserver(this.onIntersect, {
          root: null,
          rootMargin: '0px 0px ' + triggerDistancePx + 'px 0px',
          threshold: 0
        });
        this.observer.observe(this.sentinel);
        this.callback = callback;
    }

    onIntersect (entries) {
        // if the sentinel is visible and we aren't already loading...
        const entry = entries[0];
        if (entry.isIntersecting) {
            if (this.callback) {
                this.callback();
            }
        }
    }
}

