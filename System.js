import { SubscriptionSystem } from "./SubscriptionSystem.js";
import { SubscriptionFactory } from "./SubscriptionFactory.js";
export class System {
    constructor() {
        this.subscriptionSystem = new SubscriptionSystem();
        this.subscriptionFactory = new SubscriptionFactory();
    }

    sellSubscription(type, duration, price, isStudent) {
        let actualPrice = price;
        if (isStudent) {
            //20% disc
            actualPrice = price * 0.8;
        }

        const subscription = this.subscriptionFactory.createSubscription(type, duration, actualPrice);
        this.subscriptionSystem.addSubscription(subscription);

        console.log(`Sold a ${type} subscription for ${duration} months at $${actualPrice}`);
    }
}// Facade Pattern

