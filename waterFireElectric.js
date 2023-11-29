function getRandomChoice() {
    const randomIndex = Math.floor(Math.random() * gameRules.length);
    return gameRules[randomIndex];
}


function updateUI(userChoice, compChoice, userScore, compScore) {
    showImg1.src = `image/${userChoice}.png`;
    showImg2.src = `image/${compChoice}.png`;

    if (userScore > compScore) {
        userResult1.textContent = "WIN";
        userResult1.style.color = "green";
        compResult2.textContent = "LOSE";
        compResult2.style.color = "red";
    } else if (userScore < compScore) {
        userResult1.textContent = "LOSE";
        userResult1.style.color = "red";
        compResult2.textContent = "WIN";
        compResult2.style.color = "green";
    } else {
        userResult1.textContent = "DRAW";
        userResult1.style.color = "gray";
        compResult2.textContent = "DRAW";
        compResult2.style.color = "gray";
    }

    cardPoint1.textContent = userScore;
    cardPoint2.textContent = compScore;
}

function resultGame(u, c) {
    console.log("User Choice:", u);
    console.log("Computer Choice:", c);

    if (u === "w" && c === "f") {
        firstPlayerPoint += 1;
    } else if (u === "f" && c === "e") {
        firstPlayerPoint += 1;
    } else if (u === "e" && c === "w") {
        firstPlayerPoint += 1;
    } else if (u === c) {

    } else {
        secondPlayerPoint += 1;
    }

    updateUI(u, c, firstPlayerPoint, secondPlayerPoint);
}


const gameRules = ["e", "f", "w"];
let firstPlayerPoint = 0;
let secondPlayerPoint = 0;

const cardPoint1 = document.querySelector("#cardPoint1");
const cardPoint2 = document.querySelector("#cardPoint2");

const userResult1 = document.querySelector("#userResult1");
const compResult2 = document.querySelector("#compResult2");

const showImg1 = document.querySelector("#showImg1");
const showImg2 = document.querySelector("#showImg2");





window.addEventListener('keypress', (e) => {
    const userChoice = e.key.toLowerCase();

    if (gameRules.indexOf(userChoice) !== -1) {
        const compChoice = getRandomChoice();
        resultGame(userChoice, compChoice);
    } else {
        console.log("Choose the right alphabet example (e, f, w).");
    }
});