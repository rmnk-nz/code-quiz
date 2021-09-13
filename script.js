
// decleared variables
var questionsDiv = document.querySelector("#questionsDiv");
var timerDisplay = document.querySelector("#timerDisplay");
var optionList = document.querySelector("#optionList");
var startBtn = document.querySelector("#startBtn");
var resultDiv = document.querySelector("#resultDiv");

// Objects to hold each question, [options] and answers
var questionOne = {
    question: "How do you declare a JavaScript variable?",
    options: ["var myName", "var = myName", "variable myName"],
    answer: "var myName"
    };
var questionTwo = {
    question:"String values must be enclosed within ____ when being assigned to variables.",
    options: ["curly brackets", "quotes", "parenthesis"],
    answer: "quotes"
    };
var questionThree = {
    question: "What statement supplies the value of the function?",
    options: ["result", "valueOf", "return"],
    answer: "return"
    };
var questionFour = {
    question: "Which of the following is the correct syntax of FOR?",
    options: ["for(test; intialize; increment)", "for(intialize; test; increment)", "for(test; increment; intialize)"],
    answer: "(intialize; test; increment)"
    };

var currentQuestion = 0;
var questions = [
    questionOne,
    questionTwo
];

// variables for timer
var timerLimit = 41;
var timerPenalty = 10; 
var timerInterval = 0;


//function to start timer and display to user
 function start() {

    if (timerInterval === 0) {
        timerInterval = setInterval(function() {
            timerLimit--;
            timerDisplay.textContent = timerLimit;

            if (timerLimit <= 0) {
                clearInterval(timerInterval);
                timerDisplay.textContent = "TIMES UP"; 
                endQuiz();
                
            } 
        }, 1000);
    }
    generateQuestionOne();   
};

//function to generate question
function generateQuestionOne() {
    //clear questionDiv to display question
    questionsDiv.innerHTML = "";
    var userQuestion = questionOne.question;
    var userOptions = questionOne.options;
    
    questionsDiv.textContent = userQuestion;
    
    //display options for user to select
    userOptions.forEach(function(newlist) {
        var listItem = document.createElement("li");
        listItem.textContent = newlist;
        optionList.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    });
    //compare userOption with answer
    function compare(option) {
        var selection = option.target;

        if (selection.matches("li")) {
            //apply penalty if incorrect else move to next question
            if (selection.textContent == questionOne.answer) {
                resultDiv.textContent = "correct!"
            } else {
                timerLimit = timerLimit - timerPenalty;
                resultDiv.textContent = "wrong! -10sec"
            }
        } generateQuestionTwo();
    }
}
function generateQuestionTwo() {
    //clear questionDiv to display question
    questionsDiv.innerHTML = "";
    optionList.innerHTML = "";
    var userQuestion = questionTwo.question;
    var userOptions = questionTwo.options;
    
    questionsDiv.textContent = userQuestion;
    
    //display options for user to select
    userOptions.forEach(function(newlist) {
        var listItem = document.createElement("li");
        listItem.textContent = newlist;
        optionList.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    });
    //compare userOption with answer
    function compare(option) {
        var selection = option.target;

        if (selection.matches("li")) {
            //apply penalty if incorrect else move to next question
            if (selection.textContent == questionTwo.answer) {
                resultDiv.textContent = "correct!"
            } else {
                timerLimit = timerLimit - timerPenalty;
                resultDiv.textContent = "wrong! -10sec"
            }
        } generateQuestionThree();
    }
}

function generateQuestionThree() {
    //clear questionDiv to display question
    questionsDiv.innerHTML = "";
    optionList.innerHTML = "";
    var userQuestion = questionThree.question;
    var userOptions = questionThree.options;
    
    questionsDiv.textContent = userQuestion;
    
    //display options for user to select
    userOptions.forEach(function(newlist) {
        var listItem = document.createElement("li");
        listItem.textContent = newlist;
        optionList.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    });
    //compare userOption with answer
    function compare(option) {
        var selection = option.target;

        if (selection.matches("li")) {
            //apply penalty if incorrect else move to next question
            if (selection.textContent == questionThree.answer) {
                resultDiv.textContent = "correct!"
            } else {
                timerLimit = timerLimit - timerPenalty;
                resultDiv.textContent = "wrong! -10sec"
            }
        } generateQuestionFour();
    }
}
function generateQuestionFour() {
    //clear questionDiv to display question
    questionsDiv.innerHTML = "";
    optionList.innerHTML = "";
    var userQuestion = questionFour.question;
    var userOptions = questionFour.options;
    
    questionsDiv.textContent = userQuestion;
    
    //display options for user to select
    userOptions.forEach(function(newlist) {
        var listItem = document.createElement("li");
        listItem.textContent = newlist;
        optionList.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    });
    //compare userOption with answer
    function compare(option) {
        var selection = option.target;

        if (selection.matches("li")) {
            //apply penalty if incorrect else move to next question
            if (selection.textContent == questionFour.answer) {
                resultDiv.textContent = "correct!"
            } else {
                timerLimit = timerLimit - timerPenalty;
                resultDiv.textContent = "wrong! -10sec"
            }
        } endQuiz();
    }
}

function endQuiz() {
    //clear all information
    timerDisplay.innerHTML = "";
    questionsDiv.innerHTML = "";
    optionList.innerHTML = "";
    //create headings 
    var completeQuiz = document.createElement("h1");
    completeQuiz.textContent = "Quiz Complete"
    questionsDiv.appendChild(completeQuiz);

    var finalScore = document.createElement("h2");
    questionsDiv.appendChild(finalScore);

    //calculate final score
    if (timerLimit >= 0) {
        var timeRemain = timerLimit;
        clearInterval(timerInterval);
        finalScore.textContent = "Final score: " + timeRemain;
    } else {
        finalScore.textContent = "Exceeded Time Limit: Fail"
    };

    // submit button
    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("id", "startBtn");
    createSubmit.textContent = "Submit";

    questionsDiv.appendChild(createSubmit);
}

// when clicked timer will start
startBtn.addEventListener("click", start);