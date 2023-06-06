import React from "react";

export const ElementNamePokemon = (name: string, id: number) => {
    let namePkm = name.charAt(0).toUpperCase() + name.slice(1);
    return(
        <div className="fs-2" style={{display: 'inline-block'}}>
            <span>
                {namePkm}
            </span>

            <span style={{color: '#616161', marginLeft: '10px', whiteSpace: 'nowrap'}}>
                N.°{id}
            </span>
        </div>
    )
}