let timer; 
const questionTime = 60; 
let currentQuestionIndex = 0;
let isAnswerSelected = false;
let score = 0;
let selectedAnswers = 0;

function applyTheme(theme) {
    document.body.classList.remove("theme-light", "theme-dark");
    document.body.classList.add(`theme-${theme}`);
}

document.addEventListener("DOMContentLoaded", () => {
   document.querySelector("#theme").addEventListener("change", function() {
        applyTheme(this.value);
        updateScoreColor(); 
   });
});


document.addEventListener('DOMContentLoaded', () => {
    startTimer(questionTime);
});

function startTimer(time) {
    let seconds = time;
    const timerDisplay = document.getElementById('timer'); 
    timerDisplay.textContent = seconds;

    timer = setInterval(() => {
        seconds--;
        timerDisplay.textContent = formatTime(seconds);;

        if (seconds <= 0) {
            clearInterval(timer);
            handleTimeout();
        }
    }, 1000);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function clickAnswer(button) {
    hideWarningPopup();

    clearInterval(timer); 

    const buttonText = button.innerText;
    const currentQuestion = questions[currentQuestionIndex];
    const answerObject = currentQuestion.answers.find(answer => answer.text === buttonText);
    if (answerObject.isCorrect) {
        button.style.backgroundColor = colors.green;
        if (isNaN(score)) {
            score = 0;
        }
        score += answerObject.points;
        selectedAnswers++;
    } else {
        button.style.backgroundColor = colors.red;
    }
    isAnswerSelected = true;
}

function hideWarningPopup() {
    const warningPopup = document.getElementById("warningPopup");
    warningPopup.classList.remove("show");
}

function showWarningPopup() {
    const warningPopup = document.getElementById("warningPopup");
    warningPopup.classList.add("show");
}

function showScorePopupAndUpdate(score) {
    const scorePopup = document.getElementById("scorePopup");
    const scoreValue = document.getElementById("scoreValue");
    scoreValue.innerText = score;
    scorePopup.classList.add("show");
}

 function nextQuestion() {
    clearInterval(timer); 
    //if (!isAnswerSelected) { 
        //showWarningPopup()
        //startTimer(questionTime);
        //return;
    //}

    if (currentQuestionIndex >= questions.length-1) {
        showScorePopupAndUpdate(score);
        document.getElementById("restart_button").style.display = 'block';
        return;
    }
    currentQuestionIndex++

    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question-title").innerText = `Question ${currentQuestionIndex + 1}/${questions.length}`;
    document.getElementById("question-text").innerText = currentQuestion.text;

    const buttons = document.querySelectorAll(".button");
    buttons.forEach((button, index) => {
        button.innerText = currentQuestion.answers[index].text;
        button.onclick = () => clickAnswer(button);
        button.style.backgroundColor = colors.indigo; 
         if (document.body.classList.contains('theme-light')) {
            button.style.backgroundColor = colors.indigo;
            button.style.color = colors.white; 
        } else if (document.body.classList.contains('theme-dark')) {
            button.style.backgroundColor = colors.purple_blue;
            button.style.color = colors.blue_bell; 
        }
    });
    isAnswerSelected = false;
    selectedAnswers = 0;
    startTimer(questionTime);
}

function updateScoreColor() {
    const scoreValue = document.getElementById("scoreValue");
    if (document.body.classList.contains('theme-light')) {
      scoreValue.classList.remove("score-value-dark");
      scoreValue.classList.add("score-value-light");
    } else if (document.body.classList.contains('theme-dark')) {
      scoreValue.classList.remove("score-value-light");
      scoreValue.classList.add("score-value-dark");
    }
  }

function handleTimeout() {
    clearInterval(timer);
    
    nextQuestion();
}

function restartQuiz() {
    document.getElementById("restart_button").style.display = 'none';
    document.getElementById("scorePopup").classList.remove("show");
    currentQuestionIndex = -1;
    isAnswerSelected = true;
    selectedAnswers = 0;
    score = 0;
    nextQuestion();
}
