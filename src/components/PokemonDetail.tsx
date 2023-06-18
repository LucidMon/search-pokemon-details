import React from "react";
import { ISprites, IStat, IType } from "../interfaces/pokemon.interface";
import { IRatioDamage } from "../interfaces/ratioDamage.interface";
import { Color } from "../interfaces/species.interface";

export const PokemonDetail = (props: {name: string, id: number, sprites: ISprites, types: IType[], damage: IRatioDamage[], flavor_text_entry: string, 
height: number, weight: number, genera: string, eggGroup: Color[], habitat: string, color:string, jaName: string, stats: IStat[]}) => {
    const { name, id, sprites, types, damage, flavor_text_entry, height, weight, genera, eggGroup, habitat, color, jaName, stats } = props;
    return (
        <div className="container">
            <section className="pokemon-context">
                <div className="title-pokemon mx-auto ">
                    <span className="name-pokemon fs-1">{name}</span>
                    <span className="id-pokemon fs-1"> N°{id}</span>
                    <div className="type-pokemon fs-5">
                        <ul className="list-inline">
                            {
                                types.map((element) => {
                                    return(
                                        <li className="list-inline-item" key={element.type.name}>
                                            <div className={`card-type ${element.type.name}`}>
                                                <span>{element.type.name}</span>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </section>

            <div className="row justify-content-between">
                <div className="col-3">
                    <section className="pokemon-shiny mx-auto">
                        <span className="shiny-title mx-auto text-center d-block fs-2">Shiny Form</span>
                        <div className="shiny-border mx-auto">
                            <div className="card mx-auto">
                                <img className="shiny card-img-top" src={sprites.other?.["official-artwork"].front_shiny} alt="Pokemon Shiny Img" />
                            </div>
                        </div>
                    </section>
                </div>
                
                <div className="col-3">
                    <section className="pokemon-description mx-auto">
                        <div className="card border-0 mx-auto">
                            <span className="description-title fs-2">Description</span>
                            <span className="description-text fs-5">{flavor_text_entry}</span>
                        </div>
                    </section>
                </div>
            </div>

            <section className="pokemon-image-center">
                <div className="line-center">
                    <div className="circle-border">
                        <div className="circle-img">
                            <img className="pokemon-image" src={sprites.other?.["official-artwork"].front_default} alt="Pokemon Img" />
                        </div>
                    </div>
                    <div className="japo mx-auto">
                        <span className="fst-italic fs-3">{jaName}</span>
                    </div>
                </div>
            </section>

            <div className="row justify-content-between">
                <div className="col-3">
                    <section className="pokemon-characteristics">
                        <div className='card border-0'>
                            <div className="row">
                                <div className="col text-center height">
                                    <span className="fs-4 d-flex justify-content-center">Height</span>
                                    <p className="fs-5">{height/10} m</p>
                                </div>
                                <div className="col text-center weight">
                                    <span className="fs-4">Weigth</span>
                                    <p className="fs-5">{weight/10} Kg</p>
                                </div>
                            </div>
                            <div className="genera text-center">
                                <span className="fs-4">Genera</span>
                                <p className="fs-5">{genera}</p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="col-3">
                    <section className="pokemon-damage-relations">
                        <div className="card border-0">
                            <span className="fs-5">Double Damage From</span>
                                <ul className="list-inline">
                                    {
                                        damage.map((element) => {
                                            return (
                                            <>
                                                {element.ratio === 4 ? (
                                                <li className="list-inline-item" key={element.type}>
                                                    <div className={`card-type-damage ${element.type}`}>
                                                        <span className="fst-italic">{element.type} *4</span>
                                                    </div>
                                                </li>
                                                ) : element.ratio === 2 ? (
                                                    <li className="list-inline-item" key={element.type}>
                                                        <div className={`card-type-damage ${element.type}`}>
                                                            <span className="fst-italic">{element.type}</span>
                                                        </div>
                                                    </li>
                                                ) : (
                                                    null
                                                )}
                                            </>
                                            )
                                        })
                                    }
                            </ul>
                            <span className="fs-5">Half Damage From</span>
                                <ul className="list-inline">
                                {
                                    damage.map((element) => {
                                        return(
                                            <>
                                            {element.ratio === 0.5 ? (
                                            <li className="list-inline-item" key={element.type}>
                                                <div className={`card-type-damage ${element.type}`}>
                                                    <span className="fst-italic">{element.type}</span>
                                                </div>
                                            </li>
                                            ) : element.ratio === 0.25 ? (
                                                <li className="list-inline-item" key={element.type}>
                                                    <div className={`card-type-damage ${element.type}`}>
                                                        <span className="fst-italic">{element.type} *1/4</span>
                                                    </div>
                                                </li>
                                            ) : (
                                                null
                                            )}
                                            </>
                                        )
                                    })
                                }
                            </ul>
                            <span className="fs-5">No Damage From</span>
                                <ul className="list-inline">
                                {
                                    damage.map(element => {
                                        return(
                                            <>
                                            {element.ratio === 0 ? (
                                            <li className="list-inline-item" key={element.type}>
                                                <div className={`card-type-damage ${element.type}`}>
                                                    <span className="fst-italic">{element.type}</span>
                                                </div>
                                            </li>
                                            ) : (
                                                null
                                            )}
                                            </>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </section>
                </div>
            </div>

            <section className="pokemon-stats mx-auto">
                <div className="card border-0 ">
                    <span className="stats-title fs-2">Stats</span>
                    <ul className="list-unstyled">
                        <li>
                            <div className="row align-items-center">
                                <div className="col-3">
                                    <span className="stats-attributes">HP</span>
                                </div>
                                <div className="col-1">
                                    <span className="stats-attributes">{stats[0].base_stat}</span>
                                </div>
                                <div className="col-7">
                                    <div className="progress">
                                        <div className={`progress-bar ${types[0].type.name}`} style={{width: `${(stats[0].base_stat)/220*100}%`, color:'pink'}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-3">
                                    <span className="stats-attributes">Attack</span>
                                </div>
                                <div className="col-1">
                                    <span className="stats-attributes">{stats[1].base_stat}</span>
                                </div>
                                <div className="col-7">
                                    <div className="progress">
                                        <div className={`progress-bar ${types[0].type.name}`} style={{width: `${(stats[1].base_stat)/220*100}%`}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-3">
                                    <span className="stats-attributes">Defense</span>
                                </div>
                                <div className="col-1">
                                    <span className="stats-attributes">{stats[2].base_stat}</span>
                                </div>
                                <div className="col-7">
                                    <div className="progress">
                                        <div className={`progress-bar ${types[0].type.name}`} style={{width: `${(stats[2].base_stat)/220*100}%`}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-3">
                                    <span className="stats-attributes">Special Attack</span>
                                </div>
                                <div className="col-1">
                                    <span className="stats-attributes">{stats[3].base_stat}</span>
                                </div>
                                <div className="col-7">
                                    <div className="progress">
                                        <div className={`progress-bar ${types[0].type.name}`} style={{width: `${(stats[3].base_stat)/220*100}%`}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-3">
                                    <span className="stats-attributes">Special Defense</span>
                                </div>
                                <div className="col-1">
                                    <span className="stats-attributes">{stats[4].base_stat}</span>
                                </div>
                                <div className="col-7">
                                    <div className="progress">
                                        <div className={`progress-bar ${types[0].type.name}`} style={{width: `${(stats[4].base_stat)/220*100}%`}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-3">
                                    <span className="stats-attributes">Speed</span>
                                </div>
                                <div className="col-1">
                                    <span className="stats-attributes">{stats[5].base_stat}</span>
                                </div>
                                <div className="col-7">
                                    <div className="progress">
                                        <div className={`progress-bar ${types[0].type.name}`} style={{width: `${(stats[5].base_stat)/220*100}%`}}></div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

        </div>
    )
}