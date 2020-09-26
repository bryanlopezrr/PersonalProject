import './ContactPage.css'
import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../components/Footer/Footer';


function ContactPage(){
    return(
        <>
            <NavBar/>

            <h1 className="contactTitle">LET'S GET IN TOUCH: </h1>

            <div className="fullForm">
                <div className="instructionsForm">
                Need anything built, want to work together or simply want to have a chat?
                Drop me an e-mail at lopezbryanrr@gmail.com or simply fill out the form below and I will get
                back to you soon!
                </div>
                <ContactForm/>
            </div>
            {/* <h1>Contact Page</h1>             */}

            <Footer/>
        </>
    )
}

export default ContactPage;