
      const electron = require('electron');
      const {ipcRenderer} = electron;
      const ul = document.querySelector('ul');

      // add cohort 
      ipcRenderer.on('cohort:add', function(e, cohort) {
        ul.className = 'collection';
        const li = document.createElement('li');
        li.className = 'collection-item';
        const itemText = document.createTextNode(cohort);
        li.appendChild(itemText);
        ul.appendChild(li);
      });

      // clear cohorts
      ipcRenderer.on('cohort:clear', function() {
        ul.innerHTML = '';
        ul.className = '';
      });

      // remove cohort
      ul.addEventListener('dblclick', removeCohort);
      function removeCohort(e) {
        e.target.remove();
        if (ul.children.length == 0) {
          ul.className = '';
        }
      }
