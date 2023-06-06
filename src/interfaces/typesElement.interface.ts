import {ISpecies, IGameIndex} from './pokemon.interface'

export interface IGetType {
    damage_relations:      IDamageRelations;
    game_indices:          IGameIndex[];
    generation:            ISpecies;
    id:                    number;
    move_damage_class:     ISpecies;
    moves:                 ISpecies[];
    name:                  string;
    names:                 IName[];
    past_damage_relations: IPastDamageRelation[];
    pokemon:               IPokemon[];
}

export interface IDamageRelations {
    double_damage_from: ISpecies[];
    double_damage_to:   ISpecies[];
    half_damage_from:   ISpecies[];
    half_damage_to:     ISpecies[];
    no_damage_from:     any[];
    no_damage_to:       any[];
}

export interface IName {
    language: ISpecies;
    name:     string;
}

export interface IPastDamageRelation {
    damage_relations: IDamageRelations;
    generation:       ISpecies;
}

export interface IPokemon {
    pokemon: ISpecies;
    slot:    number;
}
