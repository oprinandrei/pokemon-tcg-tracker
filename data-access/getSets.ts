import sets from '../data/sets/en.json';
import { SetInterface } from './data.interface'

function getAllSets(): SetInterface[] {
    return sets as SetInterface[];
}

function getSetsById(id: string): SetInterface {
    return sets.find(set => set.id === id) as SetInterface
}

export { getAllSets, getSetsById, SetInterface };

