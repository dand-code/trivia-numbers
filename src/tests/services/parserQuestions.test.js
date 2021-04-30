import { parseQuestionsResponse } from "../../services/parserQuestions";

const apiResponse = {
    "1": "1 is the number of dimensions of a line.",
    "2": "2 is the number of polynucleotide strands in a DNA double helix.",
    "3": "3 is the number of sets needed to be won to win the whole match in volleyball.",
    "10": "10 is the highest score possible in Olympics gymnastics competitions."
};

describe("Parsing response API", () => {
    test("response json with list of questions", async () => {
        const questions = parseQuestionsResponse(apiResponse);
        const numbers = Object.keys(apiResponse);

        for (let i = 0; i < questions.length; i++) {
            expect(`${numbers[i]} ` + questions[i]["question"].toLowerCase()).toEqual(apiResponse[numbers[i]].toLowerCase());
            expect(questions[i]["solution"]).toEqual(numbers[i]);
            expect(questions[i]["options"].length).toEqual(4);
            expect(questions[i]["answer"]).toEqual(null);
        }
    });
});