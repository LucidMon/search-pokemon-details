import React from "react";
import { ISprites } from "../interfaces/pokemon.interface";

export const SpritesPokemon = (sprites: ISprites) => {
    return(
        <div>
            <img className='card-img-top' src={sprites.other?.["official-artwork"].front_default}></img>
        </div>
    )
}