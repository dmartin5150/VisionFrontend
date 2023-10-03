import { DocInfo } from "../../App";
import { noDocInfo } from "../../App";

const getDocInfo = async (FIN:string)=> {
    const response = await fetch("http://localhost:5002/patientData", {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({'FIN': FIN})
    });
    if (response) {
      const patientName: DocInfo[] = await response.json();
      console.log('patient name', patientName)
      return patientName
    }
    return noDocInfo
};

export default getDocInfo;