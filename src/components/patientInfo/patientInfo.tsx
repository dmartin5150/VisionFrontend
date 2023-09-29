import React from 'react';
import './patientInfo.css'

interface PatientInfoProps {
    patient: {
        'name':string,
        'FIN':string,
        'MRN':string
    };
}


const PatientInfo: React.FC<PatientInfoProps> = ({patient}) => {
    const {name,FIN, MRN } = patient
    return (
        <div className='patient-info'>
            <div className='patient-name'>Name: {name}</div>
            <div className='patient-FIN'>FIN:{FIN}</div>
            <div className='patient-MRN'>MRN:{MRN}</div>
        </div>
    )
}
export default PatientInfo