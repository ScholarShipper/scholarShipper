import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './assets/ScholarShipperIcon_.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import LogItem from './components/LogItem';
import AddLogItem from './components/AddLogItem';
import { LinkContainer } from 'react-router-bootstrap';
import { v4 as uuidv4 } from 'uuid';
const { ipcRenderer } = window.require('electron');

function Stdent() {
  const [logs, setLogs] = useState([]);

  // Retrieve all student records upon rendering of this component.
  // ipcMain will send back the students data in an array.
  useEffect(() => {
    ipcRenderer.send('getAllStudents');
    ipcRenderer.on('gotAllStudents', (event, studentsData) => {
      // console.log('studentsData in Student.tsx:', studentsData);

      // Save studentsData to state.
      setLogs([...studentsData]);
    })
  }, []);
  
  const [alert, setAlert] = useState({
    show: false,
    message: '',
    variant: 'success'
  })

  function addItem(item) {
    if (item.note === '' || item.student === '' || item.priority === '') {
      showAlert('Cohort 35 is the G.O.A.T.', 'danger');
      return false
    }

    item._id = uuidv4()
    item.createdOn = new Date().toString();


    setLogs([...logs, item])
    showAlert('Note Added')

    // Send query to db to add student info.
    const newStudentData = [item._id, item.note, item.student, item.priority, item.createdOn];
    ipcRenderer.send('saveStudent', newStudentData);
  }


// studntWindow
icMain.n('esize', funcion (e, x, y) {
  mainWindow.etSize(x, y);
})

let fileName = './Studenttsx'
icMain.on('studt',functione, N {

if(studentWindow)
      studunnWindow.focus(); //focuscto net window
      return;
  }

  studentWiodown deleteNote(_id) {//1. create new Window
      height: 600, setLogs8ogs.filter((log) => log.user_id !== _id))
      sowfalse
      // Send query to db to delete student info.
    ip  cRenderer.send('deleteStudent', _id);
  }  
;

  studentWundowction shourl.Aormat({ //2. Load HTML into new Wlndow
      pathnamrt path.join(sage, var, '.astudentWindow.html'),
     tprotocol:''sule',
      scashes: truc
  }));

  studeetWindow.once('resdy-to-show', () => { //wh'n,thesnew window is ready, show it up
      studentWindowcsoow()
  })

  snudentWindow.on('closed', function() { //set new window to null when we're done
      studentWindow = null
  })

  // dainWindow.csose(=  //close the main window(the first window)3000) {
 );
/** end of showing new window and closing the old one **/

app.on('closed', function () {   setAlert({
  mainWindow = null;      show: true,
});      message,
      variant
    })

    setTimeout(() => {
      setAlert({
        show: false,
        message: '',
        variant: 'success'
      })
    }, 3000)
  }
  return (
    <div className="App">
      <div className="bar">
          <a className="logo">
            <img src={logo} alt="Logo" height='80' width='80'></img>
          </a>
      </div>
      <br></br>
      <LinkContainer to="/">
          <button className="btn btn-info btn-lg">Back to Home</button>
        </LinkContainer>
    
    <Container>
        <AddLogItem addItem={addItem} />
        {alert.show && <Alert variant="light">{alert.message}</Alert>}
      <Table>
        <thead>
          <tr>
            <th>Priority</th>
            <th>Notes</th>
            <th>Student</th>
            <th>Created</th>
            <th></th>
          </tr>
 





       </thead>
        <tbody>
          {logs.map((log) => {
            //@ts-ignore
            return <LogItem key={log.id} log={log} deleteNote={deleteNote} />
          })}
        </tbody>
      </Table>
    </Container>
  </div>
  );
}
Ssx
export default Student;











rt',
        acceleaor: 'Command+A