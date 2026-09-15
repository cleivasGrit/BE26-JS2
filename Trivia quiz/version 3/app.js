const startForm = document.querySelector("#startForm");
const questionForm = document.querySelector("#questionForm");
const messageDiv = document.querySelector("#messageDiv");

startForm.addEventListener("submit", startGame);
questionForm.addEventListener("submit", answerQuestion);

async function startGame(event) {
    event.preventDefault();

    const category = document.querySelector("#category").value;
    const difficulty = document.querySelector("#difficulty").value;
    const numberOfQuestions = document.querySelector("#numberOfQuestions").value;

    resetQuiz();
    hideStartForm();

    questions = await getQuestions(category, difficulty, numberOfQuestions);
    showQuestion();
}

function answerQuestion(event) {
    event.preventDefault();

    const selectedInput = document.querySelector('input[name="answers"]:checked');
    const correctAnswer = decodeHtml(questions[currentQuestionIndex].correct_answer);
    const isCorrect = selectedInput.value === correctAnswer;

    showAnswerMessage(isCorrect, correctAnswer);
    selectedInput.checked = false;
    questionForm.classList.add("hidden");

    if (isCorrect) {
        score++;
    }

    setTimeout(() => {
        messageDiv.classList.add("hidden");
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showFinalScore();
        }
    }, 2000);
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    const answers = shuffleAnswers([...question.incorrect_answers, question.correct_answer]);
    const answerInputs = questionForm.querySelectorAll("input");
    const answerLabels = questionForm.querySelectorAll("label");

    questionForm.querySelector("p").innerText = decodeHtml(question.question);

    answers.forEach((answer, index) => {
        const decodedAnswer = decodeHtml(answer);
        answerLabels[index].innerText = decodedAnswer;
        answerInputs[index].value = decodedAnswer;
    });

    questionForm.classList.remove("hidden");
}
