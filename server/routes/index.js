const express = require('express');
const router = express.Router();
//const email_template = require('../models/email-template');
const send_email_smtp = require('./send_email');

router.post('/send_gmail', (req, res)=>{
    console.log(req.body);
    send_email_smtp(req);
    //const new_email_template = new email_template({
        // var sender_name= JSON.stringify(req.body.sender_name);
        // var sender_email= JSON.stringify(req.body.sender_email);
        // var receiver_name= JSON.stringify(req.body.receiver_name);
        // var receiver_email= JSON.stringify(req.body.receiver_email);
        // var email_subject= JSON.stringify(req.body.email_subject);
        // var email_body = JSON.stringify(req.body.email_body),
        // var email_attachment = JSON.stringify(req.body.email_attachment) || null


    //})
    // new_email_template.save()
    // .then(data => {
    //     res.json(data);
    // })
    // .catch(error => {
    //     res.json(error);
    // })
});

module.exports=router;