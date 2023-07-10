var startButton = document.querySelector("#start-button");
var question = document.querySelector("#question");
var answersEl = document.querySelector("#answers");
var result = document.querySelector("#result");

var timeDisplay = document.querySelector("#time-display");
var timeRemaining = 60;

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
    },
    {
        question: "Which of these languages is responsible for a webpage's interactivity?",
        choices: ["HTML", "CSS", "JavaScript", "Python"],
        correctChoice: "JavaScript",
    }
];

startButton.addEventListener("click", function (event) {
    event.preventDefault();
    scoreCount = 0;
    startButton.style.display = "none";

    var timer = setInterval(function () {
        timeRemaining--;
        timeDisplay.textContent = timeRemaining + " seconds remaining.";

        if (timeRemaining === 0) {
            clearInterval(timer);
            sendMessage();
        }
    }, 1000);

    getQuestion();
});

function getQuestion() {
    if (currentQuestionIndex >= questionArray.length || timeRemaining <= 0) {
        clearInterval(timer);
        sendMessage();
        return;
    }

    var currentQuestion = questionArray[currentQuestionIndex];
    var title = document.getElementById("question");
    title.textContent = currentQuestion.question;
    answersEl.innerHTML = "";

    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var choice = currentQuestion.choices[i];
        var button = document.createElement("button");
        button.setAttribute("class", "choice");
        button.setAttribute("value", choice);
        button.textContent = choice;
        answersEl.appendChild(button);
    }
}

function userChoice(e) {
    console.log(e.target.value);
    if (e.target.value === questionArray[currentQuestionIndex].correctChoice) {
        result.textContent = "You got it!";
        scoreCount++;
        currentQuestionIndex++;
        score.textContent = scoreCount;
        localStorage.setItem("scoreCount", scoreCount);
    } else {
        result.textContent = "Answer is incorrect!";
        currentQuestionIndex++;
        timeRemaining -= 5;
    }
    getQuestion();
}

answersEl.addEventListener("click", userChoice);

console.log("score", score);
console.log("time", timeRemaining);