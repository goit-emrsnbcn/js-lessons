/* 
Example 8 - forEach method

Make the code refactoring using forEach method and arrow functions. 
*/

function printContactsInfo({ names, phones }) {
    const nameList = names.split(",");
    const phoneList = phones.split(",");
    for (let i = 0; i < nameList.length; i += 1) {
        console.log(`${nameList[i]}: ${phoneList[i]}`);
    }
}

//convert the function above into arrow function

printContactsInfo({
    names: "Jacob,William,Solomon,Artemis",
    phones: "89001234567,89001112233,890055566377,890055566300",
});
