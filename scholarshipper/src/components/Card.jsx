import React, { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
const { ipcRenderer } = window.require('electron');

const Card = (props) => {
  const { cohortData } = props;

  return (
    <div className="card" style={styles.card}>
      <div className="card-body">
        <h5 className="card-title">Cohort</h5>
        <LinkContainer to={`/Student/${cohortData.cohort_id}`}>
          <a className="card-text">{cohortData.start_year}</a>
        </LinkContainer>
      </div>
    </div>
  )
}

export default Card;

const styles = {
  card: {
    padding: '2rem 4rem',
    boxShadow: '0px 3px 5px rgba(0,0,0,0.1)',
    marginBottom: '2rem'
  }
}