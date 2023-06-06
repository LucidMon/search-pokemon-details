import React from "react";
import { IMove } from "../interfaces/pokemon.interface";
import { ElementNameSpecies } from "./ElementNameSpecies";

export const ListMoves = (movesData: IMove[]) => {
    return(
        <div>
            <h3> Lista de Movimientos</h3>
            {
                movesData.map((moveElement) => {
                    return(
                        <>
                        {ElementNameSpecies(moveElement.move)}
                        </>
                    )
                })
            }
        </div>
    )
}