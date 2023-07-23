import React, { useState } from "react";
import "./PropertyPath.css";

const PropertyAgent = (props) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  return (
    <div>
      <div className="path-agent-container">
        <div className="path-agent-upper-container">
          <img
            src={props.agentImg}
            alt="agent image"
            className="path-agent-img"
          />
          <div className="agent-info-container">
            <h3 className="path-agent-name">{props.agentName}</h3>
            <h4 className="path-agent-h4">Property Agent</h4>
          </div>
        </div>
        <form className="agent-contant-container" onSubmit={handleSubmit}>
          {showSuccessMessage && (
            <div className="alert alert-success" role="alert">
              Your information has been sent!
            </div>
          )}
          <div className="input-group input-group-md">
            <input
              type="text"
              placeholder="Name"
              className="form-control input-style"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-md"
              required
            />
          </div>
          <div className="input-group input-group-md">
            <input
              type="text"
              placeholder="Surname"
              className="form-control input-style"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-md"
              required
            />
          </div>
          <div className="input-group input-group-md">
            <input
              type="email"
              placeholder="Email"
              className="form-control input-style"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-md"
              required
            />
          </div>
          <div className="input-group">
            <textarea
              placeholder="Message"
              className="form-control text-area"
              aria-label="With textarea"
            ></textarea>
          </div>
          <div>
            <button type="submit" className="agent-contact-send">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PropertyAgent;
