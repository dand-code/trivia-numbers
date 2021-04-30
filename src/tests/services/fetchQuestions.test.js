import { fetchQuestions } from "../../services/fetchQuestions";

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
            expect(questions[i]["answer"]).toEqual(null);
        }
    });
});