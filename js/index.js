// Main page
// linter: ngspicejs-lint --browser -let -const
// global: SC
"use strict";

SC.status = SC.Storage.getObject('status', {}); // {url1:"hide", url2:"undecided", url3: "like", ...}
SC.channel = {}; // fetched json objects, key is filename

SC.showFew = function () {
    // render few filtered channels (infinite scroll)
    var n = 5;
    var bunch = SC.filtered.slice(0, n);
    SC.filtered = SC.filtered.slice(n);
    bunch.forEach((key) => {
        SC.fetchJSON('channels/' + encodeURIComponent(key) + '.json?version=aaaa').then((data) => {
          //console.log(key, data);
          SC.channel[key] = data;
          SC.renderChannel(key, data, SC.status);
        });
    });
};

SC.updateCounts = function () {
    // update counts (undecided/like/hide) in filter dropdown
    var o = {
        hide: 0,
        like: 0,
        undecided: 0
    };
    SC.channels.forEach((c) => {
        if (SC.status[c] === 'hide') {
            o.hide++;
        } else if (SC.status[c] === 'like') {
            o.like++;
        } else {
            o.undecided++;
        }
    });
    SC.e.filter_undecided.textContent = 'Undecided (' + o.undecided + ')';
    SC.e.filter_like.textContent = 'Liked (' + o.like + ')';
    SC.e.filter_hide.textContent = 'Hidden (' + o.hide + ')';
};

SC.onFilterRefresh = function () {
    // load channels according to filter
    SC.e.channels.textContent = '';
    // apply filter
    SC.filtered = SC.channels.filter((c) => SC.status[c] === SC.e.filter.value || (!SC.status[c] && SC.e.filter.value === 'undecided'));
    SC.updateCounts();
};

window.addEventListener('DOMContentLoaded', function () {
    SC.e = SC.elementsWithId();
    SC.e.filter.value = SC.Storage.getString('filter', 'undecided');
    SC.e.filter.onchange = function () {
        // remember filter
        SC.Storage.setString('filter', SC.e.filter.value);
        SC.onFilterRefresh();
        SC.showFew();
    };
    SC.fetchText('channels/INDEX.txt?cache=' + Date.now()).then((s) => {
        SC.channels = s.trim().split('\n');
        SC.onFilterRefresh();
        SC.infiniteScroll = new SC.InfiniteScroll('#sentinel', SC.showFew);
    });
});
