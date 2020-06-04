
    //   const student = remote.require('./Student.tsx');
    // const remote = require('electron').remote
    
    // const electron = require('electron');
    // const {ipcRenderer} = electron;
    //   <script>
    //       ipcRenderer.on('cohort:add', function(e, cohort) {
    //         ul.className = 'collection';
    //         const li = document.createElement('li');
    //         li.className = 'collection-item';
    //         const itemText = document.createTextNode(cohort);
    //         li.appendChild(itemText);
    //         ul.appendChild(li);
    //       });
    
    //       // clear cohorts
    //       ipcRenderer.on('cohort:clear', function() {
    //         ul.innerHTML = '';
    //         ul.className = '';
    //       });
    
    //       // remove cohort
    //       ul.addEventListener('dblclick', removeCohort);
    //       function removeCohort(e) {
    //         e.target.remove();
    //         if (ul.children.length == 0) {
    //           ul.className = '';
    //         }
    //       };
    //   </script>

    //   const button = document.createElement('button')
    //   button.textContent = 'Open Student Window'
    //   button.addEventListener('click', () => {
    //     student.openWindow('studentWindow')
    //   }, false)
    //   document.body.appendChild(button)

    import React from 'react';
    import ReactDOM from 'react-dom';
    import './index.css';
    import Student from './Student.tsx';
    
    ReactDOM.render(
      <React.StrictMode>
        <Student />
      </React.StrictMode>,
      document.getElementById('root')
    );