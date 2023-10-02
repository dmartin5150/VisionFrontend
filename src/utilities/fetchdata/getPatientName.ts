

const getPatientName = async (FIN:string)=> {
      const response = await fetch("http://localhost:5002/patientName", {
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({'FIN': FIN})
      });
      if (response) {
        const patientName: string = await response.json();
        console.log('patient name', patientName)
        return patientName
      }
      return ''
  };

  export default getPatientName;