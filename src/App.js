import React, { Component} from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      sender_name:'',
      sender_email:'',
      receiver_name:'',
      receiver_email:'',
      email_subject:'',
      email_body:'',
      email_status:''
    }
  }
  
  handleSubmit=(e)=>{
     console.log("value=="+e.target.value); 
     console.log("name=="+e.target.name); 
     console.log(this.state);
     //break;
     axios.post('http://localhost:4000/app/send_gmail', this.state);


  }

  handle_sender_name=(e)=>{
    console.log(this.state);
    this.setState({
      sender_name: e.target.value
    })
  }

  handle_sender_email=(e)=>{
    this.setState({
      sender_email: e.target.value
    })
  }

  handle_receiver_name=(e)=>{
    this.setState({
      receiver_name: e.target.value
    })
  }

  handle_receiver_email=(e)=>{
    this.setState({
      receiver_email: e.target.value
    })
  }

  handle_email_subject=(e)=>{
    this.setState({
      email_subject: e.target.value
    })
  }

  handle_email_body=(e)=>{
    this.setState({
      email_body: e.target.value
    })
  }

  handle_email_status=(e)=>{
    this.setState({
      email_status: e.target.value
    })
  }



  render(){

      return (
        <div className="App">
          <header className="App-header">
          <form onSubmit={this.handleSubmit} >
              Sender's Name<input onChange={this.handle_sender_name} placeholder="Sender's name..." type="text" name="sender_name" /> 
              <p></p>
              Sender's Email<input onChange={this.handle_sender_email} placeholder="Sender's email..." type="text" name="sender_email"  />
              <p></p>
              Receiever's Name<input onChange={this.handle_receiver_name} placeholder="Receiver's name..." type="text" name="receiver_name" /> 
              <p></p>
              Receiever's Email(s)<input onChange={this.handle_receiver_email} placeholder="Receiver's Email.." type="text" name="receiver_email" />
              <p></p>
              Subject <input onChange={this.handle_email_subject} placeholder="Subject..." type="text" name="email_subject" /> 
              <p></p>
              Message          
              <textarea onChange={this.handle_email_body} name="email_body" />
              <p></p>
              Email Status
              <select onChange={this.handle_email_status} name="email_status"  >          
              <option value="all">Send one email to all receievers</option>
              <option value="each">Send one email to each receiever</option>          
            </select>
              <p></p>
              
              <button name="btn_sendEmail" value ="btn_sendEmail">Send Email</button>
              
              </form>
          </header>
        </div>
      )
  };
}

export default App;
