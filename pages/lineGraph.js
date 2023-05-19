import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

export default function Linegraph() {
	//As I did not find any api related to this work but the implementation will
	//fetch if proviided with a good api and change the data accordingly.
	const [data1, setData1] = useState([20, 15, 60, 60, 65, 30, 70]);
	const [data2, setData2] = useState([0, 59, 75, 20, 20, 55, 40]);
	const fetchData1 = async () => {
		let response = await fetch('');
		response = await response.json();
		// setData1(response.data1);
	};
	const fetchData2 = async () => {
		let response = await fetch('');
		response = await response.json();
		// setData1(response.data1);
	};
	const canvasEl = useRef(null);
	useEffect(() => {
		fetchData1();
		fetchData1();
		const ctx = canvasEl.current.getContext('2d');
		const labels = ['', 'Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'];
		const data = {
			labels: labels,
			datasets: [
				{
					backgroundColor: '#9BDD7C',
					label: 'Guest',
					data: data1,
					borderWidth: 2,
					borderColor: '#9BDD7C',
					lineTension: 0.2,
					pointRadius: 0,
				},
				{
					backgroundColor: '#E9A0A0',
					label: 'User',
					data: data2,
					borderWidth: 2,
					borderColor: '#E9A0A0',
					lineTension: 0.2,
					pointRadius: 0,
				},
			],
			options: {
				scales: {
					xAxes: [
						{
							gridLines: {
								display: false,
							},
						},
					],
				},
			},
		};
		const config = {
			type: 'line',
			data: data,
			options: {
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
	}, [data1, data2, setData1, setData2]);

	return <canvas id='myChart' ref={canvasEl} />;
}
