import { combineReducers } from 'redux'
import { LoginReducer } from './LoginReducer'
import { urlReducer } from './urlReducer'

export const rootReducer = combineReducers({
  authorize: LoginReducer,
  url: urlReducer,
})
