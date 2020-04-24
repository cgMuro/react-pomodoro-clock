import React from 'react';
import { Container, Row } from 'react-bootstrap';

import './App.css';
import Header from './components/Header';
import SetTimer from './components/SetTimer';
import Timer from './components/Timer';
import Controls from './components/Controls';
import { BreakProvider } from './context/BreakState';
import { SessionProvider } from './context/SessionState';
import { TimerProvider } from './context/TimerState';

function App() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center flex-column" id="App">
      <div className="row">
        <Header />
      </div>
      <SessionProvider>
        <BreakProvider>
          <div className="row" id="SetTimer">
            <SetTimer />
          </div>
          <div className="row" id="Timer">
            <Timer />
          </div>
          <TimerProvider>
            <div className="row">
              <Controls />
            </div>
          </TimerProvider>
        </BreakProvider>
      </SessionProvider>
    </div>
  );
}

export default App;
