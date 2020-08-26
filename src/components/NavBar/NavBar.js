import React from 'react'
import './NavBar.css'
import house from '../../assets/house.png'
import portfolio from '../../assets/portfolio.png'
import contact from '../../assets/contact.png'
import resume from '../../assets/resume.png'



function NavBar(){
    return(
        <>
            <div className="navBar" >
                <ul>
                    <a href=""><li><img src={house}/>Home </li></a>
                    <a href=""><li><img src={portfolio}/>Portfolio </li></a>
                    <a href=""><li><img src={resume}/>Resume </li></a>
                    <a href=""><li><img src={contact}/>Contact </li></a>
                </ul>
            </div>
        </>
    )
}

export default NavBar;