import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const Chart: React.FC<{
  chartYAxis: number[];
  chartXAxis: number[] | string[] | Date[];
  heading: string;
}> = ({ chartYAxis, chartXAxis, heading }) => {
  const seriesArray = [
    {
      name: heading,
      series: heading,
      data: chartYAxis,
    },
  ];

  const [options] = useState({
    chart: {
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1,
      },
    },
    colors: ["#800080"],
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 1,
        opacityTo: 0,
      },
    },
    title: {
      text: heading,
    },
    tooltip: {
      enabled: true,
    },
    stroke: {
      width: 1,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      categories: chartXAxis,
      labels: {
        datetimeFormatter: {
          year: "yyyy",
          month: "mm",
          day: "dd",
        },
      },
    },
  });

  return (
    <>
      {seriesArray && (
        <ReactApexChart
          options={options}
          series={seriesArray as ApexAxisChartSeries}
          type="area"
          height={400}
        />
      )}
    </>
  );
};

export default Chart;
