import React from 'react';
import '../styles/About.css'
import about from '../images/about.png'

const About = () => {
  return (
    <div >
      <h2 className='title' id='about'>ABOUT</h2>
      <div className='about-container'>
        <img src={about} alt='me' className='photo'/>
        <div className='about'>
          <p>Hello, my name is Maria and you are in my creative enviroment. I am a third year Software Engineer student
          at Technical University of Moldova, and during my years of study I developed multiple codding project.
          Here is the space where I want to showcase them and document them for my autobiography.</p>
        </div>
      </div>
      <div className='pop-container'>
        <p className='data'>Name: Afteni Maria</p> 
        <p className='data'>Age: 20</p> 
        <p className='data'>Occupation: Student</p> 
      </div>

      
    </div>
  );
};

export default About;
