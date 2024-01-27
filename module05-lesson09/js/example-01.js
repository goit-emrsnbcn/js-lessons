/* 
Example 1 - Jewelry workshop

Write a calcTotalPrice(stoneName) method that takes the name of a stone, calculates and returns the total cost of stones with that name, (price * quantity) from the stones property.

*/

const chopShop = {
    stones: [
        { name: "Emerald", price: 1300, quantity: 4 },
        { name: "Emerald", price: 5000, quantity: 5 },
        { name: "Diamond", price: 2700, quantity: 3 },
        { name: "Sapphire", price: 1400, quantity: 7 },
        { name: "Ruby", price: 800, quantity: 2 },
    ],
    calcTotalPrice(stoneNameToFind) {
        let foundStone = this.stones.find((stone) => stone.name === stoneNameToFind);
        // let foundStone = { name: "Emerald", price: 1300, quantity: 4 }
        return foundStone.price * foundStone.quantity;
    },
};

console.log(chopShop.calcTotalPrice("Emerald")); // 5200
console.log(chopShop.calcTotalPrice("Diamond")); // 8100
console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
console.log(chopShop.calcTotalPrice("Ruby")); // 1600
