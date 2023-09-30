import React from 'react';
import './App.css';
import ListItem from './components/ListItems/ListItem';
import PatientInfo from './components/patientInfo/patientInfo';
import getMRNFIN from './utilities/fetchdata/getBlockData';
import { PatientID } from './components/patientInfo/patientInfo';

const items = [
  {'name': 'falls','status': 'complete'},
  {'name':'sitter', 'status': 'incomplete'}
]

const patient = {'name':'Seamless Apple', 'MRN':'1111111', 'FIN':'00000000'}


function App() {


  const handleRefreshData = () => {
    console.log(getMRNFIN())
  }

  return (
    <div className="App">
      <div className='document-table'>
        <div className='document-header'>
          <div className='document-patient'>
            <PatientInfo patient={patient} />
          </div>
          <div className='refresh-button'>
            <button onClick={handleRefreshData}>Refresh Data</button>
          </div>
        </div>
        <div className='document-items'>
            <div className='document-items--name'>Document</div>
            <div className='document-items--status'>Status</div>
        </div> 
        <ul className='document-list'>
          {items.map((item, idx) => 
              <li key={idx}>
                <ListItem item={item} />
              </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
