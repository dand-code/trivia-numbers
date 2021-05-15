import { fetchApi } from './fetchApi';
import { parseQuestionsResponse } from './parserQuestions';
import { getLocal, setLocal } from './storage';


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

const restoreQuestions = () => {
    return getLocal();
 }


const updateStoredQuestions = (questions, index, answersList) => { 
    setLocal({ 'questions': questions, 'index': index, 'answersList': answersList });
}

const clearQuestions = () => {
    localStorage.removeItem("questions");
};

export { fetchQuestions, restoreQuestions, updateStoredQuestions, clearQuestions };