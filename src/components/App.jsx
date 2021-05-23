import '../CSS/App.css'
import React from 'react'
import Header from './Header'
import Navigation from './Nav'
import Chat from './Chat'
import ContainerContent from './ContainerContent'

const App = () => (
  <div className='App_container'>
    <Header />
    <Navigation />
    <ContainerContent />
    <Chat />
  </div>
)

export default App
