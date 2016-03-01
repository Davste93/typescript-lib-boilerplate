/// <reference path="../typings/main.d.ts"/>
/// <reference path="../typings/main/ambient/inversify/inversify.d.ts"/>

import inversify = require('inversify');

export class Greeter {
    greeting: string;
    k : inversify.Kernel = new inversify.Kernel();
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
