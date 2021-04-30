import { fetchApi } from './fetchApi';
import { parseQuestionsResponse } from './parserQuestions';

const fetchQuestions = () => {
    return fetchApi()
        .then(data => {
            return parseQuestionsResponse(data);
        });
}

export { fetchQuestions };