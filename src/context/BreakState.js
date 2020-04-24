import React, { createContext, useReducer, useState } from 'react';
import TimeReducer from './TimeReducer';

export const BreakContext = createContext();

export const BreakProvider = (props) => {

    const [ breakTime, dispatch ] = useReducer(TimeReducer, 5);

    const [ startBreak, setStartBreak ] = useState(false);

    const addTime = () => {
        dispatch({ type: 'ADD_TIME' });
    }

    const subTime = () => {
        dispatch({ type: 'SUB_TIME' });
    }

    // const setTime = (newTime) => {
    //     dispatch({ 
    //         type: 'SET_TIME',
    //         payload: newTime 
    //     });
    // }

    return (
        <BreakContext.Provider value={{ breakTime, addTime, subTime, startBreak, setStartBreak }}>
            { props.children }
        </BreakContext.Provider>
    )
}