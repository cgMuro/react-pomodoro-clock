import React, { useContext, useState } from 'react';
import { BreakContext } from '../../context/BreakState';
import { PlayContext } from '../../context/PlayState';
import { TimerTimeContext } from '../../context/TimerTimeState';

export default function SetBreak() {

    const { breakTime, addTime, subTime } = useContext(BreakContext);
    const { setShowTimerTime } = useContext(TimerTimeContext);
    const { setPlay } = useContext(PlayContext);

    const [color, setColor] = useState('black');

    return (
        <>
            <div className="text-center">
                <h3 id="break-label">Set Break Length</h3>
            </div>
            <div className="d-flex flex-row justify-content-center">
                <button
                    id="break-decrement"
                    className="btn mb-3"
                    onClick={() => {
                        subTime();
                        setPlay(false);
                        setShowTimerTime(false);

                        // Change color when clicked
                        setColor('red')
                        setTimeout(() => {
                            setColor('black')
                        }, 100)
                    }}
                >
                    <i className="fa fa-arrow-down"></i>
                </button>
                <h3 id="break-length" style={{color}}>{breakTime}</h3>
                <button
                    id="break-increment"
                    className="btn mb-3"
                    onClick={() => {
                        addTime();
                        setPlay(false);
                        setShowTimerTime(false);
                        setColor('red');
                        setTimeout(() => {
                            setColor('black')
                        }, 100)
                    }}
                >
                    <i className="fa fa-arrow-up"></i>
                </button>
            </div>
        </>
    )
}
