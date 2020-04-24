import React, { createContext, useReducer, useState } from 'react';
import TimeReducer from './TimeReducer';

export const SessionContext = createContext();

export const SessionProvider = (props) => {

    const [ sessionTime, dispatch ] = useReducer(TimeReducer, 25);

    const [ timerTime, setTimerTime ] = useState(sessionTime);

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
        <SessionContext.Provider value={{ sessionTime, addTime, subTime, timerTime, setTimerTime }}>
            { props.children }
        </SessionContext.Provider>
    )
}