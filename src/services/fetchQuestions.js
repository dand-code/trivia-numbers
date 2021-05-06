import { fetchApi } from './fetchApi';
import { parseQuestionsResponse } from './parserQuestions';
import { getLocal, setLocal } from './storage';

const restoreQuestions = () => {
    return getLocal();
 }

const fetchQuestions = () => {
    return fetchApi()
        .then(data => {
            return {
                'questions': parseQuestionsResponse(data),
                'index': 0,
                'answersList': []
            };
        });   
}

const updateStoredQuestions = (questions, index, answersList) => { 
    setLocal({ 'questions': questions, 'index': index, 'answersList': answersList });
}

export { fetchQuestions, restoreQuestions, updateStoredQuestions };