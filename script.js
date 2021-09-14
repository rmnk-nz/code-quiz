
// decleared variables
var questionsDiv = document.querySelector("#questionsDiv");
var timerDisplay = document.querySelector("#timerDisplay");
var optionList = document.querySelector("#optionList");
var startBtn = document.querySelector("#startBtn");
var resultDiv = document.querySelector("#resultDiv");
var mainTitle = document.querySelector("#mainTitle")

// Objects to hold each question, [options] and answers
var questionOne = {
    question: "How do you declare a JavaScript variable?",
    options: ["var myName", "var = myName", "variable myName"],
    answer: "var myName"
    };
var questionTwo = {
    question:"String values must be enclosed within ____ when being assigned to variables.",
    options: ["commas", "quotes", "parenthesis"],
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
    answer: "for(intialize; test; increment)"
    };

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

// when clicked timer will start
startBtn.addEventListener("click", start);
// when clicked will take you to show high scores saved
mainTitle.addEventListener("click", generateHighScores);

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
    completeQuiz.textContent = "Quiz Completed"
    questionsDiv.appendChild(completeQuiz);

    var finalScore = document.createElement("h2");
    questionsDiv.appendChild(finalScore);

    //calculate final score
    if (timerLimit >= 0) {
        var timeRemain = timerLimit;
        clearInterval(timerInterval);
        finalScore.textContent = "Final score: " + timeRemain;
    } else {
        finalScore.textContent = "Exceeded Time Limit";
            // Try Again button
        var createTryAgain = document.createElement("button");
        createTryAgain.setAttribute("id", "resetScore");
        createTryAgain.textContent = "Try Again";

        questionsDiv.appendChild(createTryAgain);
        //Try again button reloads page
        createTryAgain.addEventListener("click", function () {
            window.location.replace("./index.html");
        });
        return 
    }
    
    // enter initials title
    var initialsTitle = document.createElement("label");
    initialsTitle.setAttribute("id", "createLabel");
    initialsTitle.textContent = "Enter your initials";

    questionsDiv.appendChild(initialsTitle);
    
    // input for users initials
    var addInitials = document.createElement("input");
    addInitials.setAttribute("id", "initials");
    addInitials.textContent = "";
    
    questionsDiv.appendChild(addInitials);
    
    // button for submitting user score
    var submitScore = document.createElement("button");
    submitScore.setAttribute("id", "startBtn");
    submitScore.textContent = "Submit";

    questionsDiv.appendChild(submitScore);
    
    //save score to local storage and direct user to High Score function
    submitScore.addEventListener("click", function () {
        var userInitials = addInitials.value;

      if (userInitials === null) {
        console.log("Nothing enetered");

        } else {
        var userScore = {
            initials: userInitials,
            score: timeRemain
        }
        console.log(userScore);
        var savedScores = localStorage.getItem("savedScores");
            if (savedScores === null) {
            savedScores = [];

             } else {
            savedScores = JSON.parse(savedScores);
             }
            savedScores.push(userScore);
            var addScore = JSON.stringify(savedScores);
            localStorage.setItem("savedScores", addScore);
            
            } generateHighScores();
    }); 

}

//View and clear existing High scores
function generateHighScores () {
    //clear all information
    timerDisplay.innerHTML = "";
    optionList.innerHTML = "";
    resultDiv.innerHTML = "";

    //High Score headings
    questionsDiv.textContent = "**High Scores**";
    mainTitle.textContent = "RUN QUIZ";

    //Event Listner to go run quiz again
    mainTitle.addEventListener("click", function () {
        window.location.replace("./index.html");
    });

    // Retreives local stroage 
    var allScores = localStorage.getItem("savedScores");
    allScores = JSON.parse(allScores);

    if (allScores !== null) {

        for (var i = 0; i < allScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        optionList.appendChild(createLi);

        }
         //Reset button to clear data of all existing High scores
         var createResetBtn = document.createElement("button");
         createResetBtn.setAttribute("id", "resetScore");
        createResetBtn.textContent = "Reset";

        resultDiv.appendChild(createResetBtn);
        // Event listener to clear scores 
         createResetBtn.addEventListener("click", function () {
        localStorage.clear();
        generateHighScores();
        });
    }
}   