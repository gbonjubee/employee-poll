import * as data from "./_DATA.js";
  
  export function getInitialData() {
    return Promise.all([data._getUsers(), data._getQuestions()]).then(([users, questions]) => ({
      users,
      questions,
    }));
  }
  
  export function saveQuestion(question) {
    return data._saveQuestion(question);
  }
  
  export function saveQuestionAnswer(answer) {
    return data._saveQuestionAnswer(answer);
  }

  

