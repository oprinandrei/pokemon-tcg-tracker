import sets from '../data/sets/en.json';

interface SetInterface {
    id: string,
    name: string,
    series: string,
    printedTotal: number,
    total: number,
    legalities: {
        unlimited: string
    },
    ptcgoCode: string,
    releaseDate: string,
    updatedAt: string,
    images: {
        logo: string,
        symbol: string,
    }
}

function getAllSets(): SetInterface[] {
    return sets as SetInterface[];
}

function getSetsById(id: string): SetInterface {
    return sets.find(set => set.id === id) as SetInterface
}

export { getAllSets, getSetsById, SetInterface };

