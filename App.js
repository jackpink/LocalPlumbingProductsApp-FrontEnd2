import React from 'react';
import './App.css';
import Filter from './Filter';
import Results from './Results';
import {Container, Row} from "react-bootstrap";


function App() {
  return (
    <Container>
      <div className="App">
        <Row>
          <p>here</p>
        </Row>
        <Row>
          <Filter name="jack"/>
        </Row>
        <Row>
          <Results />
        </Row>
      </div>
    </Container>
  );
}

export default App;
