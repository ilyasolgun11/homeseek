import React from "react";
import "./Favourites.css";
import Card from "./Card/Card";

const Favourites = ({ favorites, toggleFavorite }) => {
  return (
    <div>
      <h2>Your Favorites</h2>
      <div className="favorites-container">
        {favorites.map((property, index) => (
          <div className="col-md-4" key={index}>
            <Card
              img1={property.img1}
              img2={property.img2}
              img3={property.img3}
              location={property.location}
              reviewRate={property.reviewRate}
              reviews={property.reviews}
              Host={property.Host}
              Wifi={property.Wifi}
              Views={property.Views}
              Pets={property.Pets}
              toggleFavorite={() => toggleFavorite(property)}
              isFavorite={favorites.includes(property)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
