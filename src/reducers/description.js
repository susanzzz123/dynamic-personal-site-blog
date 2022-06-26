import { ADD_DES } from '../actions'

const defaultState = ''

const description = (state = defaultState, action) => {
  const { type, description } = action

  switch (type) {
    case ADD_DES:
      return description
    default:
      return state
  }
}

export default description
