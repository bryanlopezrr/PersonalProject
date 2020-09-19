import React from 'react'
import './NavBar.css'
import './Flex.css'
import house from '../../assets/house.png'
import portfolio from '../../assets/portfolio.png'
import contact from '../../assets/contact.png'
import resume from '../../assets/resume.png'
import {Link, Router, BrowserRouter} from 'react-router-dom'


function NavBar(){
    return(
        <>
            <div className="navBar flex-wrap center" >
                <ul >
                    <li className="eachIcon">  
                        <Link to="/home"><img src={house}/></Link>
                    </li>
                    <li className="eachIcon"> 
                        <Link to="/portfolio"><img src={portfolio}/></Link> 
                    </li>
                    <li className="eachIcon"> 
                        <Link to="/resume"><img src={resume}/> </Link>
                    </li>
                    <li className="eachIcon">                    
                        <Link to="/contact"><img src={contact}/> </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default NavBar;