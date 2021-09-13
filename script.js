
// decleared variables
var questionsDiv = document.querySelector("#questionsDiv");
var timerDisplay = document.querySelector("#timerDisplay");
var optionList = document.querySelector("#optionList");
var startBtn = document.querySelector("#startBtn");


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
var quetionThree = {
    question: "What statement supplies the value of the function?",
    options: ["result", "valueOf", "return"],
    answer: "return"
    };
var questionFour = {
    question: "Which of the following is the correct syntax of FOR?",
    options: ["for(test; intialize; increment)", "for(intialize; test; increment)", "for(test; increment; intialize)"],
    answer: "(intialize; test; increment)"
    };

// variables for score
var timeScore = 0;

// variables for timer
var timerLimit = 6;
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
                endQuiz();
                timerDisplay.textContent = "TIMES UP"; 
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
        console.log(listItem);
    });
    //compare userOption with answer
    function compare(){

    }
    //apply penalty if incorrect else move to next question
}

function endQuiz() {
    questionsDiv.innerHTML = "";
    optionList.innerHTML = "";

    //create heading 
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
    }

}

// when clicked timer will start
startBtn.addEventListener("click", start);