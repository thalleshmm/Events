'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
    function _class() {
        _classCallCheck(this, _class);

        this._events = {};
    }

    _createClass(_class, [{
        key: 'listen',
        value: function listen(key, fn) {
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
    }, {
        key: 'dispatch',
        value: function dispatch(key, data) {
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
            this._events[key].forEach(function (fn) {
                return fn(data);
            });
        }
    }]);

    return _class;
}();

exports.default = _class;