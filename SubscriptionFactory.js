import { SubscriptionPrototype } from "./SubscriptionPrototype.js";
export class SubscriptionFactory {
    createSubscription(type, duration, price) {
        return new SubscriptionPrototype(type, duration, price);
    }
}// Factory Method Pattern

//sub - >