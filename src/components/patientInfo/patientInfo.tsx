import React from 'react';
import './patientInfo.scss'

export type PatientID = {
    MRN:string,
    FIN:string
}


interface PatientInfoProps {
    patientName:string,
    patientID: PatientID
}



const PatientInfo: React.FC<PatientInfoProps> = ({patientName, patientID}) => {
    const {FIN, MRN } = patientID
    const date = new Date();
    return (
        <div className='patient-info'>
            <div className='patient-name'>Name: {patientName}</div>
            <div className='patient-FIN'>FIN - {FIN}</div>
            <div className='patient-MRN'>MRN - {MRN}</div>
            <div className='patient-upadated'>Last Updated:{date.toLocaleString()}</div>
        </div>
    )
}
export default PatientInfo