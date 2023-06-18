import React from "react";
import { ISprites, IStat, IType } from "../interfaces/pokemon.interface";
import { IRatioDamage } from "../interfaces/ratioDamage.interface";
import { Color } from "../interfaces/species.interface";

export const PokemonDetail = (props: {name: string, id: number, sprites: ISprites, types: IType[], damage: IRatioDamage[], flavor_text_entry: string, 
height: number, weight: number, genera: string, eggGroup: Color[], habitat: string, color:string, jaName: string, stats: IStat[]}) => {
    const { name, id, sprites, types, damage, flavor_text_entry, height, weight, genera, eggGroup, habitat, color, jaName, stats } = props;
    return (
        <div className="container">
            <section className="title-pokemon mx-auto fs-1">
                <span className="name-pokemon">{name}</span>
                <span className="id-pokemon"> N°{id}</span>
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
            </section>

            <div className="row">
                <div className="col-3">
                    <section className="pokemon-shiny mx-auto">
                        <span className="shiny-title mx-auto text-center d-block fs-2">Shiny</span>
                        <div className="shiny-border mx-auto">
                            <div className="card mx-auto">
                                <img className="shiny card-img-top" src={sprites.other?.["official-artwork"].front_shiny} alt="Pokemon Shiny Img" />
                            </div>
                        </div>
                    </section>
                    <section className="pokemon-characteristics">
                        <div className='card border-0'>
                            <div className="row">
                                <div className="col text-center height">
                                    <span className="fs-5 d-flex justify-content-center">Height</span>
                                    <p>{height/10} m</p>
                                </div>
                                <div className="col text-center weight">
                                    <span className="fs-5">Weigth</span>
                                    <p>{weight/10} Kg</p>
                                </div>
                            </div>
                            <div className="genera text-center">
                                <span className="fs-5">Genera</span>
                                <p>{genera}</p>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="col-6">
                    <section className="pokemon-image mx-auto">
                        <div className="image-border mx-auto">
                            <div className="card mx-auto">
                                <img className="card-img-top" alt="Pokemon Img Profile" src={sprites.other?.["official-artwork"].front_default}></img>
                            </div>
                        </div>
                        <div className="japo mx-auto">
                            <span className="fst-italic fs-3">{jaName}</span>
                        </div>
                    </section>
                </div>

                <div className="col-3">
                    <section className="pokemon-description">
                        <div className="card border-0">
                            <span>Description</span>
                            <span>{flavor_text_entry}</span>
                        </div>
                    </section>
                    <section className="pokemon-damage-relations">
                        <div className="card border-0">
                            <span>Damage Relation</span>
                            <span>Double Damage</span>
                            <span>Half Damage</span>
                            <span>No Damage</span>
                        </div>
                    </section>
                </div>
            </div>


            <section className="pokemon-stats mx-auto">
                <div className="card border-0 ">
                    <span>Stats</span>
                    <ul className="list-unstyled">
                        <li>
                            <div className="row align-items-center">
                                <div className="col-3">
                                    <span>HP</span>
                                </div>
                                <div className="col-1">
                                    <span>{stats[0].base_stat}</span>
                                </div>
                                <div className="col-7">
                                    <div className="progress">
                                        <div className={`progress-bar ${types[0].type.name}`} style={{width: `${(stats[0].base_stat)/220*100}%`, color:'pink'}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-3">
                                    <span>Attack</span>
                                </div>
                                <div className="col-1">
                                    <span>{stats[1].base_stat}</span>
                                </div>
                                <div className="col-7">
                                    <div className="progress">
                                        <div className={`progress-bar ${types[0].type.name}`} style={{width: `${(stats[1].base_stat)/220*100}%`}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-3">
                                    <span>Defense</span>
                                </div>
                                <div className="col-1">
                                    <span>{stats[2].base_stat}</span>
                                </div>
                                <div className="col-7">
                                    <div className="progress">
                                        <div className={`progress-bar ${types[0].type.name}`} style={{width: `${(stats[2].base_stat)/220*100}%`}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-3">
                                    <span>Special Attack</span>
                                </div>
                                <div className="col-1">
                                    <span>{stats[3].base_stat}</span>
                                </div>
                                <div className="col-7">
                                    <div className="progress">
                                        <div className={`progress-bar ${types[0].type.name}`} style={{width: `${(stats[3].base_stat)/220*100}%`}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-3">
                                    <span>Special Defense</span>
                                </div>
                                <div className="col-1">
                                    <span>{stats[4].base_stat}</span>
                                </div>
                                <div className="col-7">
                                    <div className="progress">
                                        <div className={`progress-bar ${types[0].type.name}`} style={{width: `${(stats[4].base_stat)/220*100}%`}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-3">
                                    <span>Speed</span>
                                </div>
                                <div className="col-1">
                                    <span>{stats[5].base_stat}</span>
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