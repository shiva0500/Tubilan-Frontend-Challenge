import logo from "../assets/logo.png";
import { CiBellOn } from "react-icons/ci";
import { MdOutlinePermMedia } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { MdContactSupport } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import { MdPeople } from "react-icons/md";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <img src={logo} alt="" />
      </div>
      <div className="center">
        <ul>
          <li className="active">
            <MdDashboard fontSize={20} />
            &nbsp; Dashboard
          </li>
          <li>
            {" "}
            <SiSimpleanalytics fontSize={20} />
            &nbsp; Analytics
          </li>
          <li>
            <MdPeople fontSize={20} />
            &nbsp; Communities
          </li>
          <li>
            <CiBellOn fontSize={20} />
            &nbsp; Notifications
          </li>
          <li>
            <MdOutlinePermMedia fontSize={20} />
            &nbsp; Media
          </li>
          <li>
            <MdContactSupport fontSize={20} />
            &nbsp; Support
          </li>
          <li>
            <CiSettings fontSize={20} />
            &nbsp; Settings
          </li>
        </ul>
      </div>
      <div className="bottom">
        <MdOutlineLogout fontSize={20} />
        <p className="logout">Log Out</p>
      </div>
    </div>
  );
};

export default Sidebar;
