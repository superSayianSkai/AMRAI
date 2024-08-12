import { useEffect, useRef } from "react";
import ReactECharts from "echarts-for-react";
import ResizeObserver from "resize-observer-polyfill";

const LineChartMe = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (chartRef.current) {
        chartRef.current.getEchartsInstance().resize();
      }
    });

    resizeObserver.observe(chartRef.current.ele);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const option = {
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisLabel: {
        color: "black",
      },
      axisLine: {
        lineStyle: {
          color: "black", // Set x-axis line color to black
        },
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        color: "black",
      },
      axisLine: {
        lineStyle: {
          color: "black", // Set y-axis line color to black
          width: 2, // Optional: Adjust the width of the y-axis line
        },
      },
      splitLine: {
        lineStyle: {
          color: "#ddd", // Optional: Color for horizontal grid lines
        },
      },
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        smooth: true,
        color: "black",
        lineStyle: {
          width: 3, // Adjust this value to change the thickness of the line
        },
      },
    ],
  };

  return (
    <ReactECharts
      className="rounded-2xl shadow-lg shadow-gray-400"
      ref={chartRef}
      option={option}
      style={{ height: "268px", width: "100%", background: "white" }}
    />
  );
};

export default LineChartMe;
