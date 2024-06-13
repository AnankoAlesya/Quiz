const greenColor = 'green';
const redColor = 'red';
const indigoColor = '#5D76CB';
let currentQuestionIndex = 0;
let isAnswerSelected = false;
let score = 0;

const questions = [
    {
        text: "How many chromosomes are in the human genome?",
        answers: [
            { text: "42", isCorrect: false, points: 0},
            { text: "44", isCorrect: false, points: 0},
            { text: "46", isCorrect: true, points: 1},
            { text: "48", isCorrect: false, points: 0}
        ]
    },
    {
        text: "What is the capital of France?",
        answers: [
            { text: "Berlin", isCorrect: false, points: 0},
            { text: "Madrid", isCorrect: false, points: 0},
            { text: "Paris", isCorrect: true, points: 1},
            { text: "Rome", isCorrect: false, points: 0}
        ]
    },
    {
        text: "What is the largest planet in our solar system?",
        answers: [
            { text: "Earth", isCorrect: false, points: 0},
            { text: "Jupiter", isCorrect: true, points: 1},
            { text: "Mars", isCorrect: false, points: 0},
            { text: "Saturn", isCorrect: false, points: 0}
        ]
    },
    {
        text: "Which of these poems did Pushkin write?(you need to select several options)",
        answers: [
            { text: "I remember a wonderful moment", isCorrect: true, points: 0.5},
            { text: "The Lukomorye oak is green..", isCorrect: true, points: 0.5},
            { text: "The Blue Mountains of the Caucasus", isCorrect: false, points: 0},
            { text: "Night, street, lantern, pharmacy", isCorrect: false, points: 0}
        ]
    },
    {
        text: "What formulas are used to find the area of a circle?(you need to select several options)",
        answers: [
            { text: "S=¼πd²", isCorrect: true, points: 0.5},
            { text: "S=4πd²", isCorrect: false, points: 0},
            { text: "S=πr²", isCorrect: true, points: 0.5},
            { text: "S=2πr", isCorrect: false, points: 0}
        ]
    },
];

let selectedAnswers = 0;

function clickAnswer(button) {
    const buttonText = button.innerText;
    const currentQuestion = questions[currentQuestionIndex];
    const answerObject = currentQuestion.answers.find(answer => answer.text === buttonText);
    if (answerObject.isCorrect) {
        button.style.backgroundColor = greenColor;
        if (isNaN(score)) {
            score = 0;
        }
        score += answerObject.points;
        selectedAnswers++;
    } else {
        button.style.backgroundColor = redColor;
    }
    isAnswerSelected = true;
}

function nextQuestion() {
    if (!isAnswerSelected) { 
        alert("Please select an answer before proceeding to the next question.");
        return;
    }

    if (currentQuestionIndex >= questions.length-1) {
        alert(`Quiz completed! You have earned ${score} points`);
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
        button.style.backgroundColor = indigoColor; 
    });
    isAnswerSelected = false;
    selectedAnswers = 0;
}

function restartQuiz() {
    currentQuestionIndex = -1;
    isAnswerSelected = true;
    selectedAnswers = 0;
    score = 0;
    nextQuestion();
    document.getElementById("restart_button").style.display = 'none';
}
