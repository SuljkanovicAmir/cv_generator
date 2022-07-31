
export default function EducationInfo ({education, handleChange}) {
    return (
        <div className='educationContainer'>
            <section>
                    <h2>Education</h2>
                <div>
                    <input type='text' 
                        name='schoolName'
                        value={education.schoolName}  
                        onChange={handleChange}
                        placeholder='School name'          
                    />
                    <input 
                        type='text'
                        name='degree'
                        value={education.degree}  
                        onChange={handleChange}
                        placeholder='Degree' 
                    />
                    <input 
                        type='text'
                        name='eduCity'
                        value={education.eduCity}  
                        onChange={handleChange}
                        placeholder='City' 
                    />
                    <input 
                        type='text' 
                        name='eduFrom'
                        value={education.eduFrom}  
                        onChange={handleChange}
                        placeholder='From' 
                    />
                    <input 
                        type='text'
                        name='eduTo'
                        value={education.eduTo}  
                        onChange={handleChange}
                        placeholder='To' 
                    />
                    <div className='infoButtons'>
                        <button onClick={(e) => e.preventDefault()}>Delete</button>
                        <button onClick={(e) => e.preventDefault()}>Add</button>
                    </div>
                </div>
            </section>
        </div>
        
    )
}