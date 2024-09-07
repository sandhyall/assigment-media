'use client'
import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, ArcElement, } from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LineElement, LinearScale,ArcElement, PointElement, Title, Tooltip, Legend, Filler);

const MyLineChart = () => {
    const data = {
//labels --- backend api
        labels: ["Home Appliences", "Clothing", "Electronic"],
        datasets: [
          {
            // data-- backended part
            data: [30, 30, 5],
            backgroundColor: [
              "rgb(242,165,152)",
              "rgb(255,232,157)",
              "rgb(236,107,109)",
              
            ],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
          }
        ],
       
        plugins: {
          labels: {
            render: "percentage",
            fontColor: ["green", "white", "red"],
            precision: 2
          },
        },
         text: "23%",
      };
      
  
  
  return (
    <div className="m-1 bg-slate-50" style={{ width: "800px", margin: "0 auto" } }>
      <Doughnut
          data={data}
          options={{
            
            elements: {
              
              center: {
                legend: { display: true, position: "right" },
                text: "Red is 2/3 the total numbers",
                color: "#FF6384", // Default is #000000
                fontStyle: "Arial", // Default is Arial
                sidePadding: 20, // Default is 20 (as a percentage)
                minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
                lineHeight: 25 // Default is 25 (in px), used for when text wraps
              }
            },
            
          }}
        />
    </div>
    
  );
};

export default MyLineChart;