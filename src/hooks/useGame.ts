import { gerarNumerosAleatoriosSemRepeticao } from '@/helpers/helper';
import { cards } from '@/mocks/cards';
import { mainGrid } from '@/mocks/mainGrid';
import { Galery, ItemGalery } from '@/types/CardProps';
import { useEffect, useState } from 'react';

const useGame = () => {
	const [galleries, setGalleries] = useState<Galery[]>(mainGrid);
	const [activeItem, setActiveItem] = useState<ItemGalery>();
	const [galeryPrevius, setGaleryPrevius] = useState<number>();
	const [activeGalery, setActiveGalery] = useState<number>();

	const [play, setPlay] = useState(0);

	const [shake, setShake] = useState(false);

	const handleReload = () => {
		window.location.reload();
	};

	const triggerShake = (galeryIndex: number) => {
		setShake(true);
		setActiveGalery(galeryIndex);
		setTimeout(() => setShake(false), 500); // A animação dura 0.5 segundos
	};

	const handleItemClick = (card: ItemGalery, galeryIndex: number) => {
		setActiveItem(card);
		setGaleryPrevius(galeryIndex);
	};

	const handleCardClick = (galeryIndex: number) => {
		//previne erros de item nao selecionado e de selecionar a mesma galeria
		if (!activeItem || activeItem?.id === 999 || galeryIndex == galeryPrevius) return;

		//verifica se está full e chacoalha a div
		if (galleries[galeryIndex].full) {
			triggerShake(galeryIndex); //chacoalha a div
			return;
		}

		//cria uma copia de toda a galeria
		const newGalery = [...galleries];

		//adiciona o novo item a galeria selecionada
		newGalery[galeryIndex].items.push(activeItem!);

		//marca a estante como FULL
		if (newGalery[galeryIndex].items.length === 3) {
			newGalery[galeryIndex].full = true;

			//verifica se completou
			const checkComplete = newGalery[galeryIndex].items.every((value, index, array) => {
				return value.pair === array[0].pair;
			});

			if (checkComplete) {
				newGalery[galeryIndex].complete = true;
			}
		} else {
			newGalery[galeryIndex].full = false;
		}

		newGalery[galeryPrevius!].items = newGalery[galeryPrevius!].items.filter(item => item.id !== activeItem?.id);
		newGalery[galeryPrevius!].full = false; //ja que removeu muda o status para que nao fique full

		//atribui a nova galeria com as alterações
		setGalleries(newGalery);

		// limpa o item selecionado
		setActiveItem({
			id: 999,
			image: '',
			pair: ''
		});

		setPlay(play + 1);
	};

	const start = () => {
		cleanGridItems();

		const initialGallery = [...galleries];
		const reseted = initialGallery.filter(item => item.full !== false);

		const numberOfCards = cards.length;
		const novaOrdem = gerarNumerosAleatoriosSemRepeticao(numberOfCards);

		let index = 0;

		reseted.map(galeria => {
			for (let i = 0; i < 3; i++) {
				if (galeria.items.length < 3) {
					galeria.items.push(cards[novaOrdem[index]]);
				}
				index++;
			}
		});

		reseted.push({
			items: [],
			full: false,
			complete: false
		});

		setGalleries(reseted);
	};

	const cleanGridItems = () => {
		const initialGallery = [...galleries];

		initialGallery.map(galery => {
			galery.items = [];
			galery.complete = false;
		});

		setGalleries(initialGallery);
	};

	const resetGame = () => {
		start();
		setPlay(0);
	};

	useEffect(() => {
		start();
	}, []);

	return {
		galleries,
		handleCardClick,
		shake,
		activeGalery,
		handleItemClick,
		activeItem,
		resetGame,
		play,
		handleReload
	};
};

export default useGame;
