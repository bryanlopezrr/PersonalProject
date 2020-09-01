// STANDARD REACT IMPORT HERE
import React, { useState } from 'react'

// CSS IMPORTS HERE
import './App.css'

// IMPORTS FROM INSTALLED LIBS HERE
import { BrowserRouter, Route, Switch} from 'react-router-dom'

// PAGES IMPORTED HERE FOR ROUTING
import ContactPage    from './views/ContactPage/ContactPage'
import ResumePage     from './views/ResumePage/ResumePage'
import HomePage       from './views/HomePage/HomePage'
import PortfolioPage  from './views/PortfolioPage/PortfolioPage'
import ErrorPage      from './views/ErrorPage/ErrorPage'

// All other Components Imported Here
import { Navigation, BryansNav } from './components/NavBar/NavBar'

const App = () => {

  const [isBryansNav, changeNav] = useState(false)
  const toggleNav = () => changeNav(!isBryansNav)

  const NavigationPointer = isBryansNav ? BryansNav : Navigation

  return <BrowserRouter>
    <Switch>
      {/* THE FOLLOWING WILL ALL SHARE THE SAME NAVIGATION COMPONENT BECAUSE THEY ARE WRAPPED UNDER IT... IN NAVIGATION IT IS REF AS props.children */}
      <NavigationPointer>
        
        <Route exact path="/home">
          <HomePage toggleNav={toggleNav} isBryansNav={isBryansNav}/>
        </Route>

        <Route exact path="/resume"  component={ResumePage}/>
        <Route exact path="/portfolio"  component={PortfolioPage}/>
        <Route exact path="/contact"  component={ContactPage}/>
      </NavigationPointer>
      <Route component={ErrorPage}></Route>
    </Switch>
  </BrowserRouter>
}
export default App