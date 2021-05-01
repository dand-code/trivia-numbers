
/*
const questions = [
    { "question": "Is the number of dimensions of a line.", "solution": "1", "options": ["3", "1", "0", "4"], "answers": null },
    { "question": "Is the number of polynucleotide strands in a DNA double helix.", "answer": "2", "answers": ["2", "4", "0", "5"], "answers": null },
    { "question": "Is the number of sets needed to be won to win the whole match in volleyball.", "options": "3", "answers": ["2", "4", "3", "5"], "answers": null  },
    { "question": "Is the highest score possible in Olympics gymnastics competitions.", "options": "10", "answers": ["9", "14", "20", "10"], "answers": null  }
]
  */
const parseQuestionsResponse = (questionsResponse) => {
    let questions = [];

    Object.keys(questionsResponse).forEach((number) => {
        questions.push(generateQuestion(number, questionsResponse[number]));
    });

    return questions;
}

// return example: { "question": "Is the number of dimensions of a line.", "solution": "1", "options": ["3", "1", "0", "4"], "answer": "" }
const generateQuestion = (number, fact) => {
    return {
        "question": formatFact(number, fact),
        "solution": number,
        "options": generateOptions(number),
        "answer": null
    };
}

// "1 is the number of dimensions of a line." => "Is the number of dimensions of a line."
const formatFact = (number, fact) => {
    const parseFact = fact.replace(number + " ", "");

    return parseFact[0].toUpperCase() + parseFact.slice(1);
}

// Return example [2, 3, {solution}, 5]
const generateOptions = (solution) => {
    let numbers = [solution];
    while (numbers.length < 4) {
        let random = Math.floor(Math.random() * 100);
        if (!numbers.includes(random))
            numbers.push(random);
    }
    return numbers.sort(() => Math.random() - 0.5);
}

export { parseQuestionsResponse };