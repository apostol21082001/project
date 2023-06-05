export class SubscriptionSystem {
    constructor() {
        if (SubscriptionSystem.instance) {
            return SubscriptionSystem.instance;
        }
        SubscriptionSystem.instance = this;
        this.subscriptions = [];
    }

    addSubscription(subscription) {
        this.subscriptions.push(subscription);
    }

    getSubscriptions() {
        return this.subscriptions;
    }
}// Singleton Pattern
