let rps = document.getElementById("rps");
let output = document.getElementById("output");
let comp = document.getElementById("computer");

rps.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        let you = parseInt(e.target.getAttribute("id"));
        let computer = Math.floor(Math.random() * 3); // generate random # 0-2
        let message = "";
        //ROCK = 0, paper = 1, SCISSORS = 2
        if (you === computer) message = "It's a tie";

        if (you === 0 && computer === 1) message = "Computer Wins";
        if (you === 0 && computer === 2) message = "You Win";

        if (you === 1 && computer === 0) message = "You Win";
        if (you === 1 && computer === 2) message = "Computer Wins";

        if (you === 2 && computer === 0) message = "Computer Wins";
        if (you === 2 && computer === 1) message = "You Win";

        switch (computer) {
            case 0:
                comp.innerText = "Rock";
                break;
            case 1:
                comp.innerText = "Paper";
                break;
            case 2:
                comp.innerText = "Scissors";
                break;
        }

        output.innerText = message;
    }
});
