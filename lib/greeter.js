/// <reference path="../typings/main.d.ts"/>
/// <reference path="../typings/main/ambient/inversify/inversify.d.ts"/>
"use strict";
var inversify = require('inversify');
var Greeter = (function () {
    function Greeter(message) {
        this.k = new inversify.Kernel();
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
exports.Greeter = Greeter;
//# sourceMappingURL=greeter.js.map