'use client';

import GameMode from '@/components/GameMode';
import Instructions from '@/components/Instructions';
import useGame from '@/hooks/useGame';
import classNames from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

const Page = () => {
	const [seeInstructions, setSeeInstructions] = useState(false);

	const {
		galleries,
		handleCardClick,
		shake,
		activeGalery,
		handleItemClick,
		activeItem,
		resetGame,
		play,
		handleReload,
		easyMode,
		setEasyMode,
		openEasyMode,
		setOpenEasyMode
	} = useGame();

	return (
		<main className="flex justify-center items-center lg:h-screen md:h-screen">
			<div>
				{openEasyMode && <GameMode easyMode={easyMode} setEasyMode={setEasyMode} setOpenEasyMode={setOpenEasyMode} />}
				<div className=" w-full flex justify-between items-center py-4">
					<div
						onClick={() => {
							setSeeInstructions(!seeInstructions);
						}}
						className="flex justify-center items-center bg-white p-2 rounded-e-md md:rounded-md lg:rounded-md font-bold text-[#56BAEC] w-32 cursor-pointer"
					>
						Instruções
						{seeInstructions && <Instructions />}
					</div>

					<div
						className={classNames(
							'bg-white p-2 shadow-lg rounded-md font-bold ',
							easyMode == 'easy' ? 'text-[#56BAEC]' : 'text-[#e05a46]'
						)}
					>
						{easyMode == 'easy' ? 'FÁCIL' : 'DIFÍCIL'}
					</div>

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
								'flex justify-start items-center shadow-md gap-0.5 w-auto p-1 h-[78px] cursor-pointer hover:bg-[#D6AD76]/90 bg-[#D6AD76] border-[8px] border-[#EFBF9F] rounded',
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
									disabled={galery.complete || (easyMode == 'hard' && card_index !== 0)}
									key={card_index}
									className={classNames(
										'bg-gray-700 flex justify-center items-center p-2 border-[2px] rounded-md text-2xl text-white shadow-sm shadow-black/50',
										activeItem?.id === card?.id && 'bg-purple-500 hover:scale-90',
										galery.complete && 'hover:bg-green-600 cursor-default hover:scale-100 bg-green-600',
										easyMode === 'hard' && card_index !== 0 && !galery.complete && 'bg-zinc-500 cursor-not-allowed',
										{
											'hover:bg-gray-600 hover:scale-90':
												(card_index === 0 &&
													easyMode === 'hard' &&
													activeItem?.id !== card?.id &&
													!galery.complete) ||
												(easyMode === 'easy' && activeItem?.id !== card?.id && !galery.complete)
										}
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

				<div className="flex justify-center items-center py-8">
					<button
						onClick={resetGame}
						className={classNames(
							'px-8 py-3 lg:px-6 lg:py-2 md:px-6 md:py-2 text-[#56BAEC] bg-white font-semibold rounded-md shadow shadow-black/25 hover:scale-95'
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
