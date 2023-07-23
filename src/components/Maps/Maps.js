import "./Maps.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapStyles = {
  margin: "0px auto",
  width: "100%",
  height: "400px",
  borderRadius: "13px",
  boxShadow: "10px 10px 20px 2px rgba(30, 30, 30, 0.2)",
};

const Maps = () => {
  const googleMapsApiKey = "AIzaSyAcLAxPqBUsVx7W7AfNHpwcvgbwIKeLiw0";
  const propertyLocationLatLng = { lat: 51.513748, lng: -0.12687 };
  return (
    <div className="map-container container">
      <div>
        <div className="map-inner-container">
          <h3 className="map-header">
            Our Headquarters
            <div className="map-header-circle"></div>
          </h3>
        </div>
      </div>
      <LoadScript googleMapsApiKey={googleMapsApiKey}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          center={propertyLocationLatLng}
          zoom={15}
        >
          <Marker position={propertyLocationLatLng} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Maps;
