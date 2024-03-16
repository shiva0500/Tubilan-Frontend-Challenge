import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const DoughnutGraph = ({ data, labels }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const doughnutChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Male", "Female", "Others"],
        datasets: [
          {
            label: "",
            data: [35, 55, 15],
            backgroundColor: [
              "rgba(40, 51, 80, 1)",
              "rgba(15, 164, 74, 1)",
              "rgba(255, 248, 84, 1)",
            ],
            borderWidth: 0.2,
          },
        ],
      },
      options: {
        maintainAspectRatio: false, // Prevent the chart from maintaining aspect ratio
        aspectRatio: 1, // Set a specific aspect ratio
      },
    });

    return () => {
      doughnutChart.destroy();
    };
  }, [data, labels]);

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        maxWidth: "320px",
        margin: "0 auto",
      }}>
      {" "}
      <canvas ref={chartRef} width={200} height={200}></canvas>
    </div>
  );
};

export default DoughnutGraph;
