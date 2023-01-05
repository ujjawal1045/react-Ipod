import react from 'react';
import logo from './logo.svg';
import './App.css';
import Buttons from './button.js';
import Screens from './screen.js';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Screens />
        <Buttons />
      </div>
    );
  }
}

export default App;
