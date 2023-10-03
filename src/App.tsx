import React, {useState, useEffect} from 'react';
import './App.css';
import ListItem from './components/ListItems/ListItem';
import PatientInfo from './components/patientInfo/patientInfo';
import getMRNFIN from './utilities/fetchdata/getBlockData';
import getPatientName from './utilities/fetchdata/getPatientName';
import getDocInfo from './utilities/fetchdata/getDocInfo';
import { PatientID } from './components/patientInfo/patientInfo';

const items = [
  {'name': 'falls','status': 'complete'},
  {'name':'Isolation Precautions', 'status': 'incomplete'}
]

const patient = {'name':'Seamless Apple', 'MRN':'1111111', 'FIN':'00000000'}

const noPatientID = {
  'MRN':'',
  'FIN':''
}

type Patient = {
  name:string;
  id: PatientID
}

const noPatient:Patient = {
  name:'',
  id:noPatientID
}


export type DocInfo = {
  docType:string;
  docStatus:string;
}

export const noDocInfo:DocInfo[] = [{docType:'',docStatus:''}]



function App() {
  const [patientID, setPatientID] = useState<PatientID>(noPatientID)
  const [patientFound, setPatientFound] = useState(false)
  const [patient, setPatient] = useState<Patient>(noPatient)
  const [docStats, setDocStats] = useState<DocInfo[]>(noDocInfo)

  async function getPatientID() {
    const patId= await getMRNFIN()
    if (patId !== patientID) {
      setPatientID(patId)
      const patientName = await getPatientName(patId.FIN)
      console.log(patientName)
      if (patientName === '') {
        setPatient(noPatient)
        setDocStats(noDocInfo)
        return 
      } else if (patientName !== patient.name){
        const curPatient:Patient = {name:patientName, id:patId}
        const curDocInfo = await getDocInfo(patId.FIN)
        setPatient(curPatient)
        setDocStats(curDocInfo)
      }
    }

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
    async function getPatientDocInfo() {

      if (patient.name !== ''){
        const docInfo = await getDocInfo(patient.id.FIN)
        setDocStats(docInfo)
      }
    }
    getPatientDocInfo()

  }

  return (
    <div className="App">
      <div className='document-table'>
        <div className='document-header'>
          {patientFound ? 
            <div className='document-patient'>
            <PatientInfo patientName={patient.name} patientID={patient.id} />
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
          {docStats.map((item, idx) => 
              <li key={idx}>
                <ListItem docInfo={item} />
              </li>
          )}
        </ul>}
      </div>
    </div>
  );
}

export default App;
