import React, { createContext } from 'react';
import { useState } from 'react';


export const PlayContext = createContext();


export const PlayProvider = (props) => {

    const [ play, setPlay ] = useState(false);

    return (
        <PlayContext.Provider value={{ play, setPlay }}>
            {props.children}
        </PlayContext.Provider>
    )
}