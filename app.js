const purchaseSum = 12345678;
const minPurchaseAmountForBonus = 1000;
const bonusAmountPerThousand = 100;
console.log(purchaseSum);
let bonuses = (purchaseSum - purchaseSum%minPurchaseAmountForBonus)/minPurchaseAmountForBonus*bonusAmountPerThousand;
console.log(bonuses);