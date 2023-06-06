import React, { useEffect } from "react";
import { SpritesPokemon } from "./SpritesPokemon";
import { ISprites, IType } from "../interfaces/pokemon.interface";
import { ElementNamePokemon } from "./ElementNamePokemon";
import { ListTypes } from "./ListTypes";

export const PokemonDetail = (name: string, id: number,sprite: ISprites, type: IType[]) => {

    useEffect(() => {

    }, [])

    return(
        <div className="container">
            <section className="name-id-pokemon">
                <div className="mx-auto" style={{marginBottom: '10px'}}>
                    {ElementNamePokemon(name, id)}
                </div>
            </section>

            <section className="pokemon-details row">
                <div className="col-6">
                    <div className="pokemon-profile">
                         <div className="card border-1 bg-light mx-auto" 
                            style={{width:'80%', height: '80%'}}>
                            {SpritesPokemon(sprite)}
                         </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="pokemon-type">
                        <div className="title-type fs-3">
                            <span>Tipos</span>
                        </div>
                        <div className="element-type" style={{marginLeft: '5px'}}>
                            <ul className="list-inline" style={{marginTop: '5px'}}>
                                {ListTypes(type)}
                            </ul>
                        </div>
                    </div>
                    <div className="pokemon-weak-type">
                        <div className="title-weak-type fs-3">
                            <span>Debilidades</span>
                            <ul className="list-inline" style={{marginTop: '5px'}}>
                                {}
                            </ul>
                        </div>
                        <div className="element-weak-type" style={{marginLeft: '5px'}}></div>
                    </div>
                </div>
            </section>
        </div>
    )
}