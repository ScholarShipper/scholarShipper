import React from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const LogItem = ({ log: { _id, priority, user, note, created }}) => {
  
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
      <td><Badge variant={setVariant()}>{priority}</Badge></td>
      <td>{note}</td>
      <td>{user}</td>
      <td>{created}</td>
      <td>
        <Button variant='danger' size='sm'>x</Button>
      </td>
    </tr>
  )
};

export default LogItem;