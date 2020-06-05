import React from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Moment from 'react-moment';
import { LinkContainer } from 'react-router-bootstrap';

const LogItem = (props) => {
  // console.log('props (LogItem):', props);
  console.log('props.log (LogItem):', props.log);

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
      <td><Badge variant={setVariant()} className='p-2'>{props.log.priority.charAt(0).toUpperCase() + props.log.priority.slice(1)}</Badge></td>
      <td>{props.log.notes}</td>
      <td>{props.log.first_name}</td>
      <td><Moment format='MMMM Do YYYY, h:mm:ss a'>{new Date(props.log.created_on)}</Moment></td>
      <td>
        <Button variant='danger' size='sm' onClick={() => props.deleteNote(props.log.user_id)}>x</Button>
      </td>
      <td>
        <LinkContainer to={`/StudentInfo/${props.log.user_id}`}>
          <button className="btn btn-primary btn-sm">More Info</button>
        </LinkContainer>
      </td>
    </tr>
  )
};

export default LogItem;