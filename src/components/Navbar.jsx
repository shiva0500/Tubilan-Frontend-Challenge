import "./Navbar.css";
import picon from "../assets/profileIcon.png";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav_head">
          <p>Metrics looking good, Snow!</p>
        </div>
        <div className="search">
          <CiSearch fontSize={20} />
          <input type="text" className="input-search" placeholder="Search..." />
        </div>
        <div className="nav_profile">
          <img className="userimg" src={picon} alt="#" />
          <div className="username">
            <p className="name">Snow Olohijere</p>
            <p className="email">uch231@gmail.com</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
