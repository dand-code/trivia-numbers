import { fetchApi, generateRandomNumbers } from "../../services/fetchAPI";

beforeEach(() => {
    fetch.resetMocks();
});

test("response json with list of questions", async () => {
    const mockResponse = {
        "1": "1 is the number of dimensions of a line.",
        "2": "2 is the number of polynucleotide strands in a DNA double helix."
    };
    fetch.mockResponseOnce(JSON.stringify(mockResponse));
    const response = await fetchApi();
    expect(response).toEqual(mockResponse);
});

test("generate random numbers", async () => {
    const randomNumbers = generateRandomNumbers(10);
    expect(randomNumbers.length).toBe(10);
});
