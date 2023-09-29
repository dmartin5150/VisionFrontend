import React from 'react';
import './App.css';
import ListItem from './components/ListItems/ListItem';
import PatientInfo from './components/patientInfo/patientInfo';

const items = [
  {'name': 'falls','status': 'complete'},
  {'name':'sitter', 'status': 'no'}
]

const patient = {'name':'Seamless Apple', 'MRN':'1111111', 'FIN':'00000000'}

function App() {
  return (
    <div className="App">
      <PatientInfo patient={patient} />
      <ul>
        {items.map((item, idx) => 
            <li key={idx}>
              <ListItem item={item} />
            </li>
        )}
      </ul>
    </div>
  );
}

export default App;
