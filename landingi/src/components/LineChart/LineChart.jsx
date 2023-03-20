import React from "react";
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
} from 'chart.js'

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
)


function LineChart(props) {

    const prices = [props.data[0].total, props.data[1].total,props.data[2].total,props.data[3].total,props.data[4].total]
    const pricesDisc = [props.data[0].discountedPrice, props.data[1].discountedPrice,props.data[2].discountedPrice,props.data[3].discountedPrice,props.data[4].discountedPrice]

    const data = {
        labels: ["product1","product2","product3","product4","product5"],
        datasets: [{
            label: 'Normal Price',
            data: prices,
            backgroundColor:'purple',
            borderColor:'white',
            pointBorderColor:'purple',
        },
         {label: 'Discount Price',
            data: pricesDisc,
            backgroundColor:'yellow',
            borderColor:'red',
            pointBorderColor:'yellow',
        }

]
    }

    const options = {
        plugins: {
            legend: true
        },
        scales: {
            y: {
                min:0,
                max: Math.max(...prices) + 10
            }
        }
    }
    return(
        <Line 
            data={data}
            options = {options}
        ></Line>
    )
}

export default LineChart