import React from "react";
import "./Card.css";
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
import { Link } from "react-router-dom";

const Card = (props) => {
  const carouselId = `carouselExampleIndicators-${props.index}`;

  return (
    <div className="card-container">
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
            <img src={props.img1} className="card-img" alt="house 1" />
          </div>
          <div className="carousel-item">
            <img src={props.img2} className="card-img" alt="house 2" />
          </div>
          <div className="carousel-item">
            <img src={props.img3} className="card-img" alt="house 3" />
          </div>
          <div className="carousel-item">
            <img src={props.img4} className="card-img" alt="house 4" />
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
      <div className="card-info__container">
        <h3 className="card-info">{props.info}</h3>
        <div className="card-upper-container">
          <div className="card-type-container">
            <FontAwesomeIcon
              className="card-type-icon"
              icon={faHouse}
              style={{ color: "#275bec" }}
            />
            <h3 className="card-type">{props.type}</h3>
          </div>
          <div className="card-type-container">
            <FontAwesomeIcon
              className="card-location-icon"
              icon={faLocationDot}
              style={{ color: "#275bec" }}
            />
            <h3 className="card-location">{props.location}</h3>
          </div>
        </div>
        <div className="card-upper-container">
          <div className="card-post-container">
            <FontAwesomeIcon
              className="card-post-icon"
              icon={faSignsPost}
              style={{ color: "#2a2a2a" }}
            />
            <h3 className="card-post">{props.postCode}</h3>
          </div>
          <div className="card-garden-container">
            <FontAwesomeIcon
              className="card-camera-icon"
              icon={faCamera}
              style={{ color: "#2a2a2a" }}
            />
            <h3 className="card-camera">{props.security}</h3>
          </div>
        </div>
        <div className="card-price-container">
          <h3 className="card-price">{`£${props.price}`}</h3>
        </div>
        <div className="card-details-container">
          <div className="card-beds-container">
            <h3 className="card-beds">{props.beds}</h3>
            <FontAwesomeIcon
              className="card-beds-icon"
              icon={faBed}
              style={{ color: "#275bec" }}
            />
          </div>
          <div className="card-baths-container">
            <h3 className="card-baths">{props.bathrooms}</h3>
            <FontAwesomeIcon
              className="card-baths-icon"
              icon={faBath}
              style={{ color: "#275bec" }}
            />
          </div>
          <div className="card-squareft-container">
            <h3 className="card-squareft">{props.squareft}</h3>
            <FontAwesomeIcon
              className="card-squareft-icon"
              icon={faArrowsUpDownLeftRight}
              style={{ color: "#275bec" }}
            />
          </div>
        </div>
        <div className="card-learn-more-container">
          <Link
            to={{
              pathname: "/property-path",
              search: `?img1=${encodeURIComponent(
                props.img1
              )}&img2=${encodeURIComponent(
                props.img2
              )}&img3=${encodeURIComponent(
                props.img3
              )}&img4=${encodeURIComponent(
                props.img4
              )}&type=${encodeURIComponent(
                props.type
              )}&location=${encodeURIComponent(
                props.location
              )}&info=${encodeURIComponent(
                props.info
              )}&beds=${encodeURIComponent(
                props.beds
              )}&bathrooms=${encodeURIComponent(
                props.bathrooms
              )}&squareft=${encodeURIComponent(
                props.squareft
              )}&price=${encodeURIComponent(
                props.price
              )}&postCode=${encodeURIComponent(
                props.postCode
              )}&security=${encodeURIComponent(
                props.security
              )}&agentImg=${encodeURIComponent(
                props.agentImg
              )}&agentName=${encodeURIComponent(props.agentName)}`,
            }}
            className="learn-more-btn"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
