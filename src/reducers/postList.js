import { ADD_POST, DELETE_POST, EDIT_POST } from '../actions'

const defaultState = []

const postList = (state = defaultState, action) => {
  const { type, id, title, url, description } = action

  switch (type) {
    case ADD_POST:
      return [...state, { id, title, url, description }]
    case DELETE_POST:
      return state.filter(post => post.id !== id)
    case EDIT_POST:
      return state.map(post => {
        if (post.id === id) {
          return { ...post, title, url, description }
        } else {
          return post
        }
      })
    default:
      return state
  }
}

export default postList
