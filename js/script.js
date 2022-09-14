// TIMER FEATURE
import Timer from "./timer.js";

new Timer(
    document.querySelector(".timer-container")
);

// SCORING
let homeScore = 0;
let awayScore = 0;

// HOME TEAM SCORE BUTTONS
const addOne = function () {
    homeScore += 1;
    document.querySelector(".home-score-value").innerText = homeScore;
    console.log(`add one clicked`);
};

const addTwo = function () {
    homeScore += 2;
    document.querySelector(".home-score-value").innerText = homeScore;
    console.log(`add two clicked`);
};

const addThree = function () {
    homeScore += 3;
    document.querySelector(".home-score-value").innerText = homeScore;
    console.log(`add three clicked`);
};

// AWAY TEAM SCORE BUTTONS
const addOneAway = function () {
    awayScore += 1;
    document.querySelector(".away-score-value").innerText = awayScore;
    console.log(`AWAY add one clicked`);
};

const addTwoAway = function () {
    awayScore += 2;
    document.querySelector(".away-score-value").innerText = awayScore;
    console.log(`AWAY add one clicked`);
};

const addThreeAway = function () {
    awayScore += 3;
    document.querySelector(".away-score-value").innerText = awayScore;
    console.log(`AWAY add one clicked`);
};
// NEW GAME BUTTON
const newGame = function () {
    awayScore = 0;
    document.querySelector(".away-score-value").innerText = awayScore;

    homeScore = 0;
    document.querySelector(".home-score-value").innerText = homeScore;
};
