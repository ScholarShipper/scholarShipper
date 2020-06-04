import React from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Moment from 'react-moment';
import { LinkContainer } from 'react-router-bootstrap';

const LogStudentInfo = (props) => {

  const setVariant = () => {
    if (props.log.priority === 'high') {
      return 'danger'
    } else if (props.log.priority === 'moderate') {
      return 'warning'
    } else {
      return 'secondary'
    }
  }

  return (
    <tr>
      <td><Badge variant={setVariant()} className='p-2'>{props.log.priority?.charAt(0).toUpperCase() + props.log.priority?.slice(1)}</Badge></td>
      <td>{props.log.student}</td>
      <td>{SCHOOL}</td>
      <td>{START YEAR}</td>
      <td>{COHORT ID}</td>
      <td>{props.log.note}</td>
    </tr>
  )
};

export default LogStudentInfo;