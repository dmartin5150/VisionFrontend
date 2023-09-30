
import { PatientID } from "../../components/patientInfo/patientInfo";

const getMRNFIN = async ()=> {
      const response = await fetch("http://localhost:5001/patientData", {
        method:'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      if (response) {
        const data: PatientID = await response.json();
        console.log('data', data)
        return data
      }
      return {
        MRN:'',
        FIN:''
      }
  };

  export default getMRNFIN;