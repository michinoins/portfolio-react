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
            <h3 className='text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600'>
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
          <div className='col-12'>
            <h3 className='text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600'>
              My Skills
            </h3>
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
