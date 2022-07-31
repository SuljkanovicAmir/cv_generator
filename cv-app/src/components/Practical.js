
export default function PracticalInfo ({ experience, handleChange }) {
    return (
        <div className='practicalContainer'>
            <section>
                    <h2>Experience</h2>
                <div>
                    <input 
                        type='text' 
                        name='position'
                        value={experience.position}  
                        onChange={handleChange}
                        placeholder='Position title' 
                    />
                     <input 
                        type='text'  
                        name='companyName' 
                        value={experience.companyName}  
                        onChange={handleChange}  
                        placeholder='Company name' 
                    />
                    <input 
                        type='text'
                        name='city'
                        value={experience.city}  
                        onChange={handleChange} 
                        placeholder='City' 
                    />
                    <input 
                        type='text'
                        name='from'
                        value={experience.from}  
                        onChange={handleChange}
                        placeholder='From' 
                    />
                    <input 
                        type='text'
                        name='to'
                        value={experience.to}  
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