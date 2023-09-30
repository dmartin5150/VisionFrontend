import React from 'react';
import './patientInfo.scss'

interface PatientInfoProps {
    patient: {
        'name':string,
        'FIN':string,
        'MRN':string
    };
}

export type PatientID = {
    MRN:string,
    FIN:string
}

const PatientInfo: React.FC<PatientInfoProps> = ({patient}) => {
    const {name,FIN, MRN } = patient
    const date = new Date();
    return (
        <div className='patient-info'>
            <div className='patient-name'>Name: {name}</div>
            <div className='patient-FIN'>FIN:{FIN}</div>
            <div className='patient-MRN'>MRN:{MRN}</div>
            <div className='patient-upadated'>Last Updated:{date.toLocaleString()}</div>
        </div>
    )
}
export default PatientInfo