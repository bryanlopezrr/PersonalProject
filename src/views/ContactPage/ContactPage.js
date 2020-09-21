import './ContactPage.css'
import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../components/Footer/Footer';


function ContactPage(){
    return(
        <>
            <NavBar/>

            <h1 className="contactTitle">CONTACT ME: </h1>

            <div className="fullForm">
                
                <ContactForm/>
            </div>
            {/* <h1>Contact Page</h1>             */}

            <Footer/>
        </>
    )
}

export default ContactPage;