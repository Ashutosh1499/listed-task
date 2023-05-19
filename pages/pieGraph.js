import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function Piegraph() {
	const canvasEl = useRef(null);

	useEffect(() => {
		const ctx = document.getElementById('myChart2');

		const data1 = [14, 31, 55];

		const labels = ['Basic Tees', 'Custom Short Pants', 'Super Hoodies'];
		const data = {
			labels: labels,
			datasets: [
				{
					data: data1,
					backgroundColor: ['#EE8484', '#F6DC7D', '#98D89E'],
				},
			],
		};
		const config = {
			type: 'pie',
			data: data,
			options: {
				elements: {
					arc: {
						borderWidth: 0,
					},
				},
				maintainAspectRatio: false,
				plugins: {
					legend: {
						display: false,
					},
				},
			},
		};
		const myLineChart = new Chart(ctx, config);

		return function cleanup() {
			myLineChart.destroy();
		};
	});

	return <canvas id='myChart2' ref={canvasEl} />;
}
