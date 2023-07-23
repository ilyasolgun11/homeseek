import "./ContactCard.css";

const ContactCard = (props) => {
  return (
    <div className="contact-card">
      <div className="upper-half-container">
        <div className="upper-half-1">{props.icon}</div>
        <div className="upper-half-2-container">
          <h3>{props.name}</h3>
          <h4>021 123 145</h4>
        </div>
      </div>
      <div className="lower-half">
        <button className="lower-half-btn">{props.btn}</button>
      </div>
    </div>
  );
};

export default ContactCard;
