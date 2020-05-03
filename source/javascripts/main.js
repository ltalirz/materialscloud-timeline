/* global Lib, Timesheet */

(function(){
  'use strict';
  
  Lib.ready(function() {
    console.log('ads');
    
    /* jshint -W031 */
    new Timesheet('timesheet-default', 2016, 2020, [
      ['08/2015', 'Standard Solid-State Pseudopotentials go online'],
      ['11/2016', 'SeeK-path tool goes online'],
      ['03/2017', 'First submission to the Materials Cloud Archive', 'lorem'],
      ['07/2017', 'Materials Cloud Archive gets a database', 'lorem'],
      ['07/2017', 'Deployment on OpenStack platform at CSCS', 'ipsum'],
      ['07/2017', 'Materials Cloud "Jupyter section" (later => AiiDA lab)', 'ipsum'],
      ['11/2017', 'First official Quantum Mobile release'],
      ['12/2017', 'Materials Cloud BETA at beta.materialscloud.org', 'ipsum'],
      ['02/2018', 'Materials Cloud (LEARN, WORK, DISCOVER, EXPLORE, ARCHIVE) goes LIVE', 'ipsum'],
      ['02/2018', 'Archive indexed on re3data + SNF DMP templates', 'lorem'],
      ['06/2018', 'ShiftML tool for predicting NMR chemical shifts'],
      ['08/2018', 'Archive gets an upload form!', 'lorem'],
      ['09/2018', 'Archive recommended repository by Nature Scientific Data', 'lorem'],
      ['09/2018', 'Discover section on topological materials'],
      ['10/2018', 'Discover section on covalent organic frameworks'],
      ['11/2018', 'Interactive phonon visualizer'],
      ['11/2018', 'AlphaML tool for prediction molecular polarizabilities'],
      ['01/2019', 'Archive indexed by Google Dataset Search', 'lorem'],
      ['01/2019', 'Synthesis condition finder tool for robotic synthesis'],
      ['02/2019', 'Discover section on C-C cross-coupling catalysts'],
      ['03/2019', 'First AiiDA lab instance on scalable CSCS kubernetes cluster', 'ipsum'],
      ['07/2019', 'Quantum ESPRESSO input generator'],
      ['07/2019', 'Discover/Explore sections on covalent organic frameworks'],
      ['07/2019', 'Discover/Explore section on tail-corrections in MD simulations'],
      ['10/2019', 'Archive reaches 100 data records (+versions)', 'lorem'],
      ['12/2019', 'Discover section on metal-organic frameworks for CO2 capture'],
      ['03/2020', 'Discover/Explore section on hypothetical COFs for CO2 capture'],
      ['03/2020', 'Pre-print of Materials Cloud paper', 'ipsum'],
      ['04/2020', 'Fireside chats for lockdown times'],
      ['05/2020', 'Archive moves to scalable invenio 3 framework', 'lorem']
    ]);

    document.querySelector('#switch-dark').addEventListener('click', function() {
      document.querySelector('body').className = 'index black';
    });

    document.querySelector('#switch-light').addEventListener('click', function() {
      document.querySelector('body').className = 'index white';
    });
  });
})();
