import React from "react";
import { IAbility } from "../interfaces/pokemon.interface";
import { ElementNameSpecies } from "./ElementNameSpecies";

export const ListAbilities = (abilityData: IAbility[]) => {

    return(
        <div>
            <h3> Lista de Habilidades </h3>
            {abilityData.map((abilityElement) => {
                return(
                    <>
                    {ElementNameSpecies(abilityElement.ability)}
                    </>
                )
            })}
        </div>
    )
}