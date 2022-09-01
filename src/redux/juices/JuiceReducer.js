import { BUY_JUICE } from './JuiceActionType'

const initialState = {
  numOfJuices: 30,
}

const JuiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_JUICE:
      return {
        ...state,
        numOfJuices: state.numOfJuices - 1,
      }
    default:
      return state
  }
}

export default JuiceReducer
