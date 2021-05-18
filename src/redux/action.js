import { CHANGE_URL } from './Types'

export const changeStream = (text) => ({
  type: CHANGE_URL,
  payload: text,
})
