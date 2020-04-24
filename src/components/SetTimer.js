import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import SetBreak from './SetBreak';
import SetSession from './SetSession';

export default function SetTimer() {
    return (
        <>
            <Col id="SetBreak"> <SetBreak /> </Col>
            <Col id="SetSession"> <SetSession /> </Col>
        </>
    )
}