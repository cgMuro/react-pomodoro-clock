import React, { useContext, useState } from 'react';
import { SessionContext } from '../context/SessionState';
import { BreakContext } from '../context/BreakState';
import { TimerTimeContext } from '../context/TimerTimeState';

export default function Timer() {

    const { sessionTime, sessionIsRunning } = useContext(SessionContext);
    const { breakTime } = useContext(BreakContext);
    const { timerTime, showTimerTime } = useContext(TimerTimeContext);

    return (
        <>
            <div className="container-fluid d-flex flex-column align-items-center">
                <h4 id="timer-label">{sessionIsRunning.current ? 'Session' : 'Break'}</h4>
                <h1 id="time-left">
                    {
                        sessionIsRunning.current
                            // Session time
                            ? !showTimerTime ? `${("0" + sessionTime).slice(-2)}:00` : timerTime
                            // Break time
                            : !showTimerTime ? `${("0" + breakTime).slice(-2)}:00` : timerTime
                    }
                </h1>
            </div>
        </>
    )
}