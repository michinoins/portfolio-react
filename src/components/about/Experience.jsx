import React from 'react';

const experienceContent = [
  {
    year: '2020/04 - 2021/05',
    position: 'Backend Engineer',
    compnayName: 'Teamlab',
    details: `starting with API development, DB design, and sometimes building infrastructure using AWS`,
  },
  {
    year: '2021/05 - 2022/08',
    position: 'Full Stack Engineer',
    compnayName: 'Teamlab',
    details: `Built new components for additional development using javascript. Established DevOps template using Cloudformation, configuration of related services such as S3, VPC, ECS, etc. Led a small team and experienced defining requirements with clients, designed API, Database. `,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className='icon'>
            <i className='fa fa-briefcase'></i>
          </div>
          <span className='time open-sans-font text-uppercase'>{val.year}</span>
          <h5 className='poppins-font text-uppercase'>
            {val.position}
            <span className='place open-sans-font'>{val.compnayName}</span>
          </h5>
          <p className='open-sans-font'>{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
