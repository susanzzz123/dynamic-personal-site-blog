import { combineReducers } from 'redux'

import url from './url'
import description from './description'
import postList from './postList'

export default combineReducers({
  url,
  description,
  postList
})
