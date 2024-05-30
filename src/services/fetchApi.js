const PROXY_URL = '/.netlify/functions/proxy?url=';
const ENDPOINT = 'http://numbersapi.com/';

const qtyQuestions = 10;

const fetchApi = async () => {
  const randomNumbers = generateRandomNumbers(qtyQuestions).join();

  try {
    const response = await fetch(PROXY_URL + encodeURIComponent(ENDPOINT + randomNumbers));
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.text(); // numbersapi.com devuelve texto.
  } catch (error) {
    console.error('Failed to fetch:', error);
    throw error;
  }
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
