import { CHANGE_URL } from '../Types'

const initialState = {
  url: 'https://www.twitch.tv/dota2mc_ru',
}

const urlReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_URL:
      return { ...state, url: action.payload }
    default:
      return state
  }
}

export default urlReducer
