/**
 * Functions that update what the user sees on the page.
 */

import _ from "https://cdn.jsdelivr.net/npm/underscore@1.13.7/underscore-esm-min.js";

const startGameForm = document.querySelector("#startForm");
const questionForm = document.querySelector("#questionForm");
const questionText = questionForm.querySelector("p");
const answerInputs = questionForm.querySelectorAll("input");
const answerLabels = questionForm.querySelectorAll("label");
const scoreElement = document.querySelector("#score");
const messageElement = document.querySelector("#messageDiv");
const resultElement = document.querySelector("#result");

function decodeHtml(text) {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = text;
    return textarea.value;
}

function hideStartForm() {
    startGameForm.classList.add("hidden");
}

function showStartForm() {
    startGameForm.classList.remove("hidden");
}

function hideQuestion() {
    questionForm.classList.add("hidden");
}

function displayQuestion(question) {
    const answers = _.shuffle([...question.incorrect_answers, question.correct_answer]);

    questionText.innerText = decodeHtml(question.question);

    answers.forEach((answer, index) => {
        const decodedAnswer = decodeHtml(answer);

        answerLabels[index].innerText = decodedAnswer;
        answerInputs[index].value = answer;
        answerInputs[index].checked = false;
    });

    questionForm.classList.remove("hidden");
}

function displayAnswerFeedback(isCorrectAnswer, correctAnswer) {
    hideQuestion();
    messageElement.classList.remove("hidden");

    if (isCorrectAnswer) {
        resultElement.innerText = "Correct! 🎉";
        return;
    }

    resultElement.replaceChildren(
        "Wrong answer... 😬 ",
        document.createElement("br"),
        "The correct answer is: "
    );

    const correctAnswerElement = document.createElement("span");
    correctAnswerElement.innerText = decodeHtml(correctAnswer);
    resultElement.append(correctAnswerElement);
}

function hideAnswerFeedback() {
    messageElement.classList.add("hidden");
}

function displayFinalScore(score, maxScore) {
    scoreElement.classList.remove("hidden");
    scoreElement.querySelector("span").innerText = `${score} / ${maxScore}`;

    setTimeout(() => {
        scoreElement.classList.add("hidden");
        showStartForm();
    }, 5000);
}

export {
    hideStartForm,
    displayQuestion,
    displayAnswerFeedback,
    hideAnswerFeedback,
    displayFinalScore
};
