export class SubscriptionFactory {
    createSubscription(type, duration, price) {
        let subscription;

        switch (type) {
            case 'Basic':
                subscription = new BasicSubscription(duration, price);
                break;
            case 'Ultimate':
                subscription = new UltimateSubscription(duration, price);
                break;
            case 'Premium':
                subscription = new PremiumSubscription(duration, price);
                break;
            default:
                throw new Error('Invalid subscription type');
        }

        return subscription;
    }
}

export class Subscription {
    constructor(duration, price) {
        this.duration = duration;
        this.price = price;
        this.buyerName = '';
    }

    calculatePrice() {
        return this.duration * this.price;
    }

    printDetails() {
        console.log(`Type: ${this.constructor.name}`);
        console.log(`Duration: ${this.duration} months`);
        console.log(`Price: $${this.calculatePrice()}`);
        console.log(`Buyer Name: ${this.buyerName}`);
        console.log('-------------------------------------');
    }
}

export class BasicSubscription extends Subscription {
    constructor(duration, price) {
        super(duration, price);
        this.maxBooks = 1000;
    }
}

export class UltimateSubscription extends Subscription {
    constructor(duration, price) {
        super(duration, price);
        this.maxBooks = 2000;
    }
}

export class PremiumSubscription extends Subscription {
    constructor(duration, price) {
        super(duration, price);
        this.maxBooks = 5000;
    }
}
