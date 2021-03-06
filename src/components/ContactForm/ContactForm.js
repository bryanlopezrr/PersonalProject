import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


// function ContactForm(){

//     return (
//             <>
//             {/* I need to add the POST part to be able to send the request to backend and email  
//             onSubmit={this.handleSubmit.bind(this)} method="POST"
//             */}
//                 <form id="contact-form">
//                 <div className="form-group">
//                     <label htmlFor="name">Name</label>
//                     <input type="text" className="form-control" />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="exampleInputEmail1">Email address</label>
//                     <input type="email" className="form-control" aria-describedby="emailHelp" />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="message">Message</label>
//                     <textarea className="form-control" rows="5"></textarea>
//                 </div>
//                 <button type="submit" className="btn btn-primary">Submit</button>
//                 </form>
//             </>
//     )
// }


// export default ContactForm;

class ContactForm extends React.Component {

        constructor(props) {
            super(props);
                this.state = {
                name: '',
                email: '',
                message: ''
                }
        }

        resetForm(){
    
            this.setState({name: '', email: '', message: ''})
         }

        render(){
        return(
        <div className="ContactForm">
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div className="form-group">
                <label htmlFor="name">Your Name:</label>
                <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address:</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        );
    }

onNameChange(event) {
	this.setState({name: event.target.value})
  }

onEmailChange(event) {
	this.setState({email: event.target.value})
  }

onMessageChange(event) {
	this.setState({message: event.target.value})
  }

handleSubmit(e) { 
    //add logic to prevent malicious entries - figure out how to do a captcha eventually????

    console.log(this.state);
    e.preventDefault();

    fetch('http://localhost:3002/send',{
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(
    	(response) => (response.json())
       ).then((response)=>{
      if (response.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
      }else if(response.status === 'fail'){
        alert("Message failed to send.")
      }
    })
}

}
export default ContactForm;