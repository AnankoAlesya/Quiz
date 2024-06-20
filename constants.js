const colors = {
    green: 'green',
    red: 'red',
    indigo: '#5D76CB',
    white: '#FFFFFF',
    blue_bell:'#A2A2D0',
    purple_blue:'#20155E'
};

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
        text: "Which of these poems did Pushkin write?(you need to select 2 options)",
        answers: [
            { text: "I remember a wonderful moment", isCorrect: true, points: 0.5},
            { text: "The Lukomorye oak is green..", isCorrect: true, points: 0.5},
            { text: "The Blue Mountains of the Caucasus", isCorrect: false, points: 0},
            { text: "Night, street, lantern, pharmacy", isCorrect: false, points: 0}
        ]
    },
    {
        text: "What formulas are used to find the area of a circle?(you need to select 2 options)",
        answers: [
            { text: "S=¼πd²", isCorrect: true, points: 0.5},
            { text: "S=4πd²", isCorrect: false, points: 0},
            { text: "S=πr²", isCorrect: true, points: 0.5},
            { text: "S=2πr", isCorrect: false, points: 0}
        ]
    },
];