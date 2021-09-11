
// decleared variables
var questionsDiv = document.querySelector("#questionsDiv");
var timerDisplay = document.querySelector("#timer");
var choiceList = document.querySelector("#choiceList");
var startBtn = document.querySelector("#startQuiz");


// object for each question with array to list the choices and answer
var questionsOne = {
    question: "How do you declare a JavaScript variable?",
    choices: ["var myName", "var = myName", "variable myName"],
    answer: "var myName"
};

var questionTwo = {
    question:"String values must be enclosed within ____ when being assigned to variables.",
    choices: ["curly brackets", "quotes", "commas", "parenthesis"],
    answer: "quotes"
};

var questionThree = {
    question: "What statement supplies the value of the function?",
    choices: ["cancle", "result", "valueOf", "return"],
    answer: "return"
};

var questionFour = {
    question: "Which of the following is the correct syntax of FOR?",
    choices: ["for(test; intialize; increment)", "for(intialize; test; increment)", "for(test; increment; intialize)"],
    answer: "(intialize; test; increment)"
}

// variables for score
var timeScore = 0;
var questionScore = 0;

// variables for timer
var secondsLeft = 6;
var timerPenalty = 10;
var timerInterval; 

//function to start timer and display to user
 function start() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerDisplay.textContent = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            timerDisplay.textContent = "TIMES UP"; 
        }

    }, 1000);
};

// when clicked timer will start
startBtn.addEventListener("click", start);




