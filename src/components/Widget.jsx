import "./Widget.css";
import { IoMdArrowUp } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";

const Widget = (props) => {
  return (
    <div className="Widget">
      <div className="header">
        <p>{props.statname}</p>
        <MdArrowOutward />
      </div>
      <h3 className="numbers">{props.count}</h3>
      <div className="footer">
        <div className="test">
          <p className="green">
            <IoMdArrowUp /> {props.percentage}
          </p>
          <p className="plain"> &nbsp;&nbsp;in the last 7 days</p>
        </div>
        <SiSimpleanalytics className="green" fontSize={20} />
      </div>
    </div>
  );
};

export default Widget;
