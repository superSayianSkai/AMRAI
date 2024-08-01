import { useEffect, useRef } from "react";
import * as echarts from "echarts";

const ScatterPlot = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const femaleData = [
      [161.2, 51.6],
      [167.5, 59.0],
      [159.5, 49.2],
      [157.0, 63.0],
      [155.8, 53.6],
      [170.0, 59.0],
      [159.1, 47.6],
      [166.0, 69.8],
      [176.2, 66.8],
      [160.2, 75.2],
      // ... (remaining data)
    ];

    const maleData = [
      [174.0, 65.6],
      [175.3, 71.8],
      [193.5, 80.7],
      [186.5, 72.6],
      [187.2, 78.8],
      [181.5, 74.8],
      [184.0, 86.4],
      [184.5, 78.4],
      [175.0, 62.0],
      [184.0, 81.6],
      // ... (remaining data)
    ];

    const option = {
      title: {
        text: "Height and Weight Distribution",
        color:'white'
      },
      tooltip: {
        trigger: "axis",
        showDelay: 0,
        axisPointer: {
          type: "cross",
          lineStyle: {
            type: "dashed",
            width: 1,
          },
        },
      },
      xAxis: {
        type: "value",
        scale: true,
        axisLabel: {
          formatter: "{value} cm",
          color:'white'
        },
      },
      yAxis: {
        type: "value",
        scale: true,
        axisLabel: {
          formatter: "{value} kg",
          color:'white'
        },
      },
      series: [
        {
          name: "Female",
          type: "scatter",
          data: femaleData,
          markArea: {
            silent: true,
            itemStyle: {
              color: "rgba(255, 182, 193, 0.3)",
            },
          },
          itemStyle: {
            color: "rgb(255, 118, 118)",
          },
        },
        {
          name: "Male",
          type: "scatter",
          data: maleData,
          markArea: {
            silent: true,
            itemStyle: {
              color: "rgba(0, 191, 255, 0.3)",
            },
          },
          itemStyle: {
            color: "rgb(0, 136, 212)",
          },
        },
      ],
    };

    chart.setOption(option);

    const resizeChart = () => {
      chart.resize();
    };

    window.addEventListener("resize", resizeChart);

    return () => {
      window.removeEventListener("resize", resizeChart);
      chart.dispose();
    };
  }, []);

  return (
    <div
     className="rounded-2xl shadow-lg"
      ref={chartRef}
      style={{ height: "100%", width: "100%", background: "blue" }}
    ></div>
  );
};

export default ScatterPlot;
