import React from 'react';
import logo from '../logo.svg';
import DemoButton from '../component/demo-button';
const Home = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
      <DemoButton />
    </header>
  </div>
);

export default Home;
