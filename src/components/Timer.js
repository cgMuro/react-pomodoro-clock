import React, { useContext, useState } from 'react';
import { SessionContext } from '../context/SessionState';
import { BreakContext } from '../context/BreakState';
import { TimerTimeContext } from '../context/TimerTimeState';

export default function Timer() {

    const { sessionTime, sessionIsRunning } = useContext(SessionContext);
    const { breakTime } = useContext(BreakContext);
    const { timerTime, showTimerTime } = useContext(TimerTimeContext);

    const timerStyle = {
        color: 
            sessionIsRunning.current
            ? showTimerTime ? 'green' : 'black'
            : showTimerTime ? 'red' : 'black',
    }
    const containerStyle = {
        border: `5px solid 
            ${ sessionIsRunning.current
                ? showTimerTime ? 'green' : 'black'
                : showTimerTime ? 'red' : 'black'
            }`,
        borderRadius: '20%',
        padding: `20px ${sessionIsRunning.current ? '45px' : '57px'} 65px`,
        width: '20 rem'
    }

    return (
        <>
            <div className="container-fluid d-flex flex-column align-items-center" style={containerStyle}>
                <h4 id="timer-label" style={timerStyle}>{sessionIsRunning.current ? 'Session' : 'Break'}</h4>
                <h1 id="time-left" style={timerStyle} className="position-absolute mt-4 pt-2">
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