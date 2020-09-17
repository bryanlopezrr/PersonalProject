import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Switch} from 'react-router-dom'
import ContactPage from './views/ContactPage/ContactPage'
import ResumePage from './views/ResumePage/ResumePage'
import HomePage from './views/HomePage/HomePage'
import ErrorPage from './views/ErrorPage/ErrorPage'

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
   
      <BrowserRouter>

        <Switch>
          <Route exact path="/"  component={HomePage}></Route> {/** I hope to figure out how to route / to /home*/}
          <Route path="/home"  component={HomePage}></Route>  
          <Route path="/resume"  component={ResumePage}></Route>  
          
          <Route path='/portfolio' component={() => { 
              window.location.href = 'https://github.com/bryanlopezrr';}}/>

          {/* <Route path="/portfolio"  component={PortfolioPage}></Route>   */}
          <Route path="/contact"  component={ContactPage}></Route>  
          <Route component={ErrorPage}></Route>
        </Switch>
 
        {/* <ContactPage/>
        <ResumePage/>
        <HomePage/>
        <PortfolioPage/>
       */}
      
      </BrowserRouter>
    </>


  );
}

export default App;
