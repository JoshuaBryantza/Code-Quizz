var timer = 20; //timer value is in seconds 
var timerInterval;
var currentPage = 1;
var currentScore = 0;
var currentUser = '';

var timeCounter = document.querySelector('#timeCounter');
var currentScoreElement = document.querySelector('#currentScore');

timeCounter.innerHTML = timer;
currentScoreElement.innerHTML = currentScore;

document.querySelector("#startQuiz").addEventListener("click", startQuiz)

function startQuiz() {
    document.querySelector('#startPage').classList.toggle("hide");
    document.querySelector('#Page1').classList.toggle("hide");
    timerInterval = setInterval(timeCounterHandler, 1000)
}

function answerButtonHandler(isValid) {
    if (isValid == 1) {
        currentScore += 5;
        currentScoreElement.innerHTML = currentScore;
    } else {
        timer -= 5;
    }
    var pageId = '#Page' + currentPage;
    var nextPageId = '#Page' + (currentPage + 1);
    document.querySelector(pageId).classList.toggle('hide')
    document.querySelector(nextPageId).classList.toggle('hide')
    currentPage++;
    console.log('poes ' + id)
}

function timeCounterHandler() {
    timer--;
    timeCounter.innerHTML = timer;
    if (timer < 1) {
        timeCounter.innerHTML = 0;
        document.querySelector('#Page' + currentPage).classList.toggle('hide')
        document.querySelector('#Page5').classList.toggle('hide')
        clearInterval(timerInterval)
    }
}

function submitQuiz() {
    var userInitals = document.querySelector('#userInital');
    currentUser = userInitals.value
}


//
//When the start button is click 
//Then a timer starts in the right hand corner
//And the first question is presented with a list of options to choose from 
//When user answers a question correctly 
//Then they are moved to the next question
//When the user answers the question incorrectly 
//Then time is subtracted from the clock
//If the user complets all the questions or the timer reaches 0
//Then the game ends
//At the end of the game user can save their initals and their score