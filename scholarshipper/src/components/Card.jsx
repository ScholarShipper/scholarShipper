import React from 'react';
import Card from 'react-bootstrap/Card';

const Cards = () => {
  return (
    <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Cohort</h5>
          <p class="card-text"># goes here</p>
          <a class="btn btn-primary btn-sm btn-info" href="#" role="button" onClick="studentPopUp()">Link</a>
        </div>
      </div>
  )
}

export default Cards;
