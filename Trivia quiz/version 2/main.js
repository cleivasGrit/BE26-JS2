import { startGame, answerQuestion } from "./modules/gameplay.js";

const startGameForm = document.querySelector("#startForm");
const questionForm = document.querySelector("#questionForm");

startGameForm.addEventListener("submit", startGame);
questionForm.addEventListener("submit", answerQuestion);
