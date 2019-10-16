import { api } from "../API/api";

const SET_QUESTION = 'SET_QUESTION';
const QUESTION_IS_LOADING = 'QUESTION_IS_LOADING';
const NEXT_QUESTION = 'NEXT_QUESTION';
const SET_POINT = 'SET_POINT';
const SET_FAILED_ANSWER = 'SET_FAILED_ANSWER';

let initialState = {
  question: null,
  isLoading: false,
  counter: 1,
  totalPoints: [],
  failedAnswers: []
}

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTION:
      return {
        ...state,
        question: action.data
      }
    case QUESTION_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }
    case NEXT_QUESTION:
      return {
        ...state,
        counter: state.counter += 1
      }
    case SET_POINT:
      return {
        ...state,
        totalPoints: [...state.totalPoints, action.point]
      }
    case SET_FAILED_ANSWER:
      return {
        ...state,
        failedAnswers: [...state.failedAnswers, action.payload]
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
export const nextQuestionStep = () => {
  return {
    type: NEXT_QUESTION,
  }
}

export const setPoint = (point) => {
  return {
    type: SET_POINT,
    point
  }
}
export const setFailedAnswer = (payload) => {
  return {
    type: SET_FAILED_ANSWER,
    payload
  }
}



export const nextQuestion = (data) => {
  // debugger
  return (dispatch) => {
    dispatch(questionIsLoading(true))
    api.getQuestion(data)
      .then(response => {
        // debugger
        dispatch(questionIsLoading(false))
        dispatch(setQuestion(response))
        dispatch(nextQuestionStep())
      })
  }
}


export default testReducer;