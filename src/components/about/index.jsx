import React from 'react';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

const index = () => {
  return (
    <section className='main-content '>
      <div className='home-index-container'>
        {/* Experience & Education Starts */}
        <div className='row'>
          <div className='col-12'>
            <h3 className='mt-5 text-center'>
              Experience <span>&</span> Education
            </h3>
          </div>
          <div className='col-lg-6 m-15px-tb'>
            <div className='resume-box'>
              <Experience />
            </div>
          </div>
          <div className='col-lg-6 m-15px-tb'>
            <div className='resume-box'>
              <Education />
            </div>
          </div>
        </div>
        {/*  Experience & Education Ends */}
        <hr className='separator' />

        {/* Skills Starts */}
        <div className='row'>
          <div className='col-12 '>
            <h3 className='text-uppercase text-center'>My Skills</h3>
          </div>
          <Skills />
        </div>
        {/* Skills Ends */}

        <hr className='separator mt-1' />
      </div>
    </section>
  );
};

export default index;
