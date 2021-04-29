const ENDPOINT = 'http://numbersapi.com/1..10';

const fetchApi = () => {
  return fetch(ENDPOINT).then(response => response.json()); // Devuelve la Promise que genera el fetch
}

export { fetchApi };