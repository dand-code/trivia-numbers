const ENDPOINT = 'http://numbersapi.com/';

const qtyQuestions = 10;

const fetchApi = () => {
  const randomNumbers = generateRandomNumbers(qtyQuestions).join();

  return fetch(ENDPOINT + randomNumbers)
    .then(response => response.json());
}

const generateRandomNumbers = (qty) => {
  let numbers = [];
  while (numbers.length < qty) {
    let random = Math.floor(Math.random() * 100);
    if (!numbers.includes(random))
      numbers.push(random);
  }

  return numbers;

}

export { fetchApi, generateRandomNumbers };