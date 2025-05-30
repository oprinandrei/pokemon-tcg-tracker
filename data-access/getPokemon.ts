/*eslint import/namespace: ['error', { allowComputed: true }]*/
import * as cards from './cardsImports';
import { SetInterface, CardsInterface, PokemonInterface } from './data.interface';

function getPokemonCardsByName(name: string): PokemonInterface[] {
	const pokemonCards: PokemonInterface[] = [];
	for (const [key, value] of Object.entries(cards as CardsInterface)) {
		const pokemon = (value as PokemonInterface[]).find((card: PokemonInterface) =>
			card.name.includes(name)
		);
		if (pokemon) pokemonCards.push(pokemon);
	}

	return pokemonCards;
}

function getPokemonBySet(name: string): PokemonInterface[] {
	const pokemonCards: PokemonInterface[] = cards[name as keyof CardsInterface];

	return pokemonCards;
}

export { getPokemonCardsByName, getPokemonBySet };
