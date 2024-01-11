/* 
Example 2 - Destructuring
Rewrite the function so that it takes one object of the parameter instead of a set of independent arguments.
*/

// It was
// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300'
// );

function printContactsInfo({ names, phones }) {
    const namesList = names.split(","); //['Jacob', 'William', 'Solomon', 'Artemis']
    const phonesList = phones.split(","); // ['89001234567','89001112233','890055566377','890055566300']

    for (let i = 0; i < namesList.length; i++) {
        console.log(`${namesList[i]}: ${phonesList[i]}`);
    }
}

printContactsInfo({
    names: "Jacob,William,Solomon,Artemis",
    phones: "89001234567,89001112233,890055566377,890055566300",
});
