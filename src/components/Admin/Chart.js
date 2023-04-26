import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const PieChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    const chartInstance = new Chart(chartRef.current, {
      type: "pie",
      data: {
        labels: ["Social", "Search Engines", "Direct", "Other"],
        datasets: [{
          data: [260, 125, 54, 146],
          backgroundColor: [
            window.theme.primary,
            window.theme.success,
            window.theme.warning,
            "#dee2e6"
          ],
          borderColor: "transparent"
        }]
      },
      options: {
        maintainAspectRatio: false,
        cutoutPercentage: 65,
      }
    });

    return () => {
      chartInstance.destroy();
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default PieChart;
