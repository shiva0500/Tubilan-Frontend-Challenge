import "./PostActivity.css";
import post from "../assets/post.png";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaEye } from "react-icons/fa";

const PostActivity = () => {
  return (
    <div className="PostActivity">
      <div className="post">
        <div className="content">
          <img src={post} alt="" />
          <p className="subtitle">
            Success can be achieved by being bold enough...
          </p>
        </div>
        <p className="date">May 30</p>
        <p className="views">
          <FaEye color="rgba(15, 164, 74, 1)" /> 1.1k
        </p>
        <p className="dots">
          <HiDotsHorizontal />
        </p>
      </div>
      <div className="post">
        <div className="content">
          <img src={post} alt="" />
          <p className="subtitle">
            Knowing what to do can never be okay, you have to...{" "}
          </p>
        </div>
        <p className="date">May 30</p>
        <p className="views">
          <FaEye color="rgba(15, 164, 74, 1)" /> 1.1k
        </p>
        <p className="dots">
          <HiDotsHorizontal />
        </p>
      </div>
    </div>
  );
};

export default PostActivity;
