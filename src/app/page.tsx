'use client';

import useGame from '@/hooks/useGame';
import classNames from 'classnames';
import Image from 'next/image';

const Page = () => {
	const { galleries, handleCardClick, shake, activeGalery, handleItemClick, activeItem, resetGame, play, handleReload } = useGame();

	return (
		<main className="flex justify-center items-center lg:h-screen md:h-screen">
			<div>
				<div className=" w-full flex justify-end py-4">
					{/* <div className="flex justify-center items-center bg-white p-2 rounded-md font-bold text-[#56BAEC] w-32">
						<Stopwatch />
					</div> */}
					<div className="bg-white p-2 shadow-lg rounded-s-md md:rounded-md lg:rounded-md font-bold text-[#56BAEC]">
						JOGADAS: {play}
					</div>
				</div>
				<div className="grid grid-cols-2 gap-[1px]">
					{galleries.map((galery, galery_index) => (
						<div
							onClick={() => {
								handleCardClick(galery_index);
							}}
							key={galery_index}
							className={classNames(
								'flex justify-start items-center shadow-md gap-2 p-1 w-auto h-[80px] cursor-pointer hover:bg-[#D6AD76]/90 bg-[#D6AD76] border-[8px] border-[#EFBF9F] rounded',
								shake && galery_index === activeGalery && !galery.complete ? 'animate-shake' : '',
								galery.complete ? 'cursor-default' : ''
							)}
						>
							{galery.items.map((card, card_index) => (
								<button
									onClick={e => {
										e.stopPropagation();
										handleItemClick(card, galery_index);
									}}
									disabled={galery.complete}
									key={card_index}
									className={classNames(
										'bg-gray-700 flex justify-center items-center p-2 ml-[1px] rounded-md text-2xl text-white hover:scale-95 shadow-lg',
										activeItem?.id === card?.id ? 'bg-purple-500 ' : 'hover:bg-gray-500',
										galery.complete &&
											'hover:bg-green-600 cursor-default hover:scale-100 bg-green-600 border border-white'
									)}
								>
									<span>
										<Image
											src={`/${card?.image}`}
											alt={card?.pair}
											width={40}
											height={40}
											title={card?.pair}
											priority
										/>
									</span>
								</button>
							))}
						</div>
					))}
				</div>

				<div className="w-full flex items-center justify-center py-4 gap-3">
					<button
						onClick={resetGame}
						className={classNames(
							'px-8 py-3 lg:px-6 lg:py-2  md:px-6 md:py-2 text-[#56BAEC] bg-white font-semibold rounded-md shadow shadow-black/25 hover:scale-95'
						)}
					>
						NOVA PARTIDA
					</button>
				</div>
			</div>
		</main>
	);
};

export default Page;
