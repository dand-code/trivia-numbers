# Trividado Number

**Trividado Number** is a web application where the user must answer 10 questions related to random numbers.

<img src="./DEMO - TRIVIDADO.gif"  />

## How it works?

The questions are generated through the API http://numbersapi.com/.
For each question, 4 answer options will be given and the player will have two options to answer, between contesting/confirming the jump to the next question.

Each answer will be kept in history. The user will be able to see the questions with the status of the answer.
After finishing the game, a summary page with the results obtained and an option is presented to return to the game.

### Technologies used

* ReactJs
* Jest y Enzyme
* Styled-Components



### Project Goals 

##### Main Goals 
- [x] Correctly structure the state of the application and its transitions.
- [x] Differentiate responsibilities for each component.
- [x] Control the different error cases that may arise (errors in the API, etc.)
- [x]  **Testing:** All layers should have at least one test (unit, integration). 100% coverage is not required.



##### Extra Goals
- [ ] Add a progress bar for the remaining time of each question that, as it progresses, changes color.
- [x] Implement a responsive design.
- [ ] Persist the state of the game, so that when reloading the page everything continues where it left off.
- [ ] Use Redux to manage the state of the application.
- [x] The use of hooks will be valued
- [x] The use of styled-components will be valued



#### Planning
Sprint 1 | Sprint 2 | Sprint 3| Sprint 4 | Sprint 5 | Sprint 6
------------ | -------------|-------------| -------------|-------------|-------------
Initialize the project with creat-react-project and prepare the basic structure of the folders and the App component. | Get one question rendered. For it: Create a switch between the "Welcome" and "Questions" components.| Program the composition of the API URL. | "Confirm" and "Skip" buttons| Records of questions answered. | Tests
Analyze the API. | Send a generic question to render on the “Questions” component by props. | Do the fetching and render questions with real data from the API. | |Play Again button. 

#### Infrastructure (components)
* `index.js`: 
    1. Apply "ThemeProvider", from Styled-Component, with the application colors and spacing;
    1. "HashRouter" is used.

* `App.js`:
    1. Global reset styles are applied with “createGlobalStyle”, from Styled-Component.
    1. Switch between Welcome page and the game.

* `Welcome.js`:
    1. Global reset styles are applied with “createGlobalStyle”, from Styled-Component.
    1. Button with link to game start.

* `Questions.js`:
    1. Receives API data formatted for questions;
    1. Stores in the state the answer selected by the user in the child component.
    1. Keeps in the state the list of questions answered to generate the history.
    1. Disables the 'confirm' and 'skip' buttons when the limit of questions is reached.
* `Question.js`:
    1. Receives questions information sent by props from Question component.  
    1. Render the question and the answers options.
    1. Send user answer selected to Questions component by lifting. 
* `AnswerRecords.js`:
    1. Receives answers list by props from Questions component. 
   1. Render the answer, the status (correct, error, or skipped).
    1. Render the solution (in error or skipped situation).

#### Infrastructure (services)
To get the data from the API, three components are organized to:

1. Make the call and get the response promise (src / services / fetchApi.js);
1. Format the received data (src / services / parserQuestions.js);
1. Intermediate between the call to the Api and that sends the response formatted src / services / fetchQuestions.js to the App component).

In the game Trivided the player must answer questions about 10 random numbers. In order not to make a call to the server for each question round, in this project it was chosen to make a single call to the API when loading the page, which directly brings the data of 10 numbers chosen to the azer. And for that it was necessary to program the construction of the URL with 10 ramdon numbers. The advantages are:

* Reduce the amount of data consumed by the user's device;
* Decrease the time to load the application;
* Reduce the risk of server crashes in the middle of the game;

`fetchApi.js:`
```javascript
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
```

In addition, there is another challenge with the API. The data received from the server has the following standard, and it is not enough to generate the questions.

```
{   
    "1": "1 is the number of dimensions of a line.",
    "2": "2 is the number of polynucleotide strands in a DNA double helix.",
    "3": "3 is the number of sets needed to be won to win the whole match in volleyball.",
    "10": "10 is the highest score possible in Olympics gymnastics competitions."
}
```

In order for it to be used in the application, it is necessary to parser this standard:

```
const questions = [
   { "question": "Is the number of dimensions of a line.", "solution": "1", "options": ["3", "1", "0", "4"], "answer": null },
   { "question": "Is the number of polynucleotide strands in a DNA double helix.", "answer": "2", "options": ["2", "4", "0", "5"], "answer": null },
   { "question": "Is the number of sets needed to be won to win the whole match in volleyball.", "answer": "3", "options": ["2", "4", "3", "5"], "answer": null },
   { "question": "Is the highest score possible in Olympics gymnastics competitions.", "answer": "10", "options": ["9", "14", "20", "10"], "answer": null }
 ]
```

That is:
1. Eliminate the number that comes in the question and transform the first letter of the question into a capital letter:

`parserQuestions.js:`
```javascript
const formatFact = (number, fact) => {
   const parseFact = fact.replace(number + " ", "");
  return parseFact[0].toUpperCase() + parseFact.slice(1);
}
```

2. Save the solution on an attribute; Define the options for the answers, including the solution; In addition to shuffling the options:

`parserQuestions.js:`
````javascript
const generateOptions = (solution) => {
   let numbers = [solution];
   while (numbers.length < 4) {
       let random = Math.floor(Math.random() * 100);
       if (!numbers.includes(random))
           numbers.push(random);
   }
   return numbers.sort(() => Math.random() - 0.5);
}
````

3. Generate a question structure, which also includes an attribute for the user's response.

`parserQuestions.js:`
````javascript
const generateQuestion = (number, fact) => {
   return {
       "question": formatFact(number, fact),
       "solution": number,
       "options": generateOptions(number),
       "answer": null
   };
}
````
Once you have all the data ready, `fetchQuestions.js` takes care of passing this information to the `App` component, where the list of questions will be sent to the `Questions` component through hooks.

### The stones upon the way 

>* **Progress bar and timer**
> I have been able to do the progress bar component. It worked well for the first and second questions but did not skip to the others questions.

>* **Testing components with hooks and styled-component**
> XXX
