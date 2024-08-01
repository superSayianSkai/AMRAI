import { useEffect, useRef, useState } from "react";
import ReactECharts from "echarts-for-react";
import ResizeObserver from "resize-observer-polyfill";

const PieChartMe = () => {
  const chartRef = useRef(null);
  const [centerText, setCenterText] = useState("Search");

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

  // Define your data
  const data = [
    { value: 1048, name: "Search", itemStyle: { color: "#000000" } },
    { value: 735, name: "Direct", itemStyle: { color: "#66b3ff" } },
    { value: 580, name: "Email", itemStyle: { color: "#99ff99" } },
  ];

  // Option configuration
  const option = {
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c} ({d}%)",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "65%"],
        avoidLabelOverlap: true,
        label: {
          show: false, // Hide labels inside slices
        },
        emphasis: {
          label: {
            show: true, // No emphasis label
          },
        },
        labelLine: {
          show: true,
        },
        data,
        itemStyle: {
          borderWidth: 8,
          borderColor: "#fff",
        },
      },
    ],
    graphic: [
      {
        type: "text",
        left: "center",
        top: "center",
        style: {
          text: centerText, // Central text
          textAlign: "center",
          fill: "#000",
          fontSize: 18,
          fontWeight: "bold",
        },
        z: 10, // Ensure it's above other elements
      },
    ],
  };

  useEffect(() => {
    const chartInstance = chartRef.current.getEchartsInstance();

    // Handle mouseover event
    chartInstance.on("mouseover", (params) => {
      if (params.componentType === "series") {
        setCenterText(params.name); // Update center text based on hovered item
      }
    });

    // Handle mouseout event
    chartInstance.on("mouseout", () => {
      // Optionally, you can keep the text or set it to a default value
      // setCenterText(""); // Clear center text on mouseout
    });

    return () => {
      chartInstance.off("mouseover");
      chartInstance.off("mouseout");
    };
  }, []);

  return (
    <ReactECharts
      className="rounded-2xl shadow-lg shadow-gray-400 absolute top-[-50px]"
      ref={chartRef}
      option={option}
      style={{ height: "268px", width: "450px", background: "white" }}
    />
  );
};
 
export default PieChartMe;
