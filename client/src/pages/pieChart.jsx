import React, { useEffect, useState, useRef } from "react";
import Chart from "chart.js/auto";
import "../styles/PieChart.css";

const PieChart = () => {
  const [xValues, setXValues] = useState([]);
  const [yValues, setYValues] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const productNames = [
        "Chair",
        "Table",
        "Sofa",
        "TeaTable",
        "Almirah",
        "Balance Left",
      ];
      const productPrices = [10000, 15000, 40000, 20000, 30000, 50000];
      setXValues(productNames); // Add this line
      setYValues(productPrices);
      console.log("Data fetched", { productNames, productPrices });
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (xValues.length > 0 && yValues.length > 0) {
      const ctx = document.getElementById("myChart").getContext("2d");

      const colors = [
        "#71b7e6",
        "#9b59b6",
        "#003370",
        "#d9d9d9",
        "#6b148f",
        "#1d87f1",
      ];

      if (chartRef.current) {
        chartRef.current.destroy();
      }

      chartRef.current = new Chart(ctx, {
        type: "pie",
        data: {
          labels: xValues,
          datasets: [
            {
              backgroundColor: colors,
              data: yValues,
              hoverOffset: 4,
            },
          ],
        },
        options: {
          animation: {
            animateScale: true,
            animateRotate: true,
            duration: 2000,
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: (tooltipItem) => {
                  const label = tooltipItem.label;
                  const value = tooltipItem.raw;
                  const total = tooltipItem.chart.data.datasets[0].data.reduce(
                    (acc, curr) => acc + curr,
                    0
                  );
                  const percentage = ((value / total) * 100).toFixed(2);
                  return `${label}: $${value.toLocaleString()} (${percentage}%)`;
                },
              },
            },
            legend: {
              labels: {
                font: {
                  size: 18,
                },
                color: "#14161F",
              },
              position: "top",
              align: "center",
            },
            title: {
              display: true,
              text: "Track where you spend and what you're left with",
              font: {
                size: 24,
                weight: "bold",
              },
              color: "#14161F",
            },
          },
        },
      });

      console.log("Chart created", chartRef.current);
    }
  }, [xValues, yValues]);

  return (
    <div className="chart-container">
      <div className="heading-container">
        <div className="chart-title title-color animated-text">
          "Tracking expenses ensures you prioritize what truly matters to you".
        </div>
      </div>
      <div className="piechart-container">
        <canvas id="myChart" className="chart-canvas"></canvas>
      </div>
    </div>
  );
};

export default PieChart;
