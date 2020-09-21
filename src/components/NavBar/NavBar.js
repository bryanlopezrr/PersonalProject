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
                    <li>  
                        <Link to="/home"><img className="eachIcon" src={house}/></Link>
                    </li>
                    <li> 
                        <Link to="/portfolio"><img className="eachIcon" src={portfolio}/></Link> 
                    </li>
                    <li> 
                        <Link to="/resume"><img className="eachIcon" src={resume}/> </Link>
                    </li>
                    <li>                    
                        <Link to="/contact"><img className="eachIcon" src={contact}/> </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default NavBar;