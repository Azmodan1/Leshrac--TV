import '../CSS/App.css'
import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'

import Header from './Header'
import Navigation from './Nav'
import Chat from './chat'
import ContainerContent from './ContainerContent'
import { AppContainer } from './StyledComponents'
import Authentication from '../Login/Authentication'

const App = () => (
  <BrowserRouter>
    <AppContainer>
      <Route path='/login'>
        <Authentication />
      </Route>
      <Route path='/'>
        <Header />
        <Navigation />
        <ContainerContent />
        <Chat />
      </Route>
    </AppContainer>
  </BrowserRouter>
)

export default App
