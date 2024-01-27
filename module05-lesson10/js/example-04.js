/* 
Example 4 - Notes

Write a Notes class that manages the collection of notes in the items property. 

A note is an object with text and priority properties. 


Add a static property Priority to the class, which will store the object with priorities.
    {
    LOW: 'low',
    NORMAL: 'normal',
    HIGH: 'high'
    }

methods

addNote(note) - receives a new note and adds it to the end of the current ones.

removeNote(text) - receives the Note and, if it exists, removes it from the current.

updatePriority(text, newPriority) - receives the Note and, if it exists set to newPriority
*/

class Notes {
    static Priority = {
        LOW: "low",
        HIGH: "high",
        NORMAL: "normal",
    };

    constructor(array) {
        this.items = array;
    }

    addNote(note) {
        //WRITE YOUR CODE HERE
    }

    removeNote(text) {
        //WRITE YOUR CODE HERE
    }

    updatePriority(text, newPriority) {
        //WRITE YOUR CODE HERE
    }
}

let myNotes = new Notes([]);
myNotes.addNote({ text: "My first Note", priority: Notes.Priority.LOW });
myNotes.addNote({ text: "My second note", priority: Notes.Priority.NORMAL });
console.log(myNotes.items);

myNotes.removeNote("My first note");

myNotes.updatePriority("My second note", Notes.Priority.HIGH);
