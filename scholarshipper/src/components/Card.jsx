import React from 'react';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';

const Cards = () => {
  return (
    <div class="card">
        <div class="card-body">
          <h5 class="card-title">Cohort</h5>
          <p class="card-text"># goes here</p>
          <LinkContainer to="/Student">
            <a class="btn btn-primary btn-sm btn-info" href="#" role="button" onClick="studentPopUp()">Link</a>
          </LinkContainer>
        </div>
      </div>
  )
}

export default Cards;
