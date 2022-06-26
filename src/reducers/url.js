import { ADD_URL } from '../actions'

const defaultState = ''

const url = (state = defaultState, action) => {
  const { type, url } = action

  switch (type) {
    case ADD_URL:
      return url
    default:
      return state
  }
}

export default url
