//Styles
import "./Contact.css";
//Components
import ContactCard from "./ContactCard";
//Images
import ModernHome from "./images/london-homes.jpg";

const Contact = () => {
  return (
    <div className="container">
      <div className="contact-container row">
        <div className="col-lg-6">
          <div className="contact-text-container">
            <h3>There are many ways to</h3>
            <h2>Contact us</h2>
            <p>
              We're here to provide top-notch services, knowing that a great
              living environment can truly improve your life.
            </p>
          </div>
          <div className="contact-card-container">
            <div className="contact-upper-container">
              <ContactCard
                btn={"Call now"}
                name={"Call"}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-telephone-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                    />
                  </svg>
                }
              />
              <ContactCard
                name={"Chat"}
                btn={"Chat now"}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chat-dots-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  </svg>
                }
              />
            </div>
            <div className="contact-lower-container">
              <ContactCard
                name={"Video"}
                btn={"Call now"}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chat-dots-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  </svg>
                }
              />
              <ContactCard
                name={"Message"}
                btn={"Chat now"}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chat-square-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  </svg>
                }
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6 contact-right">
          <img
            className="contact-img"
            alt="Picture of a modern home"
            src={ModernHome}
          />
        </div>
      </div>
      <div className="get-started-container">
        <div className="get-started">
          <h2 className="get-started-header">
            Get started with Homyz
            <div className="get-started-header-circle"></div>
          </h2>
          <p className="get-started-p">
            Discover irresistible price quotes by subscribing to our exclusive
            offers today.
          </p>
          <div className="input-group mb-3 email-input">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              required
            />
            <button className="btn email-btn" type="button" id="button-addon2">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
