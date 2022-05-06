import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

const SalesDougnut = (props) => {
    const { data, labels, color } = props
    ChartJS.register(ArcElement, Tooltip);

    const chart = {
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: [
            color,
            '#EAECEE'
          ],
        },
      ],
    };
    return (
        <div>
          {/* <div> */}
        <Doughnut width={'100'} options={{responsive: true}} className="" data={chart} />
        {/* </div> */}
        </div>
    )
}

export default SalesDougnut
