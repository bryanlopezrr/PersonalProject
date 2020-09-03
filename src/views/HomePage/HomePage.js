import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import './HomePage.css'


function HomePage(){
    return(
        <>
            <NavBar/>

            {/* <div>
                <h1>Home Page</h1>
            </div>  */}
        <body>
        <div className="leftSide">
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
        </div>
        </body>

        </>
    )
}

export default HomePage;