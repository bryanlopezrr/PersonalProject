import React, { useState } from 'react'


export const Radio = (props) => {

    const [isOn, changeisOn] = useState(props.isOn)
    const toggleButton = () => {
        changeisOn(!isOn)
        if(props && typeof props.buttonClicked === 'function') props.buttonClicked()
    }

    const RadioState = isOn ?  "on" : "off"
    const className = `button flexboxWrap-inline relative ${RadioState}`

    return <div className={className}>
    <div className="absolute ratio_label flexboxWrap">
        <span>{props.trueText}</span>
        <span>{props.falseText}</span>
    </div>
    <div className="toggle"/>
    <div className="ratio relative pointerCursor" onClick={toggleButton}/>
</div>
}