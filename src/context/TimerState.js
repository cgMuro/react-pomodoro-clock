import React, { createContext, useReducer } from 'react';
export const TimerContext = createContext();


const TimerReducer = (state, { type }) => {
    switch (type) {
        case 'START_TIMER':
            return {
                ...state,
                start: true,
                stop: false,
                reset: false,
            }
        case 'STOP_TIMER':
            return {
                ...state,
                start: false,
                stop: true,
                reset: false,
            }
        case 'RESET_TIMER':
            return {
                ...state,
                start: false,
                stop: false,
                reset: true,
            }
        case 'PLAY_PAUSE': 
            console.log('hey');
            return !state;
        default:
            return state
    }
}


export const TimerProvider = (props) => {

    const [timer, dispatch] = useReducer(TimerReducer, {
        start: false,
        stop: false,
        reset: false
    });

    const [ playPause, playPauseDispatch ] = useReducer(TimerReducer, true);

    const setPlayPause = () => {
        playPauseDispatch({ type: 'PLAY_PAUSE' });
    }


    return (
        <TimerContext.Provider value={{ timer, dispatch, playPause, setPlayPause }}>
            {props.children}
        </TimerContext.Provider>
    )
}