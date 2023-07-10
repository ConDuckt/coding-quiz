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
        question: "Which of these languages is responsible for a webpage's structure?",
        choices: ["HTML", "CSS", "JavaScript", "Python"],
        correctChoice: "HTML",
    },
    {
        question: "Which of these languages is responsible for a webpage's appearance?",
        choices: ["HTML", "CSS", "JavaScript", "Python"],
        correctChoice: "CSS",
    }  

];

    var q1a1 = document.createElement("li");
    var q1a2 = document.createElement("li");
    var q1a3 = document.createElement("li");
    var q1a4 = document.createElement("li");


    q1a1.textContent = "Correct Answer Q1A1";
    q1a2.textContent = "Incorrect Answer Q1A2";
    q1a3.textContent = "Answer Q1A3";
    q1a4.textContent = "Answer Q1A4";

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
    } else {
        result.textContent = "Answer is incorrect!";
}};

answersEl.addEventListener("click", userChoice);

q1a1.addEventListener("click", function() {
    result.textContent = "You got it!";
    scoreCount++;
    score.textContent = scoreCount;
    localStorage.setItem("scoreCount", scoreCount);
});

console.log("score", score)
console.log("time", timeRemaining)

q1a2.addEventListener("click", function() {
    result.textContent = "Wrong!";
    timeRemaining = timeRemaining - 5;
});