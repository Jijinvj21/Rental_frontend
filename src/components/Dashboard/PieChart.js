

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const PieChart = (props) => {
  const chartRef = useRef();

  useEffect(() => {
    const chartInstance = new Chart(chartRef.current, {
      type: "pie",
      data: {
        labels: ["Return", "OnRent",],
        datasets: [{
          data: [props.data?.data?.returnCount, props.data?.data?.bookedCount,],
          backgroundColor: [
            "#007bff",
            "#28a745"
          ],
          borderColor: "transparent"
        }]
      },
      options: {
        maintainAspectRatio: false,
        cutoutPercentage: 65,
        color: 'white'
      }
    });

    return () => {
      chartInstance.destroy();
    };
  },[props.data?.data]);

  return <canvas ref={chartRef} className=" md:w-[550px] md:h-[530px] text-center" />;
};

export default PieChart;
