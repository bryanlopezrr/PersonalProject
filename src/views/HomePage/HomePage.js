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

            <h1>BRYAN LOPEZ</h1>
            <p>

                <ul className="descriptionAttr">
                    <li>Systems Engineer</li>
                    <li>Computer Science</li>
                    <li>Father</li>
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
            <Footer/>
        </div>
     
        </>
    )
}

export default HomePage;