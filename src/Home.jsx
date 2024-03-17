import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import "./App.css";
import Widget from "./components/Widget";
import BarGraph from "./components/BarGraph";

import DoughnutGraph from "./components/DoughnutGraph";
import PostActivity from "./components/PostActivity";
import HorizontalBarGraph from "./components/HorizontalBarGraph";
import Locations from "./components/Locations";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="tophead">
          <p style={{ fontSize: "1.25rem", fontWeight: "500" }}>
            Performance Metrics
          </p>
          <p style={{ color: "green", borderBottom: "1px solid green" }}>
            Download Summary
          </p>
        </div>

        <div className="widgetContainer">
          <Widget statname="Followers" count="92.8k" percentage="0.8%" />
          <Widget statname="Likes" count="22.8k" percentage="1.8%" />
          <Widget statname="Comments" count="42.8k" percentage="3.8%" />
        </div>
        <div className="charts">
          <div className="Chartleft">
            <div className="BarHead">
              <p>Engagement Rates</p>
              <button>Weekly &#8964;</button>
            </div>
            <BarGraph />
            <div className="title">Post Activity</div>
            <PostActivity />
          </div>
          <div className="ChartRight">
            <div className="DoughnutHead">
              <p>Audience Demography</p>
            </div>
            <div className="Graph">
              <DoughnutGraph />
              <HorizontalBarGraph />
            </div>
            <Locations />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
