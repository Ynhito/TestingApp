const FIRST_INIT = 'FIRST_INIT';
const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';

let initialState = {
  question: []
}

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIRST_INIT:
      return {
        ...state
      }
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.data]
      }
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.splice(action.start,action.count)
      }
    default:
      return state
  }
}

export const addItem = (data) => {
  return {
    type: ADD_ITEM,
    data
  }
}

export const deleteItem = (start,count) => {
  return {
    type: DELETE_ITEM,
    start,
    count
  }
}

export default testReducer;