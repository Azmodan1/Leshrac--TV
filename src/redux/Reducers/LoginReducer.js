import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
  apiKey: 'AIzaSyAxbfdKimDMnitUCTTdlMCselGcN_8mG0s',
  authDomain: 'twitch-chat-f4778.firebaseapp.com',
  projectId: 'twitch-chat-f4778',
  storageBucket: 'twitch-chat-f4778.appspot.com',
  messagingSenderId: '876791625873',
  appId: '1:876791625873:web:868795a456e497c7f0a730',
  measurementId: 'G-J2BR7619P8',
})

const auth = firebase.auth()
const firestore = firebase.firestore()

export const initialState = {
  FRB: {
    firebase,
    auth,
    firestore,
  },
}

export const LoginReducer = (state = initialState, action) => state
