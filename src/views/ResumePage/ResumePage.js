import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import PDF from '../../assets/actual_resume.pdf';
import './ResumePage.css'


function ResumePage(){
    return(
        <>
            <NavBar/>
            {/* <h1>Resume Page</h1> */}
                <embed
                    src={PDF + "#toolbar=0"}
                    type="application/pdf"  
                />

        </>
    )
}

export default ResumePage;