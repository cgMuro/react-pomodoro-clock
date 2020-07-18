import React from 'react';
import './App.css';
import Header from './components/Header';
import SetTimer from './components/setting_the_timer/SetTimer';
import Timer from './components/Timer';
import Controls from './components/Controls';
import { BreakProvider } from './context/BreakState';
import { SessionProvider } from './context/SessionState';
import { PlayProvider } from './context/PlayState';
import { TimerTimeProvider } from './context/TimerTimeState';

function App() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center flex-column" id="App">
      <div className="row mt-5 mb-4">
        <Header />
      </div>
      <SessionProvider>
        <BreakProvider>
          <PlayProvider>
            <TimerTimeProvider>
              <div className="row mt-5 mb-5" id="SetTimer">
                <SetTimer />
              </div>
              <div className="row mt-5 mb-5" id="Timer">
                <Timer />
              </div>
              <div className="row mt-5 mb-5">
                <Controls />
              </div>
            </TimerTimeProvider>
          </PlayProvider>
        </BreakProvider>
      </SessionProvider>
    </div>
  );
}

export default App;
