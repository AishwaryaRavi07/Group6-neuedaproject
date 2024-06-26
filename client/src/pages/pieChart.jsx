import React, { useEffect, useState, useRef } from "react";
import Chart from "chart.js/auto";

const PieChart = () => {
  const [xValues, setXValues] = useState([]);
  const [yValues, setYValues] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const productNames = ["Italy", "France", "Spain", "USA", "Argentina"];
      const productPrices = [55, 49, 44, 24, 15];
      setXValues(productNames);
      setYValues(productPrices);
      console.log("Data fetched", { productNames, productPrices });
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (xValues.length > 0 && yValues.length > 0) {
      const barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];
      
      // Clean up any existing chart instance before creating a new one
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      const ctx = document.getElementById("myChart").getContext("2d");
      
      chartRef.current = new Chart(ctx, {
        type: "pie",
        data: {
          labels: xValues,
          datasets: [{
            backgroundColor: barColors,
            data: yValues
          }]
        },
        options: {
          title: {
            display: true,
            text: "World Wide Wine Production 2018",
            font: {
              size: 50
            }
          },
          legend: {
            labels: {
              font: {
                size: 48
              }
            }
          }
        }
      });

      console.log("Chart created", chartRef.current);
    }
  }, [xValues, yValues]);

  return (
    <canvas id="myChart" style={{ marginTop: "-25em", scale: "0.4" }}></canvas>
  );
};

export default PieChart;
