import React, { useEffect, useState } from "react";
import axios from 'axios';
import { IGetPokemon, ISprites, IType } from "../interfaces/pokemon.interface";
import { IDamageRelations } from "../interfaces/typesElement.interface";
import { IRatioDamage } from "../interfaces/ratioDamage.interface";
import { PokemonDetail } from "./PokemonDetail";
import { IGetSpecies } from "../interfaces/species.interface";

export const DataPokemon = (props: {searchValue: string}) => {
    const { searchValue } = props;

    const urlPokemonApi = 'https://pokeapi.co/api/v2/pokemon/';

    const [namePkm, setNamePkm] = useState<string>('');
    const [idPkm, setIdPkm] = useState<number|undefined>();
    const [spritesPkm, setSpritesPkm] = useState<ISprites|undefined>();
    const [typesPkm, setTypesPkm] = useState<IType[]>([]);
    const [weakTypes, setWeakTypes] = useState<IDamageRelations[]>([]);
    const [heightPkm, setHeightPkm] = useState<number|undefined>();
    const [weightPkm, setWeigthPkm] = useState<number|undefined>();

    const [relationsDamage, setRelationsDamage] = useState<IRatioDamage[]>([]);
    const [SpecieUrl, setSpecieUrl] = useState<string>('');
    const [descriptionPkm, setDescriptionPkm] = useState<string>('');
    const [generaPkm, setGeneraPkm] = useState<string>('');
    const [eggGroup, setEggGroup] = useState<string>('');
    const [generationPkm, setGenerationPkm] = useState<string>('');
    const [colorPkm, setColorPkm] = useState<string>('');
    const [habitatPkm, setHabitatPkm] = useState<string>('');
    const [nameJaPkm, setNameJaPkm] = useState<string>('')

    const getPokemon = async () => {
        await axios.get(urlPokemonApi+searchValue)
            .then(({data}) => {
                const {name, id, sprites, types, species, height, weight} = data as IGetPokemon;
                console.log('getPokemon', data);
                const namePkm = name.charAt(0).toUpperCase() + name.slice(1);
                setNamePkm(namePkm);
                setIdPkm(id);
                setSpritesPkm(sprites);
                setTypesPkm(types);
                setSpecieUrl(species.url);
                setHeightPkm(height);
                setWeigthPkm(weight);
            })
            .catch((error) => {
                console.log("getPokemon error", error);
            })
    }

    useEffect(() => {
        if (searchValue !== '') {
            getPokemon();
        }
    }, [searchValue]);

    useEffect(() => {
        if (typesPkm.length > 0) {
            const urlTypes = typesPkm.map((element) => axios.get(element.type.url));
      
            Promise.all(urlTypes)
                .then((results) => {
                    const weakTypes = results.map((result) => result.data.damage_relations);
                    setWeakTypes(weakTypes);
                })
                .catch((error) => {
                    console.log(error);
                });
        }

        axios.get(SpecieUrl)
            .then(({data}) => {
                const { flavor_text_entries, genera, egg_groups, generation, color, habitat, names } = data as IGetSpecies;
                console.log("getSpecie",data);

                if(flavor_text_entries && flavor_text_entries.length > 0){
                    const esTextEntry = flavor_text_entries.find(entry => entry.language.name === "es");
                    const enTextEntry = flavor_text_entries.find(entry => entry.language.name === "en");

                    if(esTextEntry){
                        setDescriptionPkm(esTextEntry.flavor_text);
                    } else if(enTextEntry){
                        setDescriptionPkm(enTextEntry.flavor_text);
                        } else {
                        setDescriptionPkm('No se encontro una descripción disponible.')
                        }
                }

                if(genera && genera.length >0){
                    const esGenera = genera.find(entry => entry.language.name === "es");
                    const enGenera = genera.find(entry => entry.language.name === "en");

                    if(esGenera){
                        setGeneraPkm(esGenera.genus);
                    } else if(enGenera){
                        setGeneraPkm(enGenera.genus);
                    } else {
                        setGeneraPkm('No se encontro ninguna categoria disponible.');
                    }
                }

                if(egg_groups){setEggGroup(egg_groups[0].name)}
                if(generation){setGenerationPkm(generation.name)}
                if(color){setColorPkm(color.name)}
                if(habitat){setHabitatPkm(habitat.name)}
                
                if(names && names.length>0){
                    const jaName = names.find(entry => entry.language.name === "ja");
                    if(jaName){setNameJaPkm(jaName.name)}
                }

            })

    }, [typesPkm, SpecieUrl]);

    useEffect(() => {
        const filterTypes = () => {
            let relationsDamage: IRatioDamage[] = [];

            let weakDamage: IRatioDamage[] = [];
            let halfDamage: IRatioDamage[] = [];
            let immuneDamage: IRatioDamage[] = [];

            weakTypes.forEach((element) => {
                const doubleDamageFrom = element.double_damage_from;
                const halfDamageFrom = element.half_damage_from;
                const immuneDamageFrom = element.no_damage_from;

                weakDamage.push(...doubleDamageFrom.map((damage) => ({type: damage.name, ratio: 2})));
                halfDamage.push(...halfDamageFrom.map((damage) => ({type: damage.name, ratio: 0.5})));
                immuneDamage.push(...immuneDamageFrom.map((damage) => ({type: damage.name, ratio: 0})));
            })

            relationsDamage = relationsDamage.concat(weakDamage, halfDamage, immuneDamage);

            const uniqueElements: { [key: string]: IRatioDamage } = {};

            for (const element of relationsDamage) {
                if (uniqueElements[element.type]) {
                    uniqueElements[element.type].ratio *= element.ratio;
                } else {
                    uniqueElements[element.type] = { ...element };
                }
            }
            relationsDamage = Object.values(uniqueElements);

            console.log("Damage Relations",relationsDamage);
            setRelationsDamage(relationsDamage);
        }

        if (weakTypes.length > 0) {
            filterTypes();
        }
    }, [weakTypes]);


    return (
        <div>
            {(idPkm !== undefined) && (spritesPkm !== undefined) && (heightPkm !== undefined) && (weightPkm !== undefined) &&
             <PokemonDetail name={namePkm} id={idPkm} sprites={spritesPkm} types={typesPkm} damage={relationsDamage} flavor_text_entry={descriptionPkm} 
             height={heightPkm} weight={weightPkm}  genera={generaPkm} eggGroup={eggGroup} habitat={habitatPkm} color={colorPkm} jaName={nameJaPkm}/>
            }
        </div>
    )
}