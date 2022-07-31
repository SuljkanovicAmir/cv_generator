/* eslint-disable no-restricted-globals */
import './styles/App.css';
import Form from './components/Form';
import Preview from './components/Preview';
import React, { useState, useRef } from 'react'
import { useReactToPrint } from 'react-to-print'


const initialInput = {
    firstName: '',
    lastName: '',
    title: '',
    adress: '',
    email: '',
    phoneNumber: '',
    description: '',
    photo: '',
}

const inititalExperience = {
  companyName: '',
  position: '',
  city: '',
  from: '',
  to:'',
}

const initialEducation = {  
  schoolName: '',
  degree: '',
  eduCity: '',
  eduFrom: '',
  eduTo:'',
}


function App() {
  
  const [inputs, setInputs] = useState(initialInput)
  const [experience, setExperience] = useState(inititalExperience)
  const [education, setEducation] = useState(initialEducation)


  function handleChange (e) {
    const {name, value, type } = e.target
    if (type === 'file') {
      handleChangeFile(e)
      return
    }
    setInputs({...inputs,
      [name]: value,
    });
    setExperience({...experience,
        [name]: value,
    });
    setEducation({...experience,
      [name]: value,
    });
}

  const handleFormReset = () => {
    setInputs(initialInput)
    setExperience(inititalExperience);
    setEducation(initialEducation)
  }


  const handleChangeFile = (e) => {
    const { name } = e.target
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => {
      setInputs({...inputs,
          [name]: reader.result,
        });
    }
    reader.readAsDataURL(file) 
  }


  const printRef = useRef();
  const handleDownloadPdf = useReactToPrint({
    content: () => printRef.current,
  });



  return (
    <div className="App">
      <Form 
        inputs={inputs}  
        handleChange={handleChange} 
        experience={experience}
        education={education}
        handleDownloadPdf={handleDownloadPdf}
        handleFormReset={handleFormReset}
      />
      <Preview 
        inputs={inputs} 
        experience={experience}  
        education={education} 
        ref={printRef} 
      />
    </div>
  );
}




export default App;
