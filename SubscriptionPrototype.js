
export class SubscriptionPrototype {
    constructor(type, duration, price) {
        this.type = type;
        this.duration = duration;
        this.price = price;
    }

    clone() {
        return new SubscriptionPrototype(this.type, this.duration, this.price);
    }

    printDetails() {
        console.log(`Type: ${this.type}, Duration: ${this.duration} months, Price: $${this.price}`);
    }
}// Prototype Pattern
