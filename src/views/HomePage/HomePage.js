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

            <h1>Your name goes here </h1>
            <p>
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
            
            <h1>Your key words go here</h1>

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

            </p>
            <div className="pictureDiv"> 
                <img className="featurePicture" src={profilePicture} alt="This is the profile picture that will display"/> 
            </div>
        </div>

        </>
    )
}

export default HomePage;