import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BarGraph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const barChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "",
            data: [25, 20, 63, 42, 97, 55, 80],
            backgroundColor: "rgb(200, 255, 235)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false, // Hide x-axis gridlines
            },
          },

          y: {
            beginAtZero: true,
            ticks: {
              min: 0,
              max: 40,
              stepSize: 20,
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
    <div style={{ "background-color": "#FFFFFF", padding: "1rem" }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default BarGraph;
