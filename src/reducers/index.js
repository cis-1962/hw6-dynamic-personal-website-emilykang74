import { combineReducers } from 'redux'

import posts from './posts'
import introduction from './introduction'

export default combineReducers({
  posts,
  introduction,
})
