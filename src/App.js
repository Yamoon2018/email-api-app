import React, { useState, useEffect} from 'react';
import './App.css';

function App(props) {
  const [sender_name, setSenderName] = useState("");
  const [sender_email, setSenderEmail] = useState("");
  const [receiver_name, setReceiverName] = useState("");
  const [receiver_email, setReceiverEmail] = useState("");
  const [email_subject, setEmailSubject] = useState("");
  const [email_body, setEmailBody] = useState("");
  const [email_status, setEmailStatus] = useState("");

  const handleSubmit=(e)=>{
     e.target.value

  }

  const handleChange=(e)=>{
    console.log(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
      <form onSubmit={handleSubmit} method="post">
          Sender's Name<input placeholder="Sender's name..." type="text" name="sender_name" /> 
          <p></p>
          Sender's Email<input placeholder="Sender's email..." type="text" name="sender_email"  />
          <p></p>
          Receiever's Name<input placeholder="Receiver's name..." type="text" name="receiver_name" /> 
          <p></p>
          Receiever's Email(s)<input placeholder="Receiver's Email.." type="text" name="receiver_email" />
          <p></p>
          Subject <input placeholder="Subject..." type="text" name="email_subject" /> 
          <p></p>
          Message          
          <textarea name="email_body" />
          <p></p>
          Email Status
          <select onChange={handleChange} name="email_status" value={email_status} >          
          <option value="all">Send one email to all receievers</option>
          <option value="each">Send one email to each receiever</option>          
        </select>
          <p></p>
          
          <button name="btn_sendEmail" value ="btn_sendEmail">Send Email</button>
          
          </form>
      </header>
    </div>
  );
}

export default App;
