import React from "react";
import { ISprites, IType } from "../interfaces/pokemon.interface";
import { IRatioDamage } from "../interfaces/ratioDamage.interface";

export const PokemonDetail = (props: {name: string, id: number, sprites: ISprites, types: IType[], damage: IRatioDamage[], flavor_text_entry: string, 
height: number, weight: number, genera: string, eggGroup: string, habitat: string, color:string, jaName: string}) => {
    const { name, id, sprites, types, damage, flavor_text_entry, height, weight, genera, eggGroup, habitat, color, jaName } = props;
    return (
        <div className="container" style={{width: '80%'}}>
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
                            <span className="top-right-span">{jaName}</span>
                        </div>
                    </div>
                </div>

                <div className="col-6">
                    <div className="pokemon-description">
                        <div className="title-description fs-2">
                            <span>Descripcion</span>
                        </div>
                        <div className="flavor_text_entry">
                            <p>{flavor_text_entry}</p>
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

                    <div className="container">
                        <div className="pokemon-info-specie">
                            <div className="card text-white bg-dark">
                                <div className="row">
                                    <div className="col-6">
                                        <ul className="list-unstyled">
                                            <li className="heigth">Altura</li>
                                            <span>{height/10} m</span>
                                            <li className="weigth">Peso</li>
                                            <span>{weight/10} Kg</span>
                                            <li className="genera">Categoria</li>
                                            <span>{genera}</span>
                                        </ul>
                                    </div>
                                    <div className="col-6">
                                        <ul className="list-unstyled">
                                            <li className="egg-group">Grupo Huevo</li>
                                            <span>{eggGroup}</span>
                                            <li className="habitat">Habitat</li>
                                            <span>{habitat}</span>
                                            <li className="color">Color</li>
                                            <span>{color}</span>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}