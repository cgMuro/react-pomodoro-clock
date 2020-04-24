import React, { useState, useContext } from 'react';
import { SessionContext } from '../context/SessionState';
import { BreakContext } from '../context/BreakState';
import { TimerContext } from '../context/TimerState';


export default function Controls() {

    const { sessionTime, timerTime, setTimerTime } = useContext(SessionContext);

    const { breakTime, startBreak, setStartBreak } = useContext(BreakContext);

    const { timer, dispatch, playPause, setPlayPause } = useContext(TimerContext);


    

    // let intervalID;

    // const startTimer = (time) => {

    //     let minutes = time - 1;
    //     let seconds = 60;

    //     setTimerTime(`${time}:00`);

    //     intervalID = setInterval(() => {
    //         // Update time every second
    //         seconds--;
    //         setTimerTime(`${("0" + minutes).slice(-2)}:${seconds}`);
    //         // Update minutes when seconds are zero
    //         if (seconds === 0) {
    //             seconds = '00';
    //             setTimeout(() => {
    //                 seconds = 59;
    //                 minutes--;
    //                 setTimerTime(`${("0" + minutes).slice(-2)}:${seconds}`);
    //             }, 1000)
    //         };


    //         if(playPause === false) {
    //             clearInterval(intervalID);
    //         }

    //     }, 1000);
    // }

    // const stopTimer = (time) => {

    //     setTimerTime(time);
    //     clearInterval(intervalID);
    // }

    // const resetTimer = (time) => {

    //     dispatch({ type: 'RESET_TIMER' });

    //     clearInterval(intervalID);
    //     setTimerTime(time);
    // }


    const timerTimer = () => {

        // if (playPause) {
        //     // dispatch({ type: 'START_TIMER' });
        //     startTimer(timerTime);
        //     setPlayPause((prevState) => !prevState);
        // } else {
        //     // dispatch({ type: 'STOP_TIMER' });
        //     stopTimer(timerTime);
        //     setPlayPause((prevState) => !prevState);
        // }


        // if (timer.start) {
        //     startTimer(timerTime);
        // } else if (timer.stop) {
            
        // }

        let intervalID;

        let minutes = timerTime - 1;
        let seconds = 60;

        setTimerTime(`${timerTime}:00`);

        intervalID = setInterval(() => {
            // Update time every second
            seconds--;
            setTimerTime(`${("0" + minutes).slice(-2)}:${seconds}`);
            // Update minutes when seconds are zero
            if (seconds === 0) {
                seconds = '00';
                setTimeout(() => {
                    seconds = 59;
                    minutes--;
                    setTimerTime(`${("0" + minutes).slice(-2)}:${seconds}`);
                }, 1000)
            };

            console.log(playPause, 'befrore')
            if(playPause === false) {
                clearInterval(intervalID);
            }

        }, 1000);

    }


    return (
        <div>
            <i 
                className={`fa ${playPause ? 'fa-play' : 'fa-pause'}`} 
                onClick={() => {
                    timerTimer();
                }}></i>
            <i 
                className="fa fa-repeat ml-3"
                onClick={() => {
                    // dispatch({ type: 'RESET_TIMER' });
                    // resetTimer(sessionTime, breakTime);
                }}>
            </i>
        </div >
    )
}








// const timer = () => {

//     let interval;
//     let minutes;
//     let seconds;




//     setPlayPause((prevState) => !prevState);
//     setTimerTime(`${timerTime}:00`);

//     if (playPause) {

//         minutes = timerTime - 1;
//         seconds = 60;

//         interval = setInterval(() => {

//             // Update time every second
//             seconds--;
//             setTimerTime(`${("0" + minutes).slice(-2)}:${seconds}`);

//             // Update minutes when seconds are zero
//             if (seconds === 0) {
//                 seconds = '00';
//                 setTimeout(() => {
//                     seconds = 59;
//                     minutes--;
//                     setTimerTime(`${("0" + minutes).slice(-2)}:${seconds}`);
//                 }, 1000)
//             };


//             // Start break when session finishes
//             // if (minutes === 0 && seconds === 0) {
//             //     clearInterval()
//             // }

//         }, 1000);
//     }

//     if (!playPause) {
//         console.log(minutes, seconds);
//         setTimerTime(`${("0" + minutes).slice(-2)}:${seconds}`);
//         clearInterval(interval);


//     } else if (reset) {

//         setPlayPause((prevState) => !prevState);
//         reset = false;

//         clearInterval(interval);
//         setTimerTime(sessionTime);

//         console.log('hey');
//     }


// }


// const timer = () => {

//     setTimerTime(`${timerTime}:00`);

//     let minutes = timerTime - 1;
//     let seconds = 60;
//     let intervalID;



//     if (play) {
//         intervalID = setInterval(() => {
//             seconds--;
//             setTimerTime(`${("0" + minutes).slice(-2)}:${seconds}`);


//             if (seconds === 0) {
//                 seconds = '00';
//                 setTimeout(() => {
//                     seconds = 59;
//                     minutes--;
//                     setTimerTime(`${("0" + minutes).slice(-2)}:${seconds}`);
//                 }, 1000)
//             };


//         }, 1000);

//         setPlayPause((prevState) => !prevState);

//         if (play === false) {
//             clearInterval(intervalID);
//             setTimerTime(timerTime);
//             console.log('dbasi');
//         }
//     }

//     if (reset) {
//         clearInterval(intervalID);

//     }



//     play = !play;
//     console.log(play)
// }