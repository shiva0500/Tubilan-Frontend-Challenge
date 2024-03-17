import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const HorizontalBarGraph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const barChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Male", "Female", "Others"],
        datasets: [
          {
            label: "10%",
            backgroundColor: "rgba(40, 51, 80, 1)",
            data: [40, 0, 0],
          },
          {
            label: "20%",
            backgroundColor: "rgba(40, 51, 80, 1)",
            data: [0, 20, 0],
          },
          {
            label: "30%",
            backgroundColor: "rgba(40, 51, 80, 1)",
            data: [0, 0, 10],
          },

          {
            label: "10%",
            backgroundColor: "rgba(15, 164, 74, 1)",
            data: [50, 0, 0],
          },
          {
            label: "20%",
            backgroundColor: "rgba(15, 164, 74, 1)",
            data: [0, 40, 0],
          },
          {
            label: "30%",
            backgroundColor: "rgba(15, 164, 74, 1)",
            data: [0, 0, 10],
          },
          {
            label: "10%",
            backgroundColor: "rgba(255, 248, 84, 1)",
            data: [10, 0, 0],
          },
          {
            label: "20%",
            backgroundColor: "rgba(255, 248, 84, 1)",
            data: [0, 20, 0],
          },
          {
            label: "30%",
            backgroundColor: "rgba(255, 248, 84, 1)",
            data: [0, 0, 5],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        indexAxis: "y",
        scales: {
          x: {
            stacked: true,
            grid: {
              display: false, // Hide x-axis gridlines
            },
            ticks: {
              display: false,
            },
          },
          y: {
            stacked: true,
            grid: {
              display: false, // Hide x-axis gridlines
            },
            ticks: {
              display: false,
            },
          },
        },
      },
    });

    return () => {
      barChart.destroy();
    };
  });

  return (
    <div style={{ "background-color": "#FFFFFF" }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default HorizontalBarGraph;
