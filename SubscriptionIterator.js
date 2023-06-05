
export class SubscriptionIterator {
    constructor(subscriptions) {
        this.subscriptions = subscriptions;
        this.currentIndex = 0;
    }

    hasNext() {
        return this.currentIndex < this.subscriptions.length;
    }

    next() {
        return this.subscriptions[this.currentIndex++];
    }
}// Iterator Pattern