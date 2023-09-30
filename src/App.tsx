import React, {useState, useEffect} from 'react';
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

const noPatientID = {
  'MRN':'',
  'FIN':''
}

function App() {
  const [patientID, setPatientID] = useState<PatientID>(noPatientID)
  const [patientFound, setPatientFound] = useState(false)

  async function getPatientID() {
    const patId = await getMRNFIN()
    setPatientID(patId)
    if (patId.MRN !== '' ) {
      setPatientFound(true)
    } else {
      setPatientFound(false)
    }
    console.log(patId)
  }

  useEffect(() => {
    setTimeout(() => getPatientID(), 2000);
  },[patientID])


  const handleRefreshData = () => {
    async function getPatientID() {
      const patId = await getMRNFIN()
      setPatientID(patId)
      if (patId.MRN !== '' ) {
        setPatientFound(true)
      } else {
        setPatientFound(false)
      }
      console.log(patId)
    }
    getPatientID()

  }

  return (
    <div className="App">
      <div className='document-table'>
        <div className='document-header'>
          {patientFound ? 
            <div className='document-patient'>
            <PatientInfo patientName='' patientID={patientID} />
          </div> :
            <div className='document-patient'> Patient Not Found</div>
          }
          <div className='refresh-button'>
            <button onClick={handleRefreshData}>Refresh Data</button>
          </div> 
        </div>
        {!patientFound && <div className='document-items'>
            <div className='document-items--name'>Document</div>
            <div className='document-items--status'>Status</div>
        </div> }
        {patientFound && <ul className='document-list'>
          {items.map((item, idx) => 
              <li key={idx}>
                <ListItem item={item} />
              </li>
          )}
        </ul>}
      </div>
    </div>
  );
}

export default App;
