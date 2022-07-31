import image from '../styles/image.png'

export default function GeneralInfo ({ handleChange, inputs}) {
    return (
        <div className='generalContainer'>
            <section>
                    <h2>Personal Information</h2>
                <div>
                    <input 
                        type='text' 
                        name='firstName' 
                        value={inputs.firstName}  
                        onChange={handleChange} 
                        placeholder='First Name' 
                    />
                    <input 
                        type='text' 
                        name='lastName' 
                        value={inputs.lastName} 
                        onChange={handleChange} 
                        placeholder='Last Name' 
                    />
                    <input 
                        type='text' 
                        name='title' 
                        value={inputs.title} 
                        onChange={handleChange} 
                        placeholder='Title' 
                    />
                    <input 
                        type='text' 
                        name='adress' 
                        value={inputs.adress} 
                        onChange={handleChange} 
                        placeholder='Adress' 
                    />
                    <input 
                        type='text' 
                        name='email' 
                        value={inputs.email} 
                        onChange={handleChange} 
                        placeholder='Email' 
                    />
                    <input 
                        type='text' 
                        name='phoneNumber' 
                        value={inputs.phoneNumber} 
                        onChange={handleChange} 
                        placeholder='Phone number' 
                    />
                    <textarea 
                        name='description'
                        maxLength={'400'} 
                        value={inputs.description} 
                        onChange={handleChange} 
                        placeholder='Description'>
                    </textarea>
                    <label>
                        Add your photo
                        <img src={image} alt='Your img'/>
                        <input 
                          name='photo'
                          type='file' 
                          placeholder='Photo'
                          accept="image/*"
                          onChange={(e) => handleChange(e)} 
                        />
                    </label>
                </div>
            </section>
        </div>
        
    )
}