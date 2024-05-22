const Garrafa = () => {
	return (
		<div className="relative bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border border-opacity-30 w-16 h-56 rounded-b-lg rounded-t-3xl">
			<div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-10 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border border-opacity-30 w-8 h-10 rounded-t-lg"></div>

			<div className="absolute w-16 h-56 bottom-0 rounded-b-lg bg-transparent flex items-stretch flex-col justify-end">
				<div className="w-[62px] h-12  bottom-0  bg-green-700"></div>
				<div className="w-[62px] h-12  bottom-0  bg-yellow-500"></div>
				<div className="w-[62px] h-12  bottom-10  bg-red-700"></div>
				<div className="w-[62px] h-12  bottom-10 rounded-b-lg bg-pink-600"></div>
			</div>
		</div>
	);
};

export default Garrafa;
