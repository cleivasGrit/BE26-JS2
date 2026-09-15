const scoreDiv = document.querySelector("#score");
const resultText = document.querySelector("#result");

let questions = [];
let currentQuestionIndex = 0;
let score = 0;

async function getQuestions(category, difficulty, numberOfQuestions) {
    const url = `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`;
    const response = await fetch(url);
    const data = await response.json();

    return data.results;
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    questions = [];
    scoreDiv.classList.add("hidden");
}

function hideStartForm() {
    document.querySelector("#startForm").classList.add("hidden");
}

function showAnswerMessage(isCorrect, correctAnswer) {
    const messageDiv = document.querySelector("#messageDiv");

    if (isCorrect) {
        resultText.innerText = "Correct! 🎉";
    } else {
        resultText.innerHTML = `Wrong answer... 😬 <br>The correct answer is: <span>${correctAnswer}</span>`;
    }

    messageDiv.classList.remove("hidden");
}

function showFinalScore() {
    scoreDiv.querySelector("span").innerText = `${score} / ${questions.length}`;
    scoreDiv.classList.remove("hidden");

    setTimeout(() => {
        scoreDiv.classList.add("hidden");
        document.querySelector("#startForm").classList.remove("hidden");
    }, 5000);
}

function shuffleAnswers(answers) {
    return answers.sort(() => Math.random() - 0.5);
}

function decodeHtml(text) {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = text;
    return textarea.value;
}
