import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
);


const CustomLineChart = ({data, color}) => {
        const options = {
        plugins: {
        },
        scales: {
              x: {
                  grid: {
                      display: false,
              },
                },
              y: {
                  position: 'right',
                  gridLines: {
                      drawborder: false
                  },
                  ticks: {
                      stepSize: 3000,
                      // Include a dollar sign in the ticks
                      callback: function(value, index, ticks) {
                          return '$' + (value/1000) + 'K';
                      }
                  }
              }
          }
      };
      
      const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      
      const config = {
        labels,
        datasets: [
          {
            data: data,
            borderColor: color,
            backgroundColor: color,
          }
        ],
      };
  return <Line  height={'90'} options={options} data={config} />;
}

export default CustomLineChart
