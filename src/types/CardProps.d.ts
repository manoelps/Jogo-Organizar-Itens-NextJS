type CardProps = {
	id: number;
	image: string;
	pair: string;
};

export type Galery = {
	items: ItemGalery[];
	full: boolean;
	complete: boolean;
};

export type ItemGalery = {
	id: number;
	image: string;
	pair: string;
};
