import React, { useContext } from 'react';
import { SessionContext } from '../context/SessionState';
import { BreakContext } from '../context/BreakState';

export default function Timer() {

    const { sessionTime, timerTime } = useContext(SessionContext);

    const { breakTime, startBreak } = useContext(BreakContext);

    const session = (
        <>
            <h4> Session </h4>
            <h1>{timerTime === sessionTime ? `${("0" + sessionTime).slice(-2)}:00` : timerTime}</h1>
        </>
    );

    const breac = (
        <>
            <h4> Break </h4>
            <h1>{timerTime === breakTime ? `${("0" + breakTime).slice(-2)}:00` : timerTime}</h1>
        </>
    );



    return (
        <>
            <div className="container-fluid d-flex flex-column align-items-center">
                {!startBreak ? session : breac}
            </div>
        </>
    )
}


// id="timer-container"