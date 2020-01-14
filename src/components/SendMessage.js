import React,{useState,useEffect} from 'react'
import messageServices from "../../src/services/Messages";



const SendMessage = () =>{

const [full_name, setFull_name] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const [messages, setMessages] = useState([]);

useEffect(() => {
    messageServices.getAll().then(response => {
      setMessages(response);
    });
  }, []);

  const addMessage = newMessage => {
    newMessage.id = (Math.random() * 10000).toFixed(0);
    messageServices.create(newMessage);
    setMessages(messages.concat(newMessage));
    alert(`Thank you ${newMessage.full_name} for message!`);
   /* setTimeout(() => {
      alert(null);
    }, 5000);*/
  };
const handleSubmit = e => {
    e.preventDefault();
    addMessage({
      full_name,
      email,
      message
    });
    
  };

return(<div className="container">
      
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="form-control"
            name="full_name"
            value={full_name}
            type="text"
            placeholder="your full name"
            onChange={e => setFull_name(e.target.value)}
          />
        </div>
        <div>
          <input
            className="form-control"
            name="email"
            value={email}
            type="email"
            placeholder="your email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            className="form-control"
            name="message"
            value={message}
            type="text"
            placeholder="your message to me"
            onChange={e => setMessage(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Send</button>
      </form>
    </div>)
}


export default SendMessage;