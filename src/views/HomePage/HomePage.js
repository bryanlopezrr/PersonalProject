import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import './HomePage.css'
import profilePicture from '../../assets/pro_pic.jpg'; // gives image path
import Footer from '../../components/Footer/Footer'

function HomePage(){
    return(
        <>
            <NavBar/>

            {/* <div>
                <h1>Home Page</h1>
            </div>  */}
        <div className="leftSide">

            <h1>BRYAN LOPEZ.</h1>
            
            <ul className="descriptionAttr">
                    <li>Systems Engineer</li>
                    <li>Computer Science</li>
                    <li>Father</li>
                    <li>Soccer Fan</li>
        
                </ul>
            
            <p className="bodySection">
            Hello there! Welcome to my personal portfolio page.
            Feel free to hover over parts of the page to get tooltips and instructions
            on what to do.
     
            </p>
        </div>

        <div className="rightSide">
        
        <div className="pictureDiv"> 
                <img className="featurePicture" src={profilePicture} alt="This is the profile picture that will display"/> 
            </div>

            <div>
                <h1>COOPERATIVE.</h1>
                 <h1>EAGER.</h1> 
                 <h1>DETERMINED.</h1>
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