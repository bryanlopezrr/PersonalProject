import React from 'react'
import './NavBar.css'
import house from '../../assets/house.png'
import portfolio from '../../assets/portfolio.png'
import contact from '../../assets/contact.png'
import resume from '../../assets/resume.png'
import {Link, Router, BrowserRouter} from 'react-router-dom'


function NavBar(){
    return(
        <>
            <div className="navBar" >
                <ul>
                    <li>
                        <img src={house}/> 
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <img src={portfolio}/>
                        <Link to="/portfolio">Portfolio</Link> 
                    </li>
                    <li>
                        <img src={resume}/> 
                        <Link to="/resume">Resume</Link>
                    </li>
                    <li>
                        <img src={contact}/> 
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default NavBar;