import React, {useState} from "react";
import axios from 'axios'
import { IAbility, IGetPokemon, IMove, ISpecies, ISprites, IType } from "../interfaces/pokemon.interface";
import { ListAbilities } from "./ListAbilities";
import { ListMoves } from "./ListMoves";
import { PokemonDetail } from "./PokemonDetail";

export const SearchPokemon = () => {
    const urlPokemonApi = 'https://pokeapi.co/api/v2/pokemon/';

    const [valueInput, setValueInput] = useState('');
    const [spriteImg, setSpriteImg] = useState<ISprites|null>(null);
    const [abilityList, setAbilityList] = useState<IAbility[]>([])
    const [movesList, setMovesList] = useState<IMove[]>([])
    const [namePkm, setNamePkm] = useState<string>('');
    const [idPkm, setIdPkm] = useState<number|undefined>();
    const [typesPkm, setTypesPkm] = useState<IType[]>([]);

    const getPokemon = async () => {
        await axios.get(urlPokemonApi+valueInput)
            .then(({data}) => {
                const {sprites, abilities, moves, name, id, types} = data as IGetPokemon;
                setSpriteImg(sprites);
                setAbilityList(abilities);
                setMovesList(moves);
                setNamePkm(name);
                setIdPkm(id);
                setTypesPkm(types)
                console.log('CL: getPokemon',data);
            })
            .catch((error) => {
                console.log("CL: getPokemon error", error);
            })
    }

    const handlerChange = (value: string) => {
        setValueInput(value);
    }

    return(
        <div>
            <div className="container" style={{width: '50%'}}>
                <form>
                    <div className="input-group mt-3 mb-3 mx-auto">
                        <input type="text" className="form-control" placeholder="pokemon" value={valueInput} onChange={(e) => handlerChange(e.target.value)}></input>
                        <button type="button" className="btn btn-danger" onClick={() => {getPokemon()}}>Buscar</button>
                    </div>
                </form>
            </div>
            {(spriteImg !== null) && (idPkm != undefined) && 
             PokemonDetail(namePkm, idPkm, spriteImg, typesPkm)}
        </div>
    )
}