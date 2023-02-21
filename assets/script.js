// question and display variables
var startButton = document.querySelector("#start-button");
var question = document.querySelector("#question");
var answers = document.querySelector("#answers");
var result = document.querySelector("#result");

// Timer variables
var timeDisplay = document.querySelector("#time-display");
var timeRemaining = 60;

// Scorecard variables
var score = document.querySelector("#score");
var scoreCount = localStorage.getItem("scoreCount");

// display questions and multiple choice answer buttons
    // question 1 variables
    var q1a1 = document.createElement("li");
    var q1a2 = document.createElement("li");
    var q1a3 = document.createElement("li");
    var q1a4 = document.createElement("li");

    q1a1.textContent = "Answer Q1A1";
    q1a2.textContent = "Answer Q1A2";
    q1a3.textContent = "Answer Q1A3";
    q1a4.textContent = "Answer Q1A4";

var correctAnswers = [q1a1]
var incorrectAnswers = [q1a2, q1a3, q1a4]

// on click, record score as 0 and start timer

startButton.addEventListener("click", function() {
    event.preventDefault();
    scoreCount = 0;
    startButton.style.display ="none";

        var timer = setInterval(function() {
            timeRemaining--;
            timeDisplay.textContent = timeRemaining + " seconds remaining.";
        
            if(timeRemaining === 0) {
            clearInterval(timer);
            sendMessage();
            }
        
        }, 1000);

    answers.textContent = "This is question 1.";
    
    answers.appendChild(q1a1);
    answers.appendChild(q1a2);
    answers.appendChild(q1a3);
    answers.appendChild(q1a4);

});

// on click, check whether answer is correct
/* if correct:
    stop player from being able to guess again
    display "you got it" message
    increase score by 1 and record new score */

q1a1.addEventListener("click", function() {
    result.textContent = "You got it!";
    scoreCount++;
    score.textContent = scoreCount;
    localStorage.setItem("scoreCount", scoreCount);
});

/* if incorrect:
    stop player from being able to guess again
    display "you suck" message
    decrease timer by 5s */

q1a2.addEventListener("click", function() {
    result.textContent = "Wrong!";
    timeRemaining = timeRemaining - 5;
});

q1a3.addEventListener("click", function() {
    result.textContent = "Wrong!";
    timeRemaining = timeRemaining - 5;
});

q1a4.addEventListener("click", function() {
    result.textContent = "Wrong!";
    timeRemaining = timeRemaining - 5;
});

// when final question answered, reduce timer to 0

// when timer 0, display final score and name entry form

// on submit, save and display name + score and display them along with game restart button
// on restart, reset game logic and UI (less names+scores) and return to step 1



    // question 2 variables
    // var q2a1 = document.createElement("li");
    // var q2a2 = document.createElement("li");
    // var q2a3 = document.createElement("li");
    // var q2a4 = document.createElement("li");

    // q2a1.textContent = "Answer Q2A1";
    // q2a2.textContent = "Answer Q2A2";
    // q2a3.textContent = "Answer Q2A3";
    // q2a4.textContent = "Answer Q2A4";