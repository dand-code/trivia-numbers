import { fetchQuestions, restoreQuestions, updateStoredQuestions } from "../../services/fetchQuestions";

beforeEach(() => {
    fetch.resetMocks();
});

describe("Fetching questions from NumbersAPI", () => {
    test("response questions list", async () => {
        const apiResponse = {
            "1": "1 is the number of dimensions of a line.",
            "2": "2 is the number of polynucleotide strands in a DNA double helix."
        };
        const numbers = ["1", "2"];

        fetch.mockResponseOnce(JSON.stringify(apiResponse));
        const questions = await fetchQuestions();

        for (let i = 0; i < questions.length; i++) {
            expect(`${numbers[i]} ` + questions[i]["question"].toLowerCase()).toEqual(apiResponse[numbers[i]].toLowerCase());
            expect(questions[i]["solution"]).toEqual(numbers[i]);
            expect(questions[i]["options"].length).toEqual(4);
        }
    });

    test("restore questions list from local storage", async () => {
        updateStoredQuestions([
            { "question": "Is the number of players in a field hockey team.", "solution": "11", "options": [83, 21, 58, "11"]}
        ], 0, [{ "question": "Is the number of players in a field hockey team.", "status": "Skipped", "solution": "11" }]);
        
        const questions = restoreQuestions();

        expect(questions.questions[0]['question'].toLowerCase()).toEqual("Is the number of players in a field hockey team.".toLowerCase());
        expect(questions.questions[0]["solution"]).toEqual('11');
        expect(questions.questions[0]["options"].length).toEqual(4);
        expect(questions.answersList[0]["status"]).toEqual('Skipped');
    });
});