import { System } from "./System.js";
import { SubscriptionSystem } from "./SubscriptionSystem.js";
import { SubscriptionIterator } from "./SubscriptionIterator.js";
import { SubscriptionMemento } from "./SubscriptionMemento.js";

console.log('|Welcome to Our Subscription System|');
let sub = new System();
console.log('|Start selling subscriptions|');

sub.sellSubscription('Basic', 3, 10, false);
sub.sellSubscription('Ultimate', 12, 30, false);
sub.sellSubscription('Premium', 6, 20, true);
console.log('\n\n\n');

let subscriptionSystem = new SubscriptionSystem();
let subscriptions = subscriptionSystem.getSubscriptions();

console.log('|All Subscriptions...................|');
let iterator = new SubscriptionIterator(subscriptions);
while (iterator.hasNext()) {
    let subscription = iterator.next();
    subscription.printDetails();
}

let memento = new SubscriptionMemento(subscriptions);

console.log('Restoring Subscriptions from Memento:');
let restoredSubscriptions = memento.restore();
let restoredIterator = new SubscriptionIterator(restoredSubscriptions);
while (restoredIterator.hasNext()) {
    const subscription = restoredIterator.next();
    subscription.printDetails();
}
