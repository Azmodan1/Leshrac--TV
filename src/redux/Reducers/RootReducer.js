import { combineReducers } from 'redux'
import { LoginReducer } from './LoginReducer'
import urlReducer from './urlReducer'

const rootReducer = combineReducers({
  authorize: LoginReducer,
  url: urlReducer,
})

export default rootReducer
