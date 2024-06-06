function Click(button, isCorrect) {
    if (isCorrect) {
        button.style.backgroundColor = 'green';
    } else {
        button.style.backgroundColor = 'red';
    }
}