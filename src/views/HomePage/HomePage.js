import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import './HomePage.css'
import profilePicture from '../../assets/pro_pic.jpg'; // gives image path
import Footer from '../../components/Footer/Footer'
import FontAwesome from 'react-fontawesome';
import {Link } from 'react-router-dom'

function HomePage(){
    return(
        <>
            <NavBar/>

            {/* <div>
                <h1>Home Page</h1>
            </div>  */}
        <div className="leftSide">

            <h1 className="titleSection">BRYAN LOPEZ.</h1>
            
            <ul className="descriptionAttr">
                    <li>Systems Engineer</li>
                    <li>Computer Science</li>
                    <li>Soccer Fan</li>
        
                </ul>
            
            <p className="bodySection">
            Hello there! <b>Welcome</b> to my personal portfolio page.
            Feel free to hover over parts of the page to get tooltips and instructions
            on what to do.
     
            </p>



            <div>

            <Link to="/linkedin">
                <FontAwesome name="linkedin" size="2x" className="socialIcon"/>
            </Link> 


            <Link to="/portfolio">
                <FontAwesome name="github" size="2x" className="socialIcon"/>
            </Link>

            </div>


        </div>

        <div className="rightSide">
        
        <div className="pictureDiv"> 
                <img alt="myPicture" className="featurePicture" src={profilePicture}/> 
            </div>

            <div>
                <h1 className="titleSection">COOPERATIVE.</h1>
                 <h1 className="titleSection">EAGER.</h1> 
                 <h1 className="titleSection">DETERMINED.</h1>
            </div>
            

            <p className="bodySection">
            I'm a recent Computer Science graduate, based in Tampa, Florida. 
            I've been exploring web development and have made this application to 
            showcase some of my skills. 

            <br/>
            <br/>            
            I'm also looking to continue to grow my skills and learn from industry leaders.
            Feel free to browse around and contact me if you would like to connect for 
            projects among other things. 

            </p>
            <Footer/>
        </div>
     
        </>
    )
}

export default HomePage;