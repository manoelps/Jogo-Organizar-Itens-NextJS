'use client';

import React from 'react';

type Props = {
	easyMode: 'easy' | 'hard';
	setEasyMode: (value: 'easy' | 'hard') => void;
	setOpenEasyMode: (value: boolean) => void;
};

const GameMode: React.FC<Props> = ({ easyMode, setEasyMode, setOpenEasyMode }) => {
	return (
		<div className="flex justify-center items-center rounded-e-md md:rounded-md lg:rounded-md font-bold text-[#56BAEC] w-32 cursor-pointer">
			<div className="absolute w-full lg:w-[400px]  top-0  lg:top-1/2 left-1/2 transform -translate-x-1/2 lg:-translate-y-1/2 bg-white rounded-b-lg lg:rounded-lg z-10 shadow shadow-black/80 border-2 border-white">
				<div className=" pt-4 pl-4 pr-4  flex justify-center flex-col">
					<div className="flex flex-col gap-4">
						<h2 className="">Descrição da Dificuldade do Jogo de Organizar Itens</h2>
						<div className="font-medium pl-2">
							O jogo de organizar itens oferece duas opções de dificuldade para desafiar suas habilidades: <b>Fácil</b> e
							<b> Difícil</b>.
						</div>
						<h2 className="">Fácil:</h2>
						<div className="font-medium pl-2">
							Você tem total liberdade para mover qualquer peça a qualquer momento. Todas as peças estão desbloqueadas e podem
							ser reposicionadas conforme sua conveniência.
						</div>
						<h3 className="">Difícil:</h3>
						<div className="font-medium pl-2">
							Aqui, apenas as peças liberadas e que estão na primeira posição do grid podem ser movidas. Isso significa que
							você precisará planejar cuidadosamente cada movimento, liberando e organizando as peças de forma meticulosa para
							alcançar a disposição final desejada.
						</div>
					</div>
				</div>
				<div className="flex justify-center items-center mt-4 p-4 gap-3 bg-gray-100  rounded-b-lg">
					<button
						onClick={() => {
							setEasyMode('easy');
							setOpenEasyMode(false);
						}}
						className="flex justify-center items-center px-8 py-3 lg:px-6 lg:py-2 md:px-6 md:py-2 font-semibold rounded-md w-full bg-[#56BAEC] text-white shadow-sm shadow-black hover:scale-95"
					>
						FÁCIL
					</button>
					<button
						onClick={() => {
							setEasyMode('hard');
							setOpenEasyMode(false);
						}}
						className="flex justify-center items-center px-8 py-3 lg:px-6 lg:py-2 md:px-6 md:py-2 font-semibold rounded-md w-full bg-[#e05a46] text-white shadow-sm shadow-black hover:scale-95"
					>
						DIFÍCIL
					</button>
				</div>
			</div>
		</div>
	);
};

export default GameMode;
