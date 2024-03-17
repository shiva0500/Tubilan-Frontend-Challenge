import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const DoughnutGraph = () => {
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
        plugins: {
          legend: {
            display: false,
            datalabels: {
              color: "#fff",
              formatter: (value, context) => {
                return (
                  context.chart.data.labels[context.dataIndex] +
                  ": " +
                  value +
                  "%"
                );
              },
            },
          },
        },
        maintainAspectRatio: false, // Prevent the chart from maintaining aspect ratio
        aspectRatio: 1, // Set a specific aspect ratio
      },
    });

    return () => {
      doughnutChart.destroy();
    };
  });

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        maxWidth: "320px",
        margin: "0 auto",
        width: "200px",
        height: "200px",
      }}>
      {" "}
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default DoughnutGraph;
