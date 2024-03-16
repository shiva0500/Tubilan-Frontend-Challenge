import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import "./App.css";
import Widget from "./components/Widget";
import BarGraph from "./components/BarGraph";
import { FaArrowUp } from "react-icons/fa";

import DoughnutGraph from "./components/DoughnutGraph";
import PostActivity from "./components/PostActivity";
import HorizontalBarGraph from "./components/HorizontalBarGraph";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="tophead">
          <p>Performance Metrics</p>
          <p>Download Summary</p>
        </div>
        <div className="widgetContainer">
          <Widget statname="Followers" count="92.8k" percentage="0.8%" />
          <Widget statname="Likes" count="22.8k" percentage="1.8%" />
          <Widget statname="Comments" count="42.8k" percentage="3.8%" />
        </div>
        <div className="charts">
          <div className="Chartleft">
            <BarGraph />
            <div className="title">Post Activity</div>
            <PostActivity />
          </div>
          <div className="ChartRight">
            <div className="Graph">
              <DoughnutGraph />
              <HorizontalBarGraph />
            </div>
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
                <p className='small green'><FaArrowUp size={10} /> 2.2%</p>
              </div>
            </div>
            <div className="item">
              <p>Germany</p>
              <div className="vis">
                <p className="count">2610</p>
                <p className='small green'><FaArrowUp size={10} /> 1.2%</p>
              </div>
            </div>
            <div className="item">
              <p>Switzerland</p>
              <div className="vis">
                <p className="count">1925</p>
                <p className='small green'><FaArrowUp size={10} /> 1.1%</p>
              </div>
            </div>
            <div className="item">
              <p>Iraq</p>
              <div className="vis">
                <p className="count">1571</p>
                <p className='small green'><FaArrowUp size={10} /> 0.8%</p>
              </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
