import '../CSS/App';
import Header from '../components/Header';
import Navigation from '../components/nav';
import Chat from '../components/chat';
import ContainerContent from '../components/ContainerContent';
import React from 'react';

function App() {
  return (
    <div className="App_container">
      <Header />
      <Navigation />
      <ContainerContent />
      <Chat />
    </div>
  );
}

export default App;
