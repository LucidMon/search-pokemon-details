import React, { useState } from "react";

interface SearchPokemonProps {
    onSearch: (value: string) => void;
}

export const SearchPokemon: React.FC<SearchPokemonProps> = ({onSearch}) =>{
    const [valueInput, setValueInput] = useState("");

    const handleChange = (value: string) => {setValueInput(value)};

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (valueInput !== "") {
          onSearch(valueInput);
        }
    };

    return(
        <div className="search container" style={{ width: "50%" }}>
            <form onSubmit={handleSubmit}>
                <div className="input-group mt-3 mb-3 mx-auto">
                    <input type="text" className="form-control" placeholder="pokemon or id" value={valueInput} onChange={(e) => handleChange(e.target.value)}></input>
                    <button type="submit" className="btn btn-danger">Buscar</button>
                </div>
            </form>
        </div>
    )
}