/* 
Example 5 - Link Formatting (endsWith)

Write a script that checks if the value of the link variable ends symbol /. 
if not, add this character to the end of the link value.
Use if...else construction.

let link = 'https://my-site.com/about';
// Write code below this line

//Write code above this line
console.log(link);

*/

let link = "https://my-site.com/about";
// Write code below this line
if (!link.endsWith("/")) link += "/";

//Write code above this line
console.log(link);
