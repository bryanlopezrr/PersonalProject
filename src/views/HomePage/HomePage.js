import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import './HomePage.css'
import profilePicture from '../../assets/profilepic.png'; // gives image path

function HomePage(){
    return(
        <>
            <NavBar/>

            {/* <div>
                <h1>Home Page</h1>
            </div>  */}
        <div className="leftSide">

            <h1>MAGDALENA RUIZ</h1>
            <p>

                <ul className="descriptionAttr">
                    <li>Project Manager</li>
                    <li>Avid Ski Mountain Climber</li>
                    <li>Healthcare Industry</li>
                    <li>Soccer Fan</li>
                </ul>
            Left side
            What 
            Happens if I keep adding more
            text
            to this
            website
            will it
            continuet 
            to 
            Left side
            What 
            Happens if I keep adding more
            text
            to this
            website
            will it
            continuet 
            to 
            Left side
            What 
            Happens if I keep adding more
            text
            to this
            website
            will it
            continuet 
            to 
     
            </p>
        </div>

        <div className="rightSide">
        
        <div className="pictureDiv"> 
                <img className="featurePicture" src={profilePicture} alt="This is the profile picture that will display"/> 
            </div>

            <h1>CREATIVE - INNOVATIVE - DETERMINED</h1>

            <p>
            Right side
            What 
            Happens if I keep adding more
            text
            to this
            website
            Happens if I keep adding more
            text
            to this
            Happens if I keep adding more

            to 
            Left side
            What 
            Happens if I keep adding more
            text
            to this
            website
            will it
            continuet 
            to 
            Left side
            What 
            Happens if I keep adding more
            text
            to this
            website
            will it
            continuet 

            </p>

        </div>

        </>
    )
}

export default HomePage;