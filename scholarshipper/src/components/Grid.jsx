import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Cards from './Card.jsx';

const Grid = (props) => {
  const { cohort } = props;
  return (
    <Container>
      <Row>
        <Col><Cards /></Col>
        <Col><Cards /></Col>
        <Col><Cards /></Col>
      </Row>
      <Row>
        <Col><Cards /></Col>
        <Col><Cards /></Col>
        <Col><Cards /></Col>
      </Row>
    </Container>
  )
}

export default Grid;