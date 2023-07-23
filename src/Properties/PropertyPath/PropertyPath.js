import React, { useState, useEffect } from "react";
import "./PropertyPath.css";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faLocationDot,
  faBed,
  faBath,
  faArrowsUpDownLeftRight,
  faSignsPost,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import PropertyAgent from "./PropertyAgent";
import Logo from "../../components/Navbar/images/logo-black.png";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Maps from "../../components/Maps/Maps";

const PropertyPath = () => {
  const googleMapsApiKey = "AIzaSyAcLAxPqBUsVx7W7AfNHpwcvgbwIKeLiw0";

  const propertyLocationLatLng = {
    lat: 40.7128,
    lng: -74.006,
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const img1 = params.get("img1");
  const img2 = params.get("img2");
  const img3 = params.get("img3");
  const img4 = params.get("img4");
  const type = params.get("type");
  const propertyLocation = params.get("location");
  const info = params.get("info");
  const beds = params.get("beds");
  const bathrooms = params.get("bathrooms");
  const squareft = params.get("squareft");
  const postCode = params.get("postCode");
  const security = params.get("security");
  const agentImg = params.get("agentImg");
  const agentName = params.get("agentName");
  const carouselId = `propertyCarousel-${Math.random()
    .toString(36)
    .substring(2)}`;

  return (
    <>
      <div className="container">
        {loading ? ( // If loading is true, show the loading image
          <div className="loading-screen">
            {/* Use the rotating circle here */}
            <div className="loading-circle"></div>
          </div>
        ) : (
          // If loading is false, show the actual content
          <div className="property-details-container row">
            <div className="col-lg-6 property-info-left">
              <div className="path-info-outer-container">
                <div className="path-info-container">
                  <h3 className="path-info">
                    {info}
                    <div className="path-info-circle"></div>
                  </h3>
                </div>
              </div>
              <div id={carouselId} className="carousel slide">
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target={`#${carouselId}`}
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label={`Slide 1`}
                  ></button>
                  <button
                    type="button"
                    data-bs-target={`#${carouselId}`}
                    data-bs-slide-to="1"
                    aria-label={`Slide 2`}
                  ></button>
                  <button
                    type="button"
                    data-bs-target={`#${carouselId}`}
                    data-bs-slide-to="2"
                    aria-label={`Slide 3`}
                  ></button>
                  <button
                    type="button"
                    data-bs-target={`#${carouselId}`}
                    data-bs-slide-to="3"
                    aria-label={`Slide 4`}
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={img1}
                      className="card-img path-card"
                      alt="house 1"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={img2}
                      className="card-img path-card"
                      alt="house 2"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={img3}
                      className="card-img path-card"
                      alt="house 3"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={img4}
                      className="card-img path-card"
                      alt="house 4"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target={`#${carouselId}`}
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target={`#${carouselId}`}
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className="card-details-container path-details-container">
                <div className="path-beds-container">
                  <h3 className="card-beds path-beds">{beds}</h3>
                  <FontAwesomeIcon
                    className="card-beds-icon"
                    icon={faBed}
                    style={{ color: "#FFF" }}
                  />
                </div>
                <div className="path-baths-container">
                  <h3 className="card-baths">{bathrooms}</h3>
                  <FontAwesomeIcon
                    className="card-baths-icon"
                    icon={faBath}
                    style={{ color: "#275bec" }}
                  />
                </div>
                <div className="path-squareft-container">
                  <h3 className="card-squareft path-squareft">{squareft}</h3>
                  <FontAwesomeIcon
                    className="card-squareft-icon"
                    icon={faArrowsUpDownLeftRight}
                    style={{ color: "#FFF" }}
                  />
                </div>
              </div>

              <div className="property-details">
                <div className="property-info">
                  <div className="path-info-upper-container">
                    <div className="card-type-container">
                      <FontAwesomeIcon
                        className="card-type-icon path-type-icon"
                        icon={faHouse}
                        style={{ color: "#275bec" }}
                      />
                      <h3 className="card-type path-type">{type}</h3>
                    </div>
                    <div className="card-type-container">
                      <FontAwesomeIcon
                        className="card-location-icon path-location-icon"
                        icon={faLocationDot}
                        style={{ color: "#275bec" }}
                      />
                      <h3 className="card-location path-location">
                        {propertyLocation}
                      </h3>
                    </div>
                  </div>
                  <div className="path-info-lower-container">
                    <div className="card-post-container">
                      <FontAwesomeIcon
                        className="card-post-icon path-post-icon"
                        icon={faSignsPost}
                        style={{ color: "#2a2a2a" }}
                      />
                      <h3 className="card-post path-post">{postCode}</h3>
                    </div>
                    <div className="card-garden-container">
                      <FontAwesomeIcon
                        className="card-camera-icon path-camera-icon"
                        icon={faCamera}
                        style={{ color: "#2a2a2a" }}
                      />
                      <h3 className="card-camera path-camera">{security}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <PropertyAgent agentImg={agentImg} agentName={agentName} />
            </div>
            <div className="col-lg-12 contact-container-top">
              <Contact />
            </div>
            <div className="col-lg-12 footer-top">
              <Footer />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PropertyPath;
