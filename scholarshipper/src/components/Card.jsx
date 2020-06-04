import React, { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Student from '../Student'
const { ipcRenderer } = window.require('electron');

const Card = (props) => {
  // props.cohortData contains cohort_id and start_year
  const { cohortData } = props;
  // const [students, setStudents] = useState([]);

  // useEffect(() => {
  //   // Initiate renderer process to ipcMain to query DB for cohort data.
  //   ipcRenderer.send('getstudentCohort',['']);
  //   // Catch the data sent back by ipcMain.
  //   ipcRenderer.on('gotStudentCohorts', (event, cohortData) => {
  //     setStudents([...students]);
  //   })
  // }, []);

  return (
    <div className="card">
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
