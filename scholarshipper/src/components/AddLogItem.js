import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const AddLogItem = ({ addItem }) => {
  const [note, setNote] = useState('')
  const [student, setStudent] = useState('')
  const [priority, setPriority] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();
    addItem({ note, student, priority })

    setNote('');
    setStudent('');
    setPriority('');
  }

  return (
    <Card className='mt-5 mb-3'>
      <Card.Body>
        <Form onSubmit={onSubmit}>
          <Row className='my-3'>
            <Col>
              <Form.Control placeholder='Notes' value={note}
              onChange={(e) => setNote(e.target.value)} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                placeholder='Student Name'
                value={student}
                onChange={(e) => setStudent(e.target.value)}
              />
            </Col>
            <Col>
              <Form.Control as='select' value={priority} onChange={(e) =>
              setPriority(e.target.value)}>
                <option value="0">Select Priority</option>
                <option value="low">Low</option>
                <option value="moderate">Moderate</option>
                <option value="high">High</option>
              </Form.Control>
            </Col>
          </Row>
          <Row className='my-3'>
            <Col>
              <Button type='submit' variant='primary' block>
                Add Student Notes
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default AddLogItem