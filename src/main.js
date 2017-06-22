export default class {
    constructor() {
        this._events = {};
    }

    listen(key, fn) {
        // If key is not a string, throw error
        if (typeof key !== 'string') {
            throw 'Parameter \'key\' is not a string.';
        }

        // If fn is not a function, throw error
        if (typeof fn !== 'function') {
            throw 'Parameter \'fn\' is not a function.';
        }

        // Uppercase key. Events should not be
        // case sensitive.
        key = key.toUpperCase();

        // If there is not an event with
        // such key, create it as an array
        if (!(key in this._events)) {
            this._events[key] = [];
        }

        // Push fn to event array
        this._events[key].push(fn);
    }

    dispatch(key) {
        // If key is not a string, throw error
        if (typeof key !== 'string') {
            throw 'Parameter \'key\' is not a string.';
        }

        // Uppercase key. Events should not be
        // case sensitive.
        key = key.toUpperCase();

        // If there are no events with that name, bail
        if (!(key in this._events)) return;

        // Run all functions in the event array
        this._events[key].forEach(fn => fn());
    }
}