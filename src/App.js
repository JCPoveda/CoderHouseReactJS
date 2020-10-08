import React from 'react';
import './App.css';
import Img from './components/Img';
import Title from './components/Title';
import ReactLink from './components/ReactLink';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Img />
        <Title />
        <ReactLink />
      </header>
    </div>
  );
}

export default App;
