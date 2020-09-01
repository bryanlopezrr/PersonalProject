import React, { useState } from 'react'
import './HomePage.css'
import { Radio } from './../../components/Radio'

// import { Navigation } from './../../components/NavBar/NavBar'
// THIS IS ONE OPTION, BUT THERE MAY BE A BETTER WAY....
/*
const HomePage = () => <Navigation>
    <h1>Home Page</h1>
</Navigation>
*/

const HomePage = props => {

    const buttonClicked = () => {
        props.toggleNav()
    }



    return <div className="flexed flexboxWrap">
        <div className="leftSide flexed-item">

            <div className="padded">
                <h1>LEFT SIDE TITLE</h1>
                <p>
                    Some thing goes here that explains whats going down....
                </p>
                <p>
                    Reliable <Radio isOn={true} trueText="No" falseText="Yes"/>
                </p>
                <p>
                    Bryans Navigation <Radio isOn={props.isBryansNav} trueText="On" falseText="Off" buttonClicked={buttonClicked}/>
                </p>
            </div>

        </div>
        <div className="rightSide flexed-item-2">
            Right Side
        </div>
    </div>

}

export default HomePage