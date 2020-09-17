
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const creds = require('./config.js');

var transport = {
    host: 'smtp.gmail.com', // Don’t forget to replace with the SMTP host of your provider
    port: 587,
    auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('\nServer is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `Name: ${name} \n Email: ${email} \n Message: ${message} `

  var mail = {
    from: name,
    to: creds.USER,  // Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form\n',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
	if (err) {
  	res.json({
    	status: 'fail'
  	})
	} else {
  	res.json({
   	status: 'success'
  	})

  	transporter.sendMail({
    	from: "<your email address>",
    	to: email,
    	subject: "Email submission was successful!",
      text: `Thank you for contacting me! I will get back to you as
      soon as possible\n\n\nForm details\nName: ${name}\n Email: ${email}\n Message: ${message}`
  	}, function(error, info){
    	if(error) {
      	console.log(error);
    	} else{
      	console.log('Message sent: ' + info.response);
    	}
  	});
	}
  })
})

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3002)