// src/components/PrecipitationChart.js
import React from "react";
import ReactECharts from "echarts-for-react";

const PrecipitationChart = () => {
  const option = {
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        areaStyle: {},
      },
    ],
  };

  return (
    <ReactECharts
      className="rounded-2xl shadow-lg shadow-gray-400"
      option={option}
      style={{ height: "268px", width: "100%", background: "white" }}
    />
  );
};

export default PrecipitationChart;
