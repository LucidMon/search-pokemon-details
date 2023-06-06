import React from "react";
import { IType } from "../interfaces/pokemon.interface";
import { ElementNameSpecies } from "./ElementNameSpecies";

export const ListTypes = (types: IType[]) => {
    return(
        <>
            {
                types.map((typeElement) => {
                    return(
                        <li className="list-inline-item">
                            <div className="card-type">
                                <span className={ElementNameSpecies(typeElement.type)}>
                                    {ElementNameSpecies(typeElement.type)}
                                </span>
                            </div>  
                        </li>
                    )
                })
            }
        </>
    )
}