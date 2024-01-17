/* 
Example 7 - forEach method

Make the code refactoring using forEach method and arrow functions.
 */

const logItems = (items) => {
    for (let i = 0; i < items.length; i += 1) {
        console.log(`${i + 1} - ${items[i]}`);
    }

    //convert the for loop into forEach

    //convert the forEach into arrow function
};

logItems(["Mango", "Poly", "Ajax"]);
logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);
