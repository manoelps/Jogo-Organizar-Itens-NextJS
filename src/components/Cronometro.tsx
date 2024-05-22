'use client';

import { useEffect, useState } from 'react';

const Stopwatch = () => {
	const [isActive, setIsActive] = useState(false);
	const [isPaused, setIsPaused] = useState(true);
	const [time, setTime] = useState(0);

	useEffect(() => {
		let interval: any;

		if (isActive && isPaused === false) {
			interval = setInterval(() => {
				setTime(time => time + 10);
			}, 10);
		} else {
			clearInterval(interval);
		}
		return () => {
			clearInterval(interval);
		};
	}, [isActive, isPaused]);

	const handlePauseResume = () => {
		setIsPaused(!isPaused);
	};

	const handleIniciar = () => {
		setIsPaused(!isPaused);
		setIsActive(!isActive);
	};

	const handleReset = () => {
		setIsActive(false);
		setTime(0);
	};

	return (
		<>
			<span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
			<span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</span>
		</>
	);
};

export default Stopwatch;
