import * as cards from './cardsImports';
import { SetInterface } from './getSets';

interface PokemonInterface {
    id: string,
    name: string,
    supertype: string,
    subtypes: string[],
    level?: string
    hp: string,
    types: string[],
    evolvesFrom?: string,
    evolvesTo?: string,
    abilities?: {
        name: string,
        text: string,
        type: string
    }[],
    attacks: {
        name: string,
        cost: string[],
        convertedEnergyCost: number,
        damage: string,
        text: string,
    }[],
    weakness: {
        type: string,
        value: string
    }[],
    retreatCost: string[],
    convertedRetreatCost: number,
    number: number,
    artist: string,
    rarity: string,
    flavorText: string,
    nationalPokedexNumbers: number[],
    legalities: {
        unlimited: string
    },
    images: {
        small: string,
        large: string
    },
    sets?: SetInterface[]

}

function getPokemonCardsByName(): PokemonInterface[] {
    const pokemonCards: PokemonInterface[] = []
    console.log(cards)

    return pokemonCards;
}

export { getPokemonCardsByName };

