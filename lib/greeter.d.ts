/// <reference path="../typings/main.d.ts" />
/// <reference path="../typings/main/ambient/inversify/inversify.d.ts" />
import inversify = require('inversify');
export declare class Greeter {
    greeting: string;
    k: inversify.Kernel;
    constructor(message: string);
    greet(): string;
}
