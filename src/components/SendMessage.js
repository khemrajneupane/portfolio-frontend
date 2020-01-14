import React, { useState, useEffect } from "react";
import messageServices from "../../src/services/Messages";

const SendMessage = ({ setNotification }) => {
  const [full_name, setFull_name] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  //const [notification, setNotification] = useState("");

  useEffect(() => {
    messageServices.getAll().then(response => {
      setMessages(response);
    });
  }, []);

  const addMessage = newMessage => {
    newMessage.id = (Math.random() * 10000).toFixed(0);
    messageServices.create(newMessage);
    setMessages(messages.concat(newMessage));
    setNotification(`Thank you ${newMessage.full_name} for message!`);
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };
  const handleSubmit = e => {
    e.preventDefault();
    addMessage({
      full_name,
      email,
      message
    });
  };

  return (
    <section className="mb-3">
      <div className="page-footer font-small stylish-color-dark pt-4"></div>
      <div className="row">
        <div className="col-md-6 mb-md-0 mb-5">
          <form id="contact-form" name="contact-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    className="form-control"
                    name="full_name"
                    value={full_name}
                    type="text"
                    placeholder="full name"
                    onChange={e => setFull_name(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    className="form-control"
                    name="email"
                    value={email}
                    type="email"
                    placeholder="your email"
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="md-form">
                  <textarea
                    className="form-control md-textarea"
                    name="message"
                    value={message}
                    type="text"
                    placeholder="your message to me"
                    onChange={e => setMessage(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="text-center text-md-left">
              <button className="btn btn-primary">Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default SendMessage;
