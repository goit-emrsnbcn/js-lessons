/* 
Example 4 - Arrays and Loops

Write a script that prints the user's name and phone number to the console. 
The names and phones variables store strings of names and phone numbers, separated by commas.
The sequence number of names and phone numbers in the lines indicates a match.
The number of names and phone numbers is guaranteed to be the same.

const names = 'Jacob,William,Solomon,Artemis';
const phones = '89001234567,89001112233,890055566377,890055566300';
*/

const names = "Jacob,William,Solomon,Artemis";
const phones = "89001234567,89001112233,890055566377,890055566300";

const namesArr = names.split(",");
console.log(namesArr);

const phonesArr = phones.split(",");
console.log(phonesArr);

for (let i = 0; i < namesArr.length; i++) {
    console.log(`Name: ${namesArr[i]}, Phone: ${phonesArr[i]}`);
    //Name: Jacob, Phone: 89001234567
}
