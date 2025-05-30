interface SetInterface {
	id: string;
	name: string;
	series: string;
	printedTotal: number;
	total: number;
	legalities: {
		unlimited: string;
	};
	ptcgoCode: string;
	releaseDate: string;
	updatedAt: string;
	images: {
		logo: string;
		symbol: string;
	};
}

interface PokemonInterface {
	id: string;
	name: string;
	supertype?: string | undefined;
	subtypes?: string[] | undefined;
	level?: string | undefined;
	hp?: string | undefined;
	types?: string[] | undefined;
	evolvesFrom?: string | undefined;
	evolvesTo?: string | string[] | undefined;
	abilities?:
		| {
				name: string;
				text: string;
				type: string;
		  }[]
		| undefined;
	attacks?:
		| {
				name: string;
				cost: string[];
				convertedEnergyCost: number;
				damage?: string;
				text: string;
		  }[]
		| undefined;
	weakness?:
		| {
				type: string;
				value: string;
		  }[]
		| undefined;
	retreatCost?: string[] | undefined;
	convertedRetreatCost?: number | undefined;
	number: number | string | undefined;
	artist?: string | undefined;
	rarity?: string | undefined;
	flavorText?: string | undefined;
	nationalPokedexNumbers?: number[] | undefined;
	legalities:
		| {
				unlimited: string;
		  }
		| undefined;
	images:
		| {
				small: string;
				large: string;
		  }
		| undefined;
	sets?: SetInterface[] | undefined;
}

interface CardsInterface {
	base1: PokemonInterface[];
	base2: PokemonInterface[];
	base3: PokemonInterface[];
	base4: PokemonInterface[];
	base5: PokemonInterface[];
	base6: PokemonInterface[];
	basep: PokemonInterface[];
	bp: PokemonInterface[];
	bw1: PokemonInterface[];
	bw10: PokemonInterface[];
	bw11: PokemonInterface[];
	bw2: PokemonInterface[];
	bw3: PokemonInterface[];
	bw4: PokemonInterface[];
	bw5: PokemonInterface[];
	bw6: PokemonInterface[];
	bw7: PokemonInterface[];
	bw8: PokemonInterface[];
	bw9: PokemonInterface[];
	bwp: PokemonInterface[];
	cel25: PokemonInterface[];
	cel25c: PokemonInterface[];
	col1: PokemonInterface[];
	dc1: PokemonInterface[];
	det1: PokemonInterface[];
	dp1: PokemonInterface[];
	dp2: PokemonInterface[];
	dp3: PokemonInterface[];
	dp4: PokemonInterface[];
	dp5: PokemonInterface[];
	dp6: PokemonInterface[];
	dp7: PokemonInterface[];
	dpp: PokemonInterface[];
	dv1: PokemonInterface[];
	ecard1: PokemonInterface[];
	ecard2: PokemonInterface[];
	ecard3: PokemonInterface[];
	ex1: PokemonInterface[];
	ex10: PokemonInterface[];
	ex11: PokemonInterface[];
	ex12: PokemonInterface[];
	ex13: PokemonInterface[];
	ex14: PokemonInterface[];
	ex15: PokemonInterface[];
	ex16: PokemonInterface[];
	ex2: PokemonInterface[];
	ex3: PokemonInterface[];
	ex4: PokemonInterface[];
	ex5: PokemonInterface[];
	ex6: PokemonInterface[];
	ex7: PokemonInterface[];
	ex8: PokemonInterface[];
	ex9: PokemonInterface[];
	fut20: PokemonInterface[];
	g1: PokemonInterface[];
	gym1: PokemonInterface[];
	gym2: PokemonInterface[];
	hgss1: PokemonInterface[];
	hgss2: PokemonInterface[];
	hgss3: PokemonInterface[];
	hgss4: PokemonInterface[];
	hsp: PokemonInterface[];
	mcd11: PokemonInterface[];
	mcd12: PokemonInterface[];
	mcd14: PokemonInterface[];
	mcd15: PokemonInterface[];
	mcd16: PokemonInterface[];
	mcd17: PokemonInterface[];
	mcd18: PokemonInterface[];
	mcd19: PokemonInterface[];
	mcd21: PokemonInterface[];
	mcd22: PokemonInterface[];
	neo1: PokemonInterface[];
	neo2: PokemonInterface[];
	neo3: PokemonInterface[];
	neo4: PokemonInterface[];
	np: PokemonInterface[];
	pgo: PokemonInterface[];
	pl1: PokemonInterface[];
	pl2: PokemonInterface[];
	pl3: PokemonInterface[];
	pl4: PokemonInterface[];
	pop1: PokemonInterface[];
	pop2: PokemonInterface[];
	pop3: PokemonInterface[];
	pop4: PokemonInterface[];
	pop5: PokemonInterface[];
	pop6: PokemonInterface[];
	pop7: PokemonInterface[];
	pop8: PokemonInterface[];
	pop9: PokemonInterface[];
	ru1: PokemonInterface[];
	si1: PokemonInterface[];
	sm1: PokemonInterface[];
	sm10: PokemonInterface[];
	sm11: PokemonInterface[];
	sm115: PokemonInterface[];
	sm12: PokemonInterface[];
	sm2: PokemonInterface[];
	sm3: PokemonInterface[];
	sm35: PokemonInterface[];
	sm4: PokemonInterface[];
	sm5: PokemonInterface[];
	sm6: PokemonInterface[];
	sm7: PokemonInterface[];
	sm75: PokemonInterface[];
	sm8: PokemonInterface[];
	sm9: PokemonInterface[];
	sma: PokemonInterface[];
	smp: PokemonInterface[];
	sv1: PokemonInterface[];
	sv2: PokemonInterface[];
	sv3: PokemonInterface[];
	sv3pt5: PokemonInterface[];
	sv4: PokemonInterface[];
	sv4pt5: PokemonInterface[];
	sv5: PokemonInterface[];
	sv6: PokemonInterface[];
	sv6pt5: PokemonInterface[];
	sv7: PokemonInterface[];
	sv8: PokemonInterface[];
	sv8pt5: PokemonInterface[];
	sve: PokemonInterface[];
	svp: PokemonInterface[];
	swsh1: PokemonInterface[];
	swsh10: PokemonInterface[];
	swsh10tg: PokemonInterface[];
	swsh11: PokemonInterface[];
	swsh11tg: PokemonInterface[];
	swsh12: PokemonInterface[];
	swsh12pt5: PokemonInterface[];
	swsh12pt5gg: PokemonInterface[];
	swsh12tg: PokemonInterface[];
	swsh2: PokemonInterface[];
	swsh3: PokemonInterface[];
	swsh35: PokemonInterface[];
	swsh4: PokemonInterface[];
	swsh45: PokemonInterface[];
	swsh45sv: PokemonInterface[];
	swsh5: PokemonInterface[];
	swsh6: PokemonInterface[];
	swsh7: PokemonInterface[];
	swsh8: PokemonInterface[];
	swsh9: PokemonInterface[];
	swsh9tg: PokemonInterface[];
	swshp: PokemonInterface[];
	tk1a: PokemonInterface[];
	tk1b: PokemonInterface[];
	tk2a: PokemonInterface[];
	tk2b: PokemonInterface[];
	xy0: PokemonInterface[];
	xy1: PokemonInterface[];
	xy10: PokemonInterface[];
	xy11: PokemonInterface[];
	xy12: PokemonInterface[];
	xy2: PokemonInterface[];
	xy3: PokemonInterface[];
	xy4: PokemonInterface[];
	xy5: PokemonInterface[];
	xy6: PokemonInterface[];
	xy7: PokemonInterface[];
	xy8: PokemonInterface[];
	xy9: PokemonInterface[];
	xyp: PokemonInterface[];
}

export { SetInterface, PokemonInterface, CardsInterface };
