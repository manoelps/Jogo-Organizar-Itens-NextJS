const Instructions = () => {
	return (
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
						Clique no card que você deseja mover. O card selecionado ficará destacado para indicar que está pronto para ser
						movido.
					</div>
					<h3>2. Selecione o Espaço Vago:</h3>
					<span className="font-medium">
						Clique no espaço vago onde você deseja mover o card. O card selecionado será movido para o espaço vago escolhido.
					</span>
				</div>
			</div>
			<div className="flex justify-center items-center mt-4 bg-gray-100 p-4 rounded-b-lg">
				<button className="text-[#56BAEC]/90">FECHAR</button>
			</div>
		</div>
	);
};

export default Instructions;
