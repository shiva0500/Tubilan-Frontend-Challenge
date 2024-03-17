import "./Locations.css";
import { FaArrowUp } from "react-icons/fa";

const Locations = () => {
  return (
    <>
      <div className="locations">
        <p className="loc">Top Locations</p>
        <button>See More</button>
      </div>
      <div className="conts">
        <p>Country</p>
        <p>Visitors</p>
      </div>
      <div className="list">
        <div className="item">
          <p>Nigeria</p>
          <div className="vis">
            <p className="count">5430</p>
            <p className="smallgreen">
              <FaArrowUp size={10} /> 2.2%
            </p>
          </div>
        </div>
        <div className="item">
          <p>Germany</p>
          <div className="vis">
            <p className="count">2610</p>
            <p className="smallgreen">
              <FaArrowUp size={10} /> 1.2%
            </p>
          </div>
        </div>
        <div className="item">
          <p>Switzerland</p>
          <div className="vis">
            <p className="count">1925</p>
            <p className="smallgreen">
              <FaArrowUp size={10} /> 1.1%
            </p>
          </div>
        </div>
        <div className="item">
          <p>Iraq</p>
          <div className="vis">
            <p className="count">1571</p>
            <p className="smallgreen">
              <FaArrowUp size={10} /> 0.8%
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Locations;
