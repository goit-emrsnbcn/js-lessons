/* 
Example 5 - Toggle

Write a Toggle class that takes a settings object {isOpen: boolean} and declares one property on - state on/off (true/false). 
*/

class Toggle {
    constructor(isOpen) {
        this.on = isOpen.isOpen;
    }

    toggle() {
        this.on = !this.on;
    }
}

const firstToggle = new Toggle({ isOpen: true });
console.log(firstToggle.on);
firstToggle.toggle();
console.log(firstToggle.on);
