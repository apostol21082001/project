export class SubscriptionSystem {
    static instance;

    constructor() {
        if (SubscriptionSystem.instance) {
            return SubscriptionSystem.instance;
        }

        this.subscriptions = [];
        SubscriptionSystem.instance = this;
    }

    addSubscription(subscription) {
        this.subscriptions.push(subscription);
    }

    getSubscriptions() {
        return this.subscriptions;
    }

    getStudentSubscriptions() {
        return this.subscriptions.filter(subscription => subscription.isStudent);
    }
}


// Singleton Pattern

