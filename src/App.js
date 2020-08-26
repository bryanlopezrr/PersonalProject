import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Router, Route } from 'react-router';
import ContactPage from './views/ContactPage/ContactPage';
import ResumePage from './views/ResumePage/ResumePage'
import HomePage from './views/HomePage/HomePage';
import PortfolioPage from './views/PortfolioPage/PortfolioPage';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>


    <>
      <ContactPage/>
      <ResumePage/>
      <HomePage/>
      <PortfolioPage/>
    </>


  );
}

export default App;
