import "./Featured.css";
import Featured1 from "./images/featured-1.png";
import Featured2 from "./images/featured-2.png";
import Featured3 from "./images/featured-3.png";
import Featured4 from "./images/featured-4.png";

const Featured = () => {
  return (
    <div className="container">
      <div className="featured-container">
        <img className="featured" src={Featured1} />
        <img className="featured" src={Featured2} />
        <img className="featured" src={Featured3} />
        <img className="featured" src={Featured4} />
      </div>
    </div>
  );
};

export default Featured;
