import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

export default function Linegraph() {
	const [data1, setData1] = useState([]);
	const [data2, setData2] = useState([]);
	const fetchData1 = async () => {
		let response = await fetch('https://ashutosh.world/randomData.json');
		response = await response.json();
		console.log(data1);
		setData1(response[0].data1);
	};
	const fetchData2 = async () => {
		let response = await fetch('https://ashutosh.world/randomData.json');
		response = await response.json();
		setData2(response[0].data2);
	};
	const canvasEl = useRef(null);
	useEffect(() => {
		if (data1.length === 0) fetchData1();
		if (data2.length === 0) fetchData2();
		console.log(data1);
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
	}, [data1, data2]);

	return <>{data1 !== null ? <canvas id='myChart' ref={canvasEl} /> : ''}</>;
}
