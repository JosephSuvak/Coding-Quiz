/*Not to self:

Verified as coded: When previous issue non-existent, the timer returns back 10 secs. 

Medium Defect: The Correct Function keeps getting invoked despite IF statement. Research this.

Medium Defect: When OR Function Used, JavaScript is ignoring the commands. Forces Code Smell.

High Defect: Local Storage springs forward despite not being invoked/reset.

*/

var startQuizAttempt = document.querySelector('#startQuiz')
startQuizAttempt.addEventListener("click", countdown)
startQuizAttempt.addEventListener("click", takeQuiz)
var userScore = 0;
var timeLeft = 75;
var rightWrongTimer = 3;

//Countdowns
function countdown() {

    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        document.getElementById('countdown').innerHTML = '00:' + timeLeft;
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(timeInterval)
            addTimerToPage();
            document.getElementById("Question1").style['display'] = "none";
            document.getElementById("Question2").style['display'] = "none";
            document.getElementById("Question3").style['display'] = "none";
            document.getElementById("Question4").style['display'] = "none";
            calcScore();
        }
    }, 1000);
    console.log('1000 marker');
}

function notifyCorrectTimer() {
    document.getElementById("correct").style['display'] = "block";
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        rightWrongTimer--;
        if (rightWrongTimer < 0) {
            clearInterval(timeInterval)
            document.getElementById("correct").style['display'] = "none";
        }
    }, 1000);
    console.log('Correct Value Area Invoked');
}

function notifyWrongTimer() {
    document.getElementById("wrong").style['display'] = "block";
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        rightWrongTimer--;
        if (rightWrongTimer < 0) {
            clearInterval(timeInterval)
            document.getElementById("wrong").style['display'] = "none";
        }
    }, 1000);
    console.log('Wrong Value Area Invoked');
}

// Displays the message one word at a time
function addTimerToPage() {
    var wordCount = 0;

    // Uses the `setInterval()` method to call a function to be executed every 300 milliseconds
    var msgInterval = setInterval(function () {
        if (words[wordCount] === undefined) {
            clearInterval(msgInterval);
        }
        else {
            document.getElementById('countdown').innerHTML = '00:00'
        }
    }, 500);
}

//t
function takeQuiz() {
    document.getElementById("startingScreen").style['display'] = "none";
    document.getElementById("Question1").style['display'] = "block";
    //Starts at 1st question
    var button1 = document.querySelector('#stringsQ1')
    button1.addEventListener("click", question1)

    var button2 = document.querySelector('#booleansQ1')
    button2.addEventListener("click", question1)

    var button3 = document.querySelector('#alertsQ1')
    button3.addEventListener("click", question1)

    var button4 = document.querySelector('#numbersQ1')
    button4.addEventListener("click", question1)

    function question1() {
        console.log('Question 1 invoked')
        if (button3.clicked = true) {
            console.log('user click: right answer')
            userScore = (userScore + 50);
            console.log(userScore)
            document.getElementById("Question1").style['display'] = "none";
            question2();
            notifyCorrectTimer();
            return userScore
        }

        else if (button1.clicked = true) {
            console.log('user click: wrong answer')
            removeTime();
            userScore = (userScore - 50);
            document.getElementById("Question1").style['display'] = "none";
            question2();
            notifyWrongTimer();
        }

        else if (button2.clicked = true) {
            console.log('user click: wrong answer')
            removeTime();
            userScore = (userScore - 50);
            document.getElementById("Question1").style['display'] = "none";
            question2();
            notifyWrongTimer();
        }

        else if (button4.clicked = true) {
            console.log('user click: wrong answer')
            removeTime();
            userScore = (userScore - 50);
            document.getElementById("Question1").style['display'] = "none";
            question2();
            notifyWrongTimer();
        }

    }
}

function question2() {
    document.getElementById("Question2").style['display'] = "block";
    var button1 = document.querySelector('#stringsQ2')
    button1.addEventListener("click", question2SubFunc)

    var button2 = document.querySelector('#arraysQ2')
    button2.addEventListener("click", question2SubFunc)

    var button3 = document.querySelector('#booleansQ2')
    button3.addEventListener("click", question2SubFunc)

    var button4 = document.querySelector('#aboveQ2')
    button4.addEventListener("click", question2SubFunc)

    function question2SubFunc() {
        console.log('Question 2 answered')
        if (button4.clicked = true) {
            console.log('user click: right answer')
            userScore = (userScore + 50);
            document.getElementById("Question2").style['display'] = "none";
            question3();
            notifyCorrectTimer();
            return userScore
        }

        else if (button1.clicked = true) {
            console.log('user click: wrong answer')
            removeTime();
            userScore = (userScore - 50);
            document.getElementById("Question2").style['display'] = "none";
            question3();
            notifyWrongTimer();
        }

        else if (button2.clicked = true) {
            console.log('user click: wrong answer')
            removeTime();
            userScore = (userScore - 50);
            document.getElementById("Question2").style['display'] = "none";
            question3();
            notifyWrongTimer();
        }

        else if (button3.clicked = true) {
            console.log('user click: wrong answer')
            removeTime();
            userScore = (userScore - 50);
            document.getElementById("Question2").style['display'] = "none";
            question3();
            notifyWrongTimer();
        }
    }
}

function question3() {
    document.getElementById("Question3").style['display'] = "block";
    var button1 = document.querySelector('#javascriptQ3')
    button1.addEventListener("click", question3SubFunc)

    var button2 = document.querySelector('#terminalQ3')
    button2.addEventListener("click", question3SubFunc)

    var button3 = document.querySelector('#loopsQ3')
    button3.addEventListener("click", question3SubFunc)

    var button4 = document.querySelector('#consoleQ3')
    button4.addEventListener("click", question3SubFunc)

    function question3SubFunc() {
        console.log('Question 3 answered')
        if (button4.clicked = true) {
            console.log('user click: right answer')
            userScore = (userScore + 50);
            document.getElementById("Question3").style['display'] = "none";
            question4();  
            notifyCorrectTimer();
            return userScore
        }

        else if (button1.clicked = true) {
            console.log('user click: wrong answer')
            removeTime();
            document.getElementById("Question3").style['display'] = "none";
            question4();
            notifyWrongTimer();
        }

        else if (button2.clicked = true) {
            console.log('user click: wrong answer')
            removeTime();
            document.getElementById("Question3").style['display'] = "none";
            question4();
            notifyWrongTimer();
        }

        else if (button3.clicked = true) {
            console.log('user click: wrong answer')
            removeTime();
            document.getElementById("Question3").style['display'] = "none";
            question4();
            notifyWrongTimer();
        }
    }
}

function question4() {
    document.getElementById("Question4").style['display'] = "block";
    var button1 = document.querySelector('#quotesQ4')
    button1.addEventListener("click", question3SubFunc)

    var button2 = document.querySelector('#curlyQ4')
    button2.addEventListener("click", question3SubFunc)

    var button3 = document.querySelector('#parenthesisQ4')
    button3.addEventListener("click", question3SubFunc)

    var button4 = document.querySelector('#squareQ4')
    button4.addEventListener("click", question3SubFunc)

    function question3SubFunc() {
        console.log('Question 4 answered')
        if (button2.clicked = true) {
            console.log('user click: right answer')
            userScore = (userScore + 50);
            document.getElementById("Question4").style['display'] = "none";
            calcScore();
            notifyCorrectTimer();
            return userScore
        }

        else if (button1.clicked = true) {
            console.log('user click: wrong answer')
            removeTime();
            userScore = (userScore - 50);
            document.getElementById("Question4").style['display'] = "none";
            notifyWrongTimer();
            calcScore();
        }

        else if (button4.clicked = true) {
            console.log('user click: wrong answer')
            removeTime();
            userScore = (userScore - 50);
            document.getElementById("Question4").style['display'] = "none";
            notifyWrongTimer();
            calcScore();
        }

        else if (button3.clicked = true) {
            console.log('user click: wrong answer')
            removeTime();
            userScore = (userScore - 50);
            document.getElementById("Question4").style['display'] = "none";
            notifyWrongTimer();
            calcScore();
        }
    }
}

function calcScore() {

    document.getElementById("enterName").style['display'] = "block";
    document.getElementById('finalScoreDisplay').innerHTML = userScore;
    var submission = document.querySelector('#submitName')
    submission.addEventListener("click", localHighScore)
    //Add local Storage & right wrong & link View High Scores Hyperlink
    function localHighScore() {
        document.getElementById("enterName").style['display'] = "block";
        document.getElementById("view-high-scores").style['display'] = "inline";
        localStorage.setItem('playerName');
        restartGameOrReset()
    }
    function restartGameOrReset() {
        var goBack = document.querySelector('#go-Back')
        goBack.addEventListener("click", restartGame)

        var clearScoreboard = document.querySelector('#clearAll')
        clearScoreboard.addEventListener("click", resetScoreboard)

        function restartGame() {
            userScore = 0;
            document.getElementById("startingScreen").style['display'] = "block";
        }

        function resetScoreboard() {
            localStorage.clear();
        }

    }
}

function removeTime() {
    timeLeft = (timeLeft - 10);
    return timeLeft
}
