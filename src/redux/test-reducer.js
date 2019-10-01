import { api } from "../API/api";

const SET_QUESTION = 'SET_QUESTION';
const QUESTION_IS_LOADING = 'QUESTION_IS_LOADING';

let initialState = {
  question: [],
  isLoading: false
}

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTION:
      return {
        ...state,
        question: [...state.question, action.data]
      }
    case QUESTION_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }
    default:
      return state
  }
}

export const setQuestion = (data) => {
  return {
    type: SET_QUESTION,
    data
  }
}

export const questionIsLoading = (payload) => {
  return {
    type: QUESTION_IS_LOADING,
    payload
  }
}

export const nextQuestion = (data) => {
  return (dispatch) => {
    dispatch(questionIsLoading(true))
    api.getQuestion()
      .then(response => {
        dispatch(questionIsLoading(false))
        dispatch(setQuestion(response))
      })
  }
}


export default testReducer;