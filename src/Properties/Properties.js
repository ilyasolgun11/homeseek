import "./Properties.css";
import { useState, useEffect } from "react";
import Card from "./Card/Card";

import {
  NorthLondon,
  SouthLondon,
  EastLondon,
  WestLondon,
} from "./PropertiesInfo";

const allProperties = [
  ...NorthLondon,
  ...SouthLondon,
  ...EastLondon,
  ...WestLondon,
];

const Properties = () => {
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedPropertyType, setSelectedPropertyType] = useState("any");
  const [mappedArray, setMappedArray] = useState(allProperties);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectedArea = (e) => {
    setSelectedArea(e.target.value);
  };

  const handlePropertyType = (e) => {
    setSelectedPropertyType(e.target.value);
  };

  const handleSearch = () => {
    setIsLoading(true);

    // Simulate the loading delay (1 second)
    setTimeout(() => {
      let filteredProperties;
      if (selectedArea === "north") {
        filteredProperties = NorthLondon;
      } else if (selectedArea === "south") {
        filteredProperties = SouthLondon;
      } else if (selectedArea === "east") {
        filteredProperties = EastLondon;
      } else if (selectedArea === "west") {
        filteredProperties = WestLondon;
      } else {
        filteredProperties = allProperties;
      }

      if (selectedPropertyType !== "any") {
        filteredProperties = filteredProperties.filter(
          (property) => property.type === selectedPropertyType
        );
      }

      setMappedArray(filteredProperties);
      setIsLoading(false);
    }, 1000); // 1 second delay
  };

  useEffect(() => {
    handleSearch();
  }, []); // Automatically search on component mount

  return (
    <div className="properties-main__container">
      <div className="properties-header-container">
        <h2 className="properties-header">
          Browse our Estates
          <div className="properties-header-circle"></div>
        </h2>
        <p className="properties-p">
          Browse our Estates for a curated selection of exquisite properties
          awaiting your discovery.
        </p>
      </div>
      <div className="filter__outer-container">
        <div className="filter__container row container">
          <div className="filter-location__container col-lg-4">
            <div className="select-form__container">
              <div className="select-form__icon-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
              </div>
              <select
                className="select-form"
                aria-label=".form-select-lg example"
                onChange={handleSelectedArea}
              >
                <option value="any">Area (any)</option>
                <option value="north">North London</option>
                <option value="south">South London</option>
                <option value="west">West London</option>
                <option value="east">East London</option>
              </select>
            </div>
          </div>
          <div className="filter-property__container col-lg-4">
            <div className="select-form__container">
              <div className="select-form__icon-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-house"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                </svg>
              </div>
              <select
                className="select-form"
                aria-label="Default select example"
                onChange={handlePropertyType}
              >
                <option value="any">Property type (any)</option>
                <option value="Detached">Detached</option>
                <option value="Apartment">Apartment</option>
                <option value="Terrace">Terrace</option>
              </select>
            </div>
          </div>

          <div className="filter-price__container col-lg-4">
            <button className="filter__btn" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="properties-results__container container">
        {isLoading ? (
          <div className="loading-animation">
            <div className="circle"></div>
          </div>
        ) : mappedArray.length > 0 ? (
          <div className="row properties__results-style">
            {mappedArray.map((property, index) => (
              <div key={index} className="col-lg-6">
                <Card
                  index={index}
                  img1={property.img1}
                  img2={property.img2}
                  img3={property.img3}
                  img4={property.img4}
                  type={property.type}
                  location={property.location}
                  info={property.info}
                  beds={property.beds}
                  bathrooms={property.bathrooms}
                  squareft={property.squareft}
                  price={property.price}
                  postCode={property.postCode}
                  security={property.security}
                  agentImg={property.agentImg}
                  agentName={property.agentName}
                  Latitude={property.Latitude}
                  Longitude={property.Longitude}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="no-result-container">
            <h4>No results</h4>
            <p>change your search options to see results.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;
