import readline from 'readline';
import { SubscriptionSystem } from './SubscriptionSystem.js';
import { SubscriptionFactory } from './SubscriptionFactory.js';

export class System {
    constructor() {
        this.subscriptionSystem = new SubscriptionSystem();
        this.subscriptionFactory = new SubscriptionFactory();
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    startSelling() {
        console.log('|Start selling subscriptions|');
        this.sellSubscription();
    }

    sellSubscription() {
        this.rl.question('Type of subscription (or type /stop to exit): ', (type) => {
            if (type === '/stop') {
                this.rl.close();
                return;
            }

            this.rl.question('Duration (in months): ', (duration) => {
                this.rl.question('Price: ', (price) => {
                    this.rl.question('Is the buyer a student? (yes/no): ', (isStudent) => {
                        this.rl.question('Buyer Name: ', (buyerName) => {
                            let actualPrice = parseFloat(price);
                            if (isStudent.toLowerCase() === 'yes') {
                                // 20% discount for students
                                actualPrice *= 0.8;
                            }

                            const subscription = this.subscriptionFactory.createSubscription(type, parseInt(duration), actualPrice);
                            subscription.buyerName = buyerName;
                            this.subscriptionSystem.addSubscription(subscription);

                            console.log(`Sold a ${type} subscription for ${duration} months at $${actualPrice} to ${buyerName}`);
                            this.sellSubscription(); // Allow selling another subscription
                        });
                    });
                });
            });
        });
    }
}
// Facade Pattern

