// question and display variables
var startButton = document.querySelector("#start-button");
var question = document.querySelector("#question");
var answersEl = document.querySelector("#answers");
var result = document.querySelector("#result");

// Timer variables
var timeDisplay = document.querySelector("#time-display");
var timeRemaining = 60;

// Scorecard variables
var score = document.querySelector("#score");
var scoreCount = localStorage.getItem("scoreCount");

var currentQuestionIndex = 0;

var questionArray = [
   {
        question: "question1",
        choices: ["c1", "c2", "c3", "c4"],
        correctChoice: "c3",
    },
    {
        question: "question2",
        choices: ["c1", "c2", "c3", "c4"],
        correctChoice: "c3",
    }  

];

// display questions and multiple choice answer buttons
    // question 1 variables
    var q1a1 = document.createElement("li");
    var q1a2 = document.createElement("li");
    var q1a3 = document.createElement("li");
    var q1a4 = document.createElement("li");


    // var answerListItem = document.querySelectorAll("li")
    // answerListItem.setAttribute("class", "choice");

    q1a1.textContent = "Correct Answer Q1A1";
    q1a2.textContent = "Incorrect Answer Q1A2";
    q1a3.textContent = "Answer Q1A3";
    q1a4.textContent = "Answer Q1A4";

// on click, record score as 0 and start timer

startButton.addEventListener("click", function(event) {
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

    // answers.textContent = "This is question 1.";
    
    // answers.appendChild(q1a1);
    // answers.appendChild(q1a2);
    // answers.appendChild(q1a3);
    // answers.appendChild(q1a4);

    getQuestion();

});

function getQuestion() {
    var currentQuestion = questionArray[currentQuestionIndex];
    var title = document.getElementById("question");
    title.textContent = currentQuestion.question;
    answersEl.innerHTML = "";
    
    for (var i=0; i < currentQuestion.choices.length; i++) {
        var choice = currentQuestion.choices[i];
        var button = document.createElement("button");
        button.setAttribute("class", "choice");
        button.setAttribute("value", choice);
        button.textContent = choice;
        answersEl.appendChild(button);
    }
};

function userChoice(e) {
    console.log(e.target.value);
    if (e.target.value === questionArray[currentQuestionIndex].correctChoice) {
        result.textContent = "You got it!";
        scoreCount++;
        currentQuestionIndex++;
        score.textContent = scoreCount;
        localStorage.setItem("scoreCount", scoreCount);

        getQuestion();

    }
};

answersEl.addEventListener("click", userChoice);

// var correctAnswer = [q1a1]
// var incorrectAnswer = [q1a2, q1a3, q1a4]

// on click, check whether answer is correct
/* if correct:
    stop player from being able to guess again
    display "you got it" message
    increase score by 1 and record new score */


// document.getElementById("answers").addEventListener("click", function(correctAnswer) {
//     if(correctAnswer.target && correctAnswer.target.nodeName === "LI") {
//         result.textContent = "You got it!";
//         scoreCount++;
//         score.textContent = scoreCount;
//         localStorage.setItem("scoreCount", scoreCount);
//         }
// });


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


// document.getElementById("answers").addEventListener("click", function(incorrectAnswer) {
//     if(incorrectAnswer.target && incorrectAnswer.target.nodeName === "LI") {
//         result.textContent = "Wrong!";
//         timeRemaining = timeRemaining - 5;
//         }
// });

console.log("score", score)
console.log("time", timeRemaining)

q1a2.addEventListener("click", function() {
    result.textContent = "Wrong!";
    timeRemaining = timeRemaining - 5;
});

// q1a3.addEventListener("click", function() {
//     result.textContent = "Wrong!";
//     timeRemaining = timeRemaining - 5;
// });

// q1a4.addEventListener("click", function() {
//     result.textContent = "Wrong!";
//     timeRemaining = timeRemaining - 5;
// });

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