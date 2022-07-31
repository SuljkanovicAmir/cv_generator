import '../styles/Form.css'
import GeneralInfo from './Info'
import PracticalInfo from './Practical'
import EducationInfo from './Education'




export default function Form ({
    handleChange, 
    inputs, 
    experience, 
    education, 
    handleDownloadPdf, 
    handleFormReset
}){
    return (
        <div className='formContainer'>
            <h1>Create CV</h1>
            <form onReset={handleFormReset}>
                <GeneralInfo   handleChange={handleChange} inputs={inputs}/>
                <PracticalInfo handleChange={handleChange} experience={experience}/>
                <EducationInfo handleChange={handleChange} education={education}/>
                <div className='formBtn'>
                    <button type='button' onClick={handleDownloadPdf}>Generate PDF</button>
                    <button onClick={(e) => e.preventDefault()}>Load Example</button>
                    <button type='reset' value='Reset'>Reset</button>
                </div>   
            </form>
        </div>
        
    )
}