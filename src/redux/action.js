import { CHANGE_URL, JUST_SAME } from './Types'

export const changeStream = (text) => ({
  type: CHANGE_URL,
  payload: text,
})

export const samer = (text) => ({
  type: JUST_SAME,
  payload: text,
})
