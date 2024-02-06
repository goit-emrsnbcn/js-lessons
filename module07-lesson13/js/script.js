/* Example 1 - Event Propagation */

// 3 Stages = Capturing > Target > Bubbling

const outerDiv = document.getElementById("outer");
const innerDiv = document.getElementById("inner");

outerDiv.addEventListener(
    "click",
    () => {
        console.log("Outer div is clicked");
    },
    true
);
// it specifies that the even should be handle during the capturing phase.

innerDiv.addEventListener("click", () => {
    console.log("Inner div is clicked");
});
