// Load modules into global namespace (for console use)
// linter: ngspicejs-lint --browser -let -const
// global:
"use strict";

var SC = window.SC || {};
globalThis.SC = SC;

import {elementsWithId} from "./elementsWithId.js?version=aaaa";
SC.elementsWithId = elementsWithId;
import {elementsWithClass} from "./elementsWithClass.js?version=aaaa";
SC.elementsWithClass = elementsWithClass;
import {fetchText} from "./fetchText.js?version=aaaa";
SC.fetchText = fetchText;
import {fetchJSON} from "./fetchJSON.js?version=aaaa";
SC.fetchJSON = fetchJSON;
import {Storage} from "./Storage.js?version=aaaa";
SC.Storage = Storage;
import {InfiniteScroll} from "./InfiniteScroll.js?version=aaaa";
SC.InfiniteScroll = InfiniteScroll;
import {renderChannel} from "./renderChannel.js?version=aaaa";
SC.renderChannel = renderChannel;


