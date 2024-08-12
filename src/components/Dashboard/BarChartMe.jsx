import { useEffect, useRef } from "react";
import ReactECharts from "echarts-for-react";
import ResizeObserver from "resize-observer-polyfill";
import "./../../styles/BarChart/BarChart.css";

const BarChartMe = () => {
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
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    toolbox: {
      feature: {
        // saveAsImage: {},
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          color: "black",
        },
        axisLine: {
          lineStyle: {
            color: "black",
          },
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          color: "black",
        },
        axisLine: {
          lineStyle: {
            color: "black",
  
          },
        },
        splitLine: {
          lineStyle: {
            color: "#ddd", // Optional: Style for the horizontal grid lines
          },
        },
      },
    ],
    series: [
      {
        name: "Direct",
        type: "bar",
        barWidth: "60%",
        data: [10, 52, 200, 334, 390, 330, 220],
        itemStyle: {
          color: "black",
        },
      },
    ],
  };

  return (
    <ReactECharts
      className="rounded-2xl shadow-lg  shadow-gray-400"
      ref={chartRef}
      option={option}
      style={{ height: "268px", width: "100%", background: "white" }}
    />
  );
};

export default BarChartMe;
