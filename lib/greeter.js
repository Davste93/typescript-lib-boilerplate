"use strict";
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