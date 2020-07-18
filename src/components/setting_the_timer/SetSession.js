import React, { useContext, useState } from 'react';
import { SessionContext } from '../../context/SessionState';
import { PlayContext } from '../../context/PlayState';
import { TimerTimeContext } from '../../context/TimerTimeState';

export default function SetSession() {

    const { sessionTime, addTime, subTime } = useContext(SessionContext);
    const { setPlay } = useContext(PlayContext);
    const { setTimerTime, setShowTimerTime } = useContext(TimerTimeContext);

    const [color, setColor] = useState('black');


    return (
        <>
            <div className="text-center">
                <h3 id="session-label">Set Session Length</h3>
            </div>
            <div className="d-flex flex-row justify-content-center">
                <button
                    id="session-decrement" 
                    className="btn mb-3"
                    onClick={() => {
                        subTime();
                        setTimerTime(() => sessionTime - 1);
                        setPlay(false);
                        setShowTimerTime(false);

                        // Change color when clicked
                        setColor('green')
                        setTimeout(() => {
                            setColor('black')
                        }, 100)
                    }}>
                    <i className="fa fa-arrow-down"></i>
                </button>
                <h3 id="session-length" style={{color}}>{sessionTime}</h3>
                <button
                    id="session-increment" 
                    className="btn mb-3" 
                    onClick={() => {
                        addTime();
                        setTimerTime(() => sessionTime + 1);
                        setPlay(false);
                        setShowTimerTime(false);

                        // Change color when clicked
                        setColor('green')
                        setTimeout(() => {
                            setColor('black')
                        }, 100)
                    }}>
                        <i className="fa fa-arrow-up"></i>
                    </button>
            </div>
        </>
    )
}
