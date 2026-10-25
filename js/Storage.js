// Simplified access to localStorage with extra checks and prefix and default support
// linter: ngspicejs-lint --browser
// global:
"use strict";

const prefix = 'RYT.';

export class Storage {
    static keys () {
        var pl = prefix.length;
        return Object.keys(localStorage).filter(s => s.startsWith(prefix)).map(s => s.substr(pl));
    }

    static keyExists (key) {
        if (typeof key !== 'string') {
            throw "Storage.keyExists(" + key + ") key is not string!";
        }
        return Object.hasOwn(localStorage, key);
    }

    static clear () {
        Storage.keys().forEach(k => localStorage.removeItem(prefix + k));
    }

    static removeItem(key) {
        if (typeof key !== 'string') {
            throw "Storage.removeItem(" + key + ") key is not string!";
        }
        localStorage.removeItem(prefix + key);
    }

    static size() {
        var t = 0;
        Storage.keys().forEach(k => t += Storage.getString(k).length);
        return t;
    }

    static inc(key,def) {
        // read number, increment it, write it back
        var i = Storage.getNumber(key, def);
        i++;
        Storage.setNumber(key, i);
        return i;
    }

    // string

    static setString(key, str = '') {
        if (typeof key !== 'string') {
            throw "Storage.setString(" + key + ", str) key is not string!";
        }
        if (typeof str !== 'string') {
            throw "Storage.setString('" + key + "', str) str is not string!";
        }
        localStorage.setItem(prefix + key, str);
    }

    static getString(key, def = '') {
        if (typeof key !== 'string') {
            throw "Storage.getString(" + key + ", def) key is not string!";
        }
        if (typeof def !== 'string') {
            throw "Storage.getString('" + key + "', def) def is not string!";
        }
        return localStorage.getItem(prefix + key) || def;
    }

    // number

    static setNumber(key, num) {
        if (typeof num !== 'number') {
            throw "Storage.setNumber('" + key + "', num) num is not number!";
        }
        Storage.setString(key, JSON.stringify(num));
    }

    static getNumber(key, def = 0) {
        if (typeof def !== 'number') {
            throw "Storage.getNumber('" + key + "', def) def is not number!";
        }
        var s = Storage.getString(key, '');
        if (!s) {
            return def;
        }
        return parseFloat(s);
    }

    // boolean

    static setBoolean(key, bool) {
        if (typeof num !== 'boolean') {
            throw "Storage.setBoolean('" + key + "', bool) bool is not boolean!";
        }
        Storage.setString(key, bool ? 'true' : 'false');
    }

    static getBoolean(key, def = false) {
        if (typeof def !== 'boolean') {
            throw "Storage.getBoolean('" + key + "', bool) bool is not boolean!";
        }
        var s = Storage.getString(key, '');
        if (!s) {
            return def;
        }
        return s === 'true';
    }

    // object

    static setObject(key, obj) {
        if (typeof obj !== 'object') {
            throw "Storage.setObject('" + key + "', obj) obj is not object!";
        }
        Storage.setString(key, JSON.stringify(obj));
    }

    static getObject(key, def = {}) {
        if (typeof def !== 'object') {
            throw "Storage.getObject('" + key + "', " + def +") def is not object!";
        }
        var s = Storage.getString(key, '');
        if (!s) {
            return def;
        }
        return JSON.parse(s);
    }

    // array

    static setArray(key, arr) {
        if (!Array.isArray(arr)) {
            throw "Storage.setArray('" + key + "', arr) arr is not array!";
        }
        Storage.setString(key, JSON.stringify(arr));
    }

    static getArray(key, def = []) {
        if (!Array.isArray(def)) {
            throw "Storage.getArray('" + key + "', def) def is not array!";
        }
        var s = Storage.getString(key, '');
        if (!s) {
            return def;
        }
        return JSON.parse(s);
    }
}

