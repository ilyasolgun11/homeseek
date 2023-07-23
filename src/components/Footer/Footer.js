//Styles
import "./Footer.css";
//Images
import FooterLogo from "../Navbar/images/logo-blue.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="inner-footer-container container">
        <div className="row">
          <div className="col-md-7 footer-left">
            <div className="logo-container">
              <img className="footer-logo" alt="logo" src={FooterLogo} />
              <div className="footer-logo-circle"></div>
              <p>
                Our vision is to make the best <br /> living destinations for
                all.
              </p>
            </div>
          </div>
          <div className="col-md-5 footer-right">
            <h2 className="footer-right-header">Information</h2>
            <h4 className="footer-right-location">
              42 Earlham St, London WC2H 9LA
            </h4>
            <div className="footer-nav-container">
              <h4>Property</h4>
              <h4>Services</h4>
              <h4>Contact</h4>
              <h4>About us</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
