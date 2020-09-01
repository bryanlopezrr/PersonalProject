import React from 'react'

// CSS import for navigation
import './NavBar.css'

// IMAGES
import house        from './../../assets/house.png'
import portfolio    from './../../assets/portfolio.png'
import contact      from './../../assets/contact.png'
import resume       from './../../assets/resume.png'

// IMPORTING REF TO ANY OTHER LIBS HERE...
import { NavLink } from 'react-router-dom'


export const Navigation = props => {

    const activeClassName="activePage"

    return <div id="page">
        <div className="navBar" >
            <ul>
                <li>
                    <NavLink activeClassName={activeClassName} to="/home">
                        <img src={house}/> 
                        <span>Home</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink activeClassName={activeClassName} to="/portfolio">
                        <img src={portfolio}/> 
                        <span>Portfolio</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink activeClassName={activeClassName} to="/resume">
                        <img src={resume}/> 
                        <span>Resume</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink activeClassName={activeClassName} to="/contact">
                        <img src={contact}/> 
                        <span>Contact</span>
                    </NavLink>
                </li>

            </ul>
        </div>

        {/* THIS IS A SPECIAL PROP KEYWORD, ALLOWS US TO USE THIS COMPONENT AS A WRAPPER see https://reactjs.org/docs/composition-vs-inheritance.html */}
        {props.children}

    </div>
}

export const BryansNav = props => {

    const createNavigationItem = ({to, imageSrc, title}) => {
        return <li>
            <NavLink activeClassName="activePage" to={to}>
                <div className="navBar2_circle">
                    <img src={imageSrc}/> 
                </div>
                <span>{title}</span>
            </NavLink>
        </li>
    }


    return <div id="page">
        <div className="navBar2" >
            <ul>
                {createNavigationItem({to: '/home', imageSrc: house, title: 'Home'})}
                {createNavigationItem({to: '/portfolio', imageSrc: portfolio, title: 'Portfolio'})}
                {createNavigationItem({to: '/resume', imageSrc: resume, title: 'Resume'})}
                {createNavigationItem({to: '/contact', imageSrc: contact, title: 'Contact'})}
            </ul>
        </div>

        {/* THIS IS A SPECIAL PROP KEYWORD, ALLOWS US TO USE THIS COMPONENT AS A WRAPPER see https://reactjs.org/docs/composition-vs-inheritance.html */}
        {props.children}

    </div>
}



// export default NavBar