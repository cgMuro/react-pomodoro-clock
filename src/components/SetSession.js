import React, { useContext } from 'react';
import { SessionContext } from '../context/SessionState';

export default function SetSession() {

    const { sessionTime, addTime, subTime, setTimerTime } = useContext(SessionContext);


    return (
        <>
            <div className="text-center">
                <h3>Set Session Length</h3>
            </div>
            <div className="d-flex flex-row justify-content-center">
                <button
                    className="btn mb-3"
                    onClick={() => {
                        subTime();
                        setTimerTime(() => sessionTime - 1);
                    }}>
                    <i className="fa fa-arrow-down" ></i>
                </button>
                <h3>{sessionTime}</h3>
                <button 
                    className="btn mb-3" 
                    onClick={() => {
                        addTime();
                        setTimerTime(() => sessionTime + 1);
                    }}>
                        <i className="fa fa-arrow-up"></i>
                    </button>
            </div>
        </>
    )
}
