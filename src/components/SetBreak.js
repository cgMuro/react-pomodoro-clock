import React, { useContext } from 'react';
import { BreakContext } from '../context/BreakState';

export default function SetBreak() {

    const { breakTime, addTime, subTime } = useContext(BreakContext);

    return (
        <>
            <div className="text-center">
                <h3>Set Break Length</h3>
            </div>
            <div className="d-flex flex-row justify-content-center">
                <button className="btn mb-3" onClick={() => subTime()}><i className="fa fa-arrow-down"></i></button>
                <h3>{breakTime}</h3>
                <button className="btn mb-3" onClick={() => addTime()}><i className="fa fa-arrow-up"></i></button>
            </div>
        </>
    )
}
