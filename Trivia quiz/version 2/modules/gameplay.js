/**
 * Functions related to game logic and state.
 */

import { getTriviaQuestions } from "./triviaAPI.js";
import {
    hideStartForm,
    displayQuestion,
    displayAnswerFeedback,
    hideAnswerFeedback,
    displayFinalScore
} from "./display.js";

const startGameForm = document.querySelector("#startForm");
const questionForm = document.querySelector("#questionForm");

let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

export async function startGame(event) {
    event.preventDefault();

    const category = startGameForm.querySelector("#category").value;
    const difficulty = startGameForm.querySelector("#difficulty").value;
    const numberOfQuestions = startGameForm.querySelector("#numberOfQuestions").value;

    resetGame();
    hideStartForm();

    quizQuestions = await getTriviaQuestions(category, difficulty, numberOfQuestions);
    displayQuestion(quizQuestions[currentQuestionIndex]);
}

export function answerQuestion(event) {
    event.preventDefault();

    const selectedAnswer = getSelectedAnswer();
    const correctAnswer = getCurrentQuestion().correct_answer;
    const isCorrectAnswer = selectedAnswer === correctAnswer;

    if (isCorrectAnswer) {
        score++;
    }

    displayAnswerFeedback(isCorrectAnswer, correctAnswer);

    setTimeout(() => {
        hideAnswerFeedback();
        currentQuestionIndex++;

        if (currentQuestionIndex < quizQuestions.length) {
            displayQuestion(quizQuestions[currentQuestionIndex]);
            return;
        }

        displayFinalScore(score, quizQuestions.length);
    }, 2000);
}

function resetGame() {
    quizQuestions = [];
    currentQuestionIndex = 0;
    score = 0;
}

function getSelectedAnswer() {
    return questionForm.querySelector('input[name="answers"]:checked').value;
}

function getCurrentQuestion() {
    return quizQuestions[currentQuestionIndex];
}
