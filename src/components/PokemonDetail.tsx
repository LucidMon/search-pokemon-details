import React from "react";
import { ISprites, IType } from "../interfaces/pokemon.interface";
import { IRatioDamage } from "../interfaces/ratioDamage.interface";

export const PokemonDetail = (props: {name: string, id: number, sprites: ISprites, types: IType[], damage: IRatioDamage[]}) => {
    const { name, id, sprites, types, damage } = props;
    return (
        <div className="container">
            <section className="title-pokemon mx-auto fs-2" style={{marginBottom: '10px'}}>
                <span className="name-pokemon">{name}</span>
                <span className="id-pokemon" style={{color: '#616161', marginLeft: '10px', whiteSpace: 'nowrap'}}> N°{id}</span>
            </section>

            <section className="pokemon-details row">
                <div className="col-6">
                    <div className="pokemon profile">
                        <div className="card border-1 bg-light mx-auto"
                        style={{width: '50%', height: '50%'}}>
                            <img className="card-img-top" alt='Pokemon Img Profile' src={sprites.other?.["official-artwork"].front_default}></img>
                        </div>
                    </div>
                </div>

                <div className="col-6">
                    <div className="pokemon-description">
                        <div className="title-description fs-2">
                            <span>Descripcion</span>
                        </div>
                    </div>

                    <div className="pokemon-type">
                        <div className="title-type fs-2">
                            <span>Tipos</span>
                        </div>
                        <div className="elemnt-type">
                            <ul className="list-inline" style={{marginLeft: '5px'}}>
                                {
                                    types.map((element) => {
                                        return(
                                            <li className="list-inline-item" key={element.type.name}>
                                                <div className="card-type">
                                                    <span className={element.type.name}>
                                                        {element.type.name}
                                                    </span>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>

                    <div className="pokemon-weak-type">
                        <div className="title-weak-type fs-2">
                            <span>Debilidades</span>
                        </div>
                        <div className="weak-element-type">
                            <ul className="list-inline" style={{marginLeft: '5px'}}>
                                {
                                    damage.map((element) => {
                                        return(
                                            <>
                                                {
                                                    (element.ratio === 2) ? 
                                                    <li className="list-inline-item" key={element.type}>
                                                        <div className="card-type">
                                                            <span className={element.type}>{element.type}</span>
                                                        </div>
                                                    </li>
                        
                                                    : (element.ratio === 4) ? 
                                                    <li className="list-inline-item" key={element.type}>
                                                        <div className="card-type">
                                                            <span className={element.type}>{element.type} x4</span>
                                                        </div>
                                                    </li> 
                        
                                                    : null
                                                }
                                            </>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}