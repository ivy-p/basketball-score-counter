
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

// TIMER

const stopButton = document.querySelector(".stop-btn");
const startButton = document.querySelector(".start-btn");
const resetButton = document.querySelector(".reset-btn");

const startingMinutes = 12;
// breaking twelve minutes into seconds
let time = startingMinutes * 60;
//calling the updateCountDown function every second
let refreshIntervalId = setInterval(updateCountdown, 1000);


function updateCountdown () {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    //adding a second zero for when seconds = 0
    seconds = seconds < 10 ? '0' + seconds : seconds; 
    
    const countdownEl = document.getElementById('countdown');
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    
    
    time--;

    if (time < 0) {
        clearInterval(refreshIntervalId);
    }
}

stopButton.addEventListener("click", function () {
    clearInterval(refreshIntervalId);
});

startButton.addEventListener("click", function () {
    refreshIntervalId = setInterval(updateCountdown, 1000);

});

resetButton.addEventListener("click", function() {
    const inputMinutes = 12;
    clearInterval(refreshIntervalId);
    time = inputMinutes * 60;
    updateCountdown();
});

// NEW GAME BUTTON
const newGameButton = document.querySelector(".new-game-button");

const newGame = function () {
    awayScore = 0;
    document.querySelector(".away-score-value").innerText = awayScore;

    homeScore = 0;
    document.querySelector(".home-score-value").innerText = homeScore;

    const inputMinutes = 12;
    clearInterval(refreshIntervalId);
    time = inputMinutes * 60;
    updateCountdown();
};

document.addEventListener("keydown", function (e) {
    if (e.key === "1") {
        addOne();
    } else if (e.key === "2") {
        addTwo();
    } else if (e.key === "3") {
        addThree();
    } else if (e.key ==="8") {
        addOneAway();
    } else if (e.key === "9") {
        addTwoAway();
    } else if (e.key === "0") {
        addThreeAway();
    } else if (e.key === "s") {
        refreshIntervalId = setInterval(updateCountdown, 1000);
    } else if (e.key === "t") {
        clearInterval(refreshIntervalId);t
    } else if (e.key === "r") {
        const inputMinutes = 12;
        clearInterval(refreshIntervalId);
        time = inputMinutes * 60;
        updateCountdown();
    } else if (e.key === "n") {
        newGame();
    }
});

