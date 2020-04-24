import React, { createContext, useReducer, useRef } from 'react';
import TimeReducer from './reducers/TimeReducer';

export const SessionContext = createContext();

export const SessionProvider = (props) => {

    const [ sessionTime, dispatch ] = useReducer(TimeReducer, 25);

    const sessionIsRunning = useRef(true);

    const addTime = () => {
        dispatch({ type: 'ADD_TIME' });
    }

    const subTime = () => {
        dispatch({ type: 'SUB_TIME' });
    }

    return (
        <SessionContext.Provider value={{ sessionTime, addTime, subTime, sessionIsRunning }}>
            { props.children }
        </SessionContext.Provider>
    )
}