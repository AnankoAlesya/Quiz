let currentQuestionIndex = 0;
let isAnswerSelected = false;

const questions = [
    {
        text: "How many chromosomes are in the human genome?",
        answers: [
            { text: "42", isCorrect: false },
            { text: "44", isCorrect: false },
            { text: "46", isCorrect: true },
            { text: "48", isCorrect: false }
        ]
    },
    {
        text: "What is the capital of France?",
        answers: [
            { text: "Berlin", isCorrect: false },
            { text: "Madrid", isCorrect: false },
            { text: "Paris", isCorrect: true },
            { text: "Rome", isCorrect: false }
        ]
    },
    {
        text: "What is the largest planet in our solar system?",
        answers: [
            { text: "Earth", isCorrect: false },
            { text: "Jupiter", isCorrect: true },
            { text: "Mars", isCorrect: false },
            { text: "Saturn", isCorrect: false }
        ]
    },
    {
        text: "Which of these poems did Pushkin write?(you need to select several options)",
        answers: [
            { text: "I remember a wonderful moment", isCorrect: true },
            { text: "The Lukomorye oak is green..", isCorrect: true },
            { text: "The Blue Mountains of the Caucasus", isCorrect: false },
            { text: "Night, street, lantern, pharmacy", isCorrect: false }
        ]
    },
    {
        text: "What formulas are used to find the area of a circle?(you need to select several options)",
        answers: [
            { text: "S=¼πd²", isCorrect: true },
            { text: "S=4πd²", isCorrect: false },
            { text: "S=πr²", isCorrect: true },
            { text: "S=2πr", isCorrect: false }
        ]
    },
];

function clickAnswer(button, isCorrect) {
    if (isCorrect) {
        button.style.backgroundColor = 'green';
    } else {
        button.style.backgroundColor = 'red';
    }
    isAnswerSelected = true;
}

function nextQuestion() {
    if (!isAnswerSelected) { 
        alert("Please select an answer before proceeding to the next question.");
        return;
    }

    if (currentQuestionIndex >= questions.length-1) {
        alert("Quiz completed!");
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
        button.onclick = () => clickAnswer(button, currentQuestion.answers[index].isCorrect);
        button.style.backgroundColor = '#5D76CB'; 
    });
    isAnswerSelected = false;
}

function restartQuiz() {
    currentQuestionIndex = -1;
    isAnswerSelected = true;
    nextQuestion();
    document.getElementById("restart_button").style.display = 'none';
}
