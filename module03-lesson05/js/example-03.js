/* 
Example 3 - Array of objects

Write a function calcTotalPrice(stones, stoneName) that takes an array of objects and a string with the name of the stone. 

The function calculates and returns the total cost of stones (price * quantity) if the stoneName matches the name in the array of objects called stones[{}].

*/

const stones = [
    { name: "Emerald", price: 1300, quantity: 4 },
    { name: "Diamond", price: 2700, quantity: 3 },
    { name: "Sapphire", price: 400, quantity: 7 },
    { name: "Rubble", price: 200, quantity: 2 },
];

function calcTotalPrice(stones, stoneName) {
    let total = 0;

    for (const stone of stones) {
        if (stone.name === stoneName) {
            total = stone.price * stone.quantity;
        }
    }
    return total;
}

console.log(calcTotalPrice(stones, "Emerald")); //5200
console.log(calcTotalPrice(stones, "Diamond")); //8100
