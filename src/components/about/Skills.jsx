import React from 'react';

function Skill({ source, alt, title }) {
  return <img src={source} alt={alt} title={title} />;
}
const skillSet = [
  {
    title: 'Java',
    alt: 'logo for Java',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg',
  },
  {
    title: 'Kotlin',
    alt: 'logo for Kotlin',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original-wordmark.svg',
  },
  {
    title: 'SpringBoot',
    alt: 'logo for SpringBoot',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg',
  },
  {
    title: 'HTML 5',
    alt: 'logo for HTML5',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg',
  },
  {
    title: 'CSS3',
    alt: 'logo for CSS3',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg',
  },

  {
    title: 'Javascript',
    alt: 'logo for Javascript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    title: 'React',
    alt: 'logo for React',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg',
  },

  {
    title: 'AWS',
    alt: 'logo for AWS',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  },

  {
    title: 'Mysql',
    alt: 'logo for Mysql',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg',
  },

  {
    title: 'Docker',
    alt: 'logo for Docker',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  },
  {
    title: 'Github',
    alt: 'logo for Github',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg',
  },
];

const Skills = () => {
  return (
    <>
      <div className='skills'>
        <div className='skillsGrid'>
          {skillSet.map((val, i) => (
            <Skill source={val.src} alt={val.alt} title={val.title} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
