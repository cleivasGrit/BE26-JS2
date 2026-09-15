/**
 * Getting the questions for the game using the Open Trivia Database.
 * https://opentdb.com/
 */

export async function getTriviaQuestions(category, difficulty, numberOfQuestions) {
    const url = `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`;
    const response = await fetch(url);
    const data = await response.json();

    return data.results;
}
