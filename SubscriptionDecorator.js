
export class SubscriptionDecorator {
    constructor(subscription) {
        this.subscription = subscription;
    }

    printDetails() {
        this.subscription.printDetails();
    }
}// Decorator Pattern

//sub ->decor(subs) ->