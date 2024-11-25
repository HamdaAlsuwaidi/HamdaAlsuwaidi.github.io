var num1, num2;
var correctCount = 0;
var incorrectCount = 0;
var totalQuestions = 0;

function Question() {
   
    num1 = Math.floor(Math.random() * 9) + 1;
    num2 = Math.floor(Math.random() * 9) + 1;

 
    document.getElementById("question").textContent = "How much is " + num1 + " times " + num2 + "?";

  
    document.getElementById("answer").value = "";
}

function check() {
    var userinput = parseInt(document.getElementById("answer").value);
    var Answer = num1 * num2;

  
    document.getElementById("feedback").textContent = "";
    hideCelebrationImages();

  
    if (userinput === Answer) {
        correctCount++;
        var correctFeedback = CorrectAnswer();
        document.getElementById("feedback").textContent = correctFeedback;
        showCelebrationImage();
    } else {
        incorrectCount++;
        var incorrectFeedback = IncorrectAnswer();
        document.getElementById("feedback").textContent = incorrectFeedback;
    }

    totalQuestions++;

 
    document.getElementById("score").textContent =
        "Correct: " + correctCount + " | Incorrect: " + incorrectCount;

   
    if (totalQuestions === 10) {
        var percentage = (correctCount / totalQuestions) * 100;
        if (percentage < 75) {
            document.getElementById("feedback").textContent =
                "Quiz over. Your score: " +
                percentage.toFixed(2) +
                "%. Please ask your instructor for extra help.";
        } else {
            document.getElementById("feedback").textContent =
                "Quiz over. Great job! Your score: " + percentage.toFixed(2) + "%.";
        }
        resetQuiz(); 
    } else {
        
        setTimeout(Question, 2000);
    }
}


function showCelebrationImage() {
    var randomIndex = Math.floor(Math.random() * 3) + 1;
    document.getElementById("celebration-image" + randomIndex).style.display = "block";
}


function hideCelebrationImages() {
    for (var i = 1; i <= 3; i++) {
        document.getElementById("celebration-image" + i).style.display = "none";
    }
}


function CorrectAnswer() {
    var GoodWords = [
        "Very good!",
        "Excellent!",
        "Nice work!",
        "Keep up the good work!"
    ];
    var randomIndex = Math.floor(Math.random() * GoodWords.length);
    return GoodWords[randomIndex];
}

function IncorrectAnswer() {
    var TryAgainWords = [
        "No. Please try again.",
        "Wrong. Try once more.",
        "Don't give up!",
        "No. Keep trying."
    ];
    var randomIndex = Math.floor(Math.random() * TryAgainWords.length);
    return TryAgainWords[randomIndex];
}


function resetQuiz() {
    correctCount = 0;
    incorrectCount = 0;
    totalQuestions = 0;
    document.getElementById("score").textContent =
        "Correct: " + correctCount + " | Incorrect: " + incorrectCount;
    setTimeout(function () {
        Question(); 
    }, 2000);
}


Question();
