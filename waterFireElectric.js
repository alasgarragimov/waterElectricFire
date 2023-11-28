function getRandomChoice() {
    const randomIndex = Math.floor(Math.random() * gameRules.length);
    return gameRules[randomIndex];
}


function resultGame(u, c) {
    console.log("User Choice:", u);
    console.log("Computer Choice:", c);

    switch (true) {
        case u === "w" && c === "f":
            alert("You Win: WATER wins FIRE");
            break;
        case u === "f" && c === "e":
            alert("You Win: FIRE wins ELECTRIC");
            break;
        case u === "e" && c === "w":
            alert("You Win: ELECTRIC wins WATER");
            break;
        case u === c:
            alert("Game ending in a DRAW");
            break;
        default:
            alert("You are defeated.");
    }
}


const gameRules = ["e", "f", "w"];
window.addEventListener('keypress', (e) => {
    const userChoice = e.key.toLowerCase();

    if (gameRules.indexOf(userChoice) !== -1) {
        const compChoice = getRandomChoice();
        resultGame(userChoice, compChoice);
    } else {
        console.log("Choose the right alphabet example (e, f, w).");
    }
});