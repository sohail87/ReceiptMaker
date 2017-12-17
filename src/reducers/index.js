import * as ActionTypes from '../actions/types'

const initialState = {

}

export default (state = initialState, action) => {
  switch (action.type) {

  case ActionTypes.CREATE_RECEIPT:
    return { ...state, [action.payload.id]:action.payload }

  default:
    return state
  }
}
