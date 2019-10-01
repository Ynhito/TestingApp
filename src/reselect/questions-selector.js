import { createSelector } from "reselect";

const requestQuestions = (state) => {
    return state.test.question
} 

export const requestQuestionsSort = createSelector(requestQuestions, 
    (questions) => {
    return questions[0];
})