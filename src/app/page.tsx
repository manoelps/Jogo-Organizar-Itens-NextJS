'use client';

import useGame from '@/hooks/useGame';
import classNames from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

const Page = () => {
	const [seeInstructions, setSeeInstructions] = useState(false);

	const { galleries, handleCardClick, shake, activeGalery, handleItemClick, activeItem, resetGame, play, handleReload } = useGame();

	return (
		<main className="flex justify-center items-center lg:h-screen md:h-screen">
			<div>
				<div className=" w-full flex justify-between py-4">
					<div
						onClick={() => {
							setSeeInstructions(!seeInstructions);
						}}
						className="flex justify-center items-center bg-white p-2 rounded-e-md md:rounded-md lg:rounded-md font-bold text-[#56BAEC] w-32 cursor-pointer"
					>
						Instruções
						{seeInstructions && (
							<div className="absolute w-full lg:w-[400px]  top-0  lg:top-1/2 left-1/2 transform -translate-x-1/2 lg:-translate-y-1/2 bg-white rounded-b-lg lg:rounded-lg z-10 shadow shadow-black/80 border-2 border-white">
								<div className=" pt-4 pl-4 pr-4  flex justify-center flex-col">
									<div className="flex flex-col gap-4">
										<h2 className="">Início do Jogo</h2>
										<div className="font-medium pl-2">
											Ao iniciar o jogo, você verá uma série de cards dispostos em uma grade, com 3 espaços vagos
										</div>
										<h2 className="">Mover um Card</h2>
										<div className="font-medium pl-2">Para mover um card, siga estes passos:</div>
										<h3 className="">1. Selecione o Card:</h3>
										<div className="font-medium pl-2">
											Clique no card que você deseja mover. O card selecionado ficará destacado para indicar que está
											pronto para ser movido.
										</div>
										<h3>2. Selecione o Espaço Vago:</h3>
										<span className="font-medium">
											Clique no espaço vago onde você deseja mover o card. O card selecionado será movido para o
											espaço vago escolhido.
										</span>
									</div>
								</div>
								<div className="flex justify-center items-center mt-4 bg-gray-100 p-4 rounded-b-lg">
									<button className="text-[#56BAEC]/90">FECHAR</button>
								</div>
							</div>
						)}
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

				<div className="w-full flex justify-center py-4">
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
