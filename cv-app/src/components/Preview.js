import '../styles/Preview.css'
import avatar from '../styles/avatar.jpg'
import React, {forwardRef} from 'react';


function Preview({inputs, experience, education}, ref) {
    return (
    <div className='previewContainer'>
        <h1>Preview</h1>
        <div ref={ref} className='cvPreview'>
            <header>
                 <h1>{inputs.firstName} {inputs.lastName}</h1>
                <h3>{inputs.title}</h3>
            </header>
            <div className='bodyPreview'>
                <div className='mainInfo'>
                    <div>
                        <h2>Description</h2>
                        <hr></hr>
                        <p>{inputs.description}</p>
                    </div>
                    <div>
                        <h2>Experience</h2>
                        <hr></hr>
                        <div className='experience'>
                            <h4>{experience.from}-{experience.to}</h4>
                            <div>
                                <h5>{experience.position}</h5>
                                <p>{experience.companyName}, </p>
                                <span> {experience.city}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>Education</h2>
                        <hr></hr>
                        <div className='eduExperience'>
                            <h4>{education.eduFrom}-{education.eduTo}</h4>
                            <div>
                                <h5>{education.schoolName}, </h5>  
                                <span> {education.eduCity}</span>
                                <p>Degree: {education.degree} </p>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className='personalSidebar'>
                    <img src={inputs.photo || avatar} alt='person'/>
                    <h2>Personal Details</h2>
                    <hr></hr>
                    <h3>Adress</h3>
                    <p>{inputs.adress}</p>
                    <h3>Phone Number</h3>
                    <p>{inputs.phoneNumber}</p>
                    <h3>Email</h3>
                    <p>{inputs.email}</p>
                </div>
            </div>
        </div>
    </div>
    )
};

const forwardPreview = forwardRef(Preview)

export default forwardPreview