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
