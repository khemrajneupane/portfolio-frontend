import React, { useState, useEffect } from "react";
import messageServices from "../../services/Messages";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SendMessage = () => {
  const [full_name, setFull_name] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessage] = useState("");
  const [totalMessages, setTotalMessages] = useState([]);

  useEffect(() => {
    messageServices.getAll().then(response => {
      setTotalMessages(response);
    });
  }, [totalMessages]);

  const addMessage = newMessage => {
    messageServices.create(newMessage);
    setTotalMessages(totalMessages.concat(newMessage));
    setFull_name("");
    setEmail("");
    setMessage("");
    toast.success(
      `Hi- ${full_name}! Thanks for your message! I will reply to you asap!`,
      {
        position: toast.POSITION.TOP_LEFT
      }
    );
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log("message sent");
    addMessage({ full_name, email, messages });
  };

  return (
    <section className="mb-4">
      <div className="page-footer font-small stylish-color-dark pt-4"></div>
      <div className="row">
        <div className="col-md-12 mb-md-0 mb-5">
          <form id="contact-form" name="contact-form" onSubmit={handleSubmit}>
            <fieldset>
              <legend>Please Send Message</legend>
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
                      name="messages"
                      value={messages}
                      type="text"
                      placeholder="your message to me"
                      onChange={e => setMessage(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <button className="btn btn-primary">Send</button>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
};
export default SendMessage;
