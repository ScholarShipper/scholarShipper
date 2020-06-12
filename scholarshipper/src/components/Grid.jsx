import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from './Card.jsx';

const Grid = (props) => {
  const { cohortData } = props;
  
  const cardArr = cohortData.map((cohort, idx) => {
    return <Card key={cohort.cohort_id} cohortData={cohort} />
  })
  
  return (
    <Container id="cohort-cards" style={styles.cohortCards}>
      {cardArr}
    </Container>
  )
}

export default Grid;

const styles = {
  cohortCards: {
    display: 'grid',
    gridGap: '1em',
    gridTemplateColumns: 'repeat(3, 1fr)',
  }
}