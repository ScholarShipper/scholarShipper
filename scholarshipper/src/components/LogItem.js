import React from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Moment from 'react-moment';

const LogItem = ({ 
  deleteNote,
  log: { _id, priority, student, note, created }}) => {
  
  const setVariant = () => {
    if (priority === 'high') {
      return 'danger'
    } else if (priority === 'moderate') {
      return 'warning'
    } else {
      return 'secondary'
    }
  }

  return (
    <tr>
      <td><Badge variant={setVariant()} className='p-2'>{priority.charAt(0).toUpperCase() + priority.slice(1)}</Badge></td>
      <td>{note}</td>
      <td>{student}</td>
      <td><Moment format='MMMM Do YYYY, h:mm:ss a'>{new Date(created)}</Moment></td>
      <td>
        <Button variant='danger' size='sm' onClick={() => deleteNote(_id)}>x</Button>
      </td>
    </tr>
  )
};

export default LogItem;