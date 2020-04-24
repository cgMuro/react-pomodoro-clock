import React, { createContext, useReducer, useState } from 'react';
import TimeReducer from './reducers/TimeReducer';

export const BreakContext = createContext();

export const BreakProvider = (props) => {

    const [ breakTime, dispatch ] = useReducer(TimeReducer, 5);

    const addTime = () => {
        dispatch({ type: 'ADD_TIME' });
    }

    const subTime = () => {
        dispatch({ type: 'SUB_TIME' });
    }

    return (
        <BreakContext.Provider value={{ breakTime, addTime, subTime }}>
            { props.children }
        </BreakContext.Provider>
    )
}