import React, { useContext, useRef, useEffect, useState } from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import { SessionContext } from '../context/SessionState';
import { BreakContext } from '../context/BreakState';
import { PlayContext } from '../context/PlayState';
import { TimerTimeContext } from '../context/TimerTimeState';

import useInterval from '../customHooks/useInterval';


export default function Controls() {

    const { sessionTime, sessionIsRunning } = useContext(SessionContext);
    const { breakTime } = useContext(BreakContext);
    const { play, setPlay } = useContext(PlayContext);
    const { setTimerTime, setShowTimerTime } = useContext(TimerTimeContext);

    const minutes = useRef(sessionTime - 1);
    const seconds = useRef(59);

    useEffect(() => {
        // Set the minutes and seconds every time sessionTime and breakTime are incremented or decremented
        if (sessionIsRunning.current) {
            minutes.current = sessionTime - 1;
            seconds.current = 59;
        } else {
            minutes.current = breakTime - 1;
            seconds.current = 59;
        }

        setTimerTime(`${("0" + minutes.current).slice(-2)}:${("0" + seconds.current).slice(-2)}`);

    }, [sessionTime, breakTime]);

    // TIMER FUNCTION
    const timer = () => {

        setPlay((prevState) => !prevState);
        // Show the time that changes
        setShowTimerTime(true);

        if (!play) {
            setTimerTime(`${("0" + minutes.current).slice(-2)}:${("0" + seconds.current).slice(-2)}`);
        }
    }


    // RESET FUNCTION
    const reset = () => {
        // Reset every value
        setPlay(false);
        setShowTimerTime(false)
        sessionIsRunning.current = true;
        setTimerTime(sessionTime);

        // Reset minutes and seconds
        minutes.current = sessionTime - 1;
        seconds.current = 59;
    }


    useInterval(() => {
        // Update time every second
        seconds.current--;
        setTimerTime(`${("0" + minutes.current).slice(-2)}:${("0" + seconds.current).slice(-2)}`);

        // Update minutes when seconds are zero
        if (seconds.current === 0) {

            setTimerTime(`${("0" + minutes.current).slice(-2)}:00`);

            if (minutes.current === 0) {
                // Start Break when Session finishes
                minutes.current = breakTime - 1;
                seconds.current = 60;

                // Switch to break
                sessionIsRunning.current = !sessionIsRunning.current;

                // If break ends start new cycle
                if (sessionIsRunning.current) {
                    minutes.current = sessionTime - 1;
                    seconds.current = 60;
                }

            } else {
                // Decrement minutes when seconds = 0 but not minutes
                setTimeout(() => {
                    seconds.current = 59;
                    minutes.current--;
                    setTimerTime(`${("0" + minutes.current).slice(-2)}:${("0" + seconds.current).slice(-2)}`);
                }, 1000);
            }
        };

    }, play ? 1000 : null);


    // Tooltips
    const tooltipStart_stop = (
        <Tooltip id="tooltipStart_stop">
            <p style={{ height: '0.5vh' }}>
                Click to {play ? 'pause' : 'play'}
            </p>
        </Tooltip>
    );

    const tooltipReset = (
        <Tooltip id="tooltipReset">
            <p style={{ height: '0.5vh' }}>
                Click to reset the timer
            </p>
        </Tooltip>
    );


    return (
        <div>
            <OverlayTrigger placement="bottom" overlay={tooltipStart_stop}>
                <i
                    id="start_stop"
                    className={`fa ${play ? 'fa-pause' : 'fa-play'}`}
                    onClick={() => {
                        timer();
                    }}></i>
            </OverlayTrigger>
            
            <OverlayTrigger placement="bottom" overlay={tooltipReset}>
                <i
                    id="reset"
                    className="fa fa-repeat ml-3"
                    onClick={() => {
                        reset();
                    }}>
                </i>
            </OverlayTrigger>
        </div >
    )
}