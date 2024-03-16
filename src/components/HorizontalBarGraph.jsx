import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const HorizontalBarGraph = () => {
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
        indexAxis: "y",
        scales: {
          x: {
            beginAtZero: true,
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
