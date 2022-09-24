import React from 'react';

const skillsContent = [
  { skillClass: 'p60', skillPercent: '60', skillName: 'Java' },
  { skillClass: 'p70', skillPercent: '70', skillName: 'Kotlin' },
  { skillClass: 'p60', skillPercent: '60', skillName: 'SpringBoot' },
  { skillClass: 'p40', skillPercent: '40', skillName: 'HTML' },
  { skillClass: 'p60', skillPercent: '60', skillName: 'JAVASCRIPT' },
  { skillClass: 'p40', skillPercent: '40', skillName: 'CSS' },
  { skillClass: 'p50', skillPercent: '50', skillName: 'REACT' },
  { skillClass: 'p70', skillPercent: '70', skillName: 'AWS' },
  { skillClass: 'p40', skillPercent: '40', skillName: 'Docker' },
  { skillClass: 'p60', skillPercent: '60', skillName: 'Mysql' },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className='col-6 col-md-3 mb-3 mb-sm-5' key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className='slice'>
              <div className='bar'></div>
              <div className='fill'></div>
            </div>
          </div>
          <h6 className='text-uppercase open-sans-font text-center mt-2 mt-sm-4'>
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
