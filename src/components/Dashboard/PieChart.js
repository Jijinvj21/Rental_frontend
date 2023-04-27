// import { useEffect, useRef } from "react";
// import Chart from "chart.js/auto";

// const PieChart = () => {
//   const chartRef = useRef();

//   useEffect(() => {
//     const chartInstance = new Chart(chartRef.current, {
//       type: "pie",
//       data: {
//         labels: ["Social", "Search Engines", "Direct", "Other"],
//         datasets: [{
//           data: [260, 125, 54, 146],
//           backgroundColor: [
//             window.theme.primary,
//             window.theme.success,
//             window.theme.warning,
//             "#dee2e6"
//           ],
//           borderColor: "transparent"
//         }]
//       },
//       options: {
//         maintainAspectRatio: false,
//         cutoutPercentage: 65,
//       }
//     });

//     return () => {
//       chartInstance.destroy();
//     };
//   }, []);

//   return <canvas ref={chartRef} />;
// };

// export default PieChart;


import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const PieChart = (props) => {
  // console.log(props.data.data.returnCount bookedCount    );
  const chartRef = useRef();

  useEffect(() => {
    const chartInstance = new Chart(chartRef.current, {
      type: "pie",
      data: {
        labels: ["Return", "OnRent"],
        datasets: [{
          data: [props.data?.data?.returnCount, props.data?.data?.bookedCount,],
          backgroundColor: [
            "#007bff",
            "#28a745",
            "#ffc107",
            "#6c757d"
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
  }, []);

  return <canvas ref={chartRef} className=" md:w-[550px] md:h-[550px] text-center" />;
};

export default PieChart;
