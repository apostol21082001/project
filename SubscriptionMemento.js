import { SubscriptionPrototype } from "./SubscriptionPrototype.js";
export class SubscriptionMemento {
    constructor(subscription) {
        this.type = subscription.type;
        this.duration = subscription.duration;
        this.price = subscription.price;
    }

    restore() {
        return new SubscriptionPrototype(this.type, this.duration, this.price);
    }
}// Memento Pattern
