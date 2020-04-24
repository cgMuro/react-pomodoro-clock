import React, { createContext, useState, useContext } from 'react';

import { SessionContext } from './SessionState';


export const TimerTimeContext = createContext();

export const TimerTimeProvider = (props) => {

    const { sessionTime } = useContext(SessionContext);


    const [ timerTime, setTimerTime ] = useState(sessionTime);
    const [ showTimerTime, setShowTimerTime ] = useState(false);



    return (
        <TimerTimeContext.Provider value={{ timerTime, setTimerTime, showTimerTime, setShowTimerTime }}>
            { props.children }
        </TimerTimeContext.Provider>
    )
}