import profileImg from '../../assets/img/profile/profile.jpg';
import cv from '../../assets/img/cv.pdf';

const profileContent = {
  profileImage: profileImg,
  profileTitleName: 'Mikiya Ichino',
  profileDesignation: 'Software Engineer',
  profileDescriptions: `Detail-oriented software engineer with 2.5+ years of experience in
  Java, Kotlin, Javascript, Object-Oriented-Languages. Practical
  experience Implementing APIs , communicating effectively with
  teammate for creating app from scratch. Seeking a challenging
  position in an organization where I can use my talents and skills to grow
  and expand an organization as well as myself.`,
};

const Profile = () => {
  return (
    <>
      <div className=' home-profile-container'>
        <div className='description'>
          <h1 className='introduction text-uppercase poppins-font'>
            <p>
              <span class='introName'>
                I'm {profileContent.profileTitleName}
              </span>
              <br />
              <span class='introOccupation'>
                {profileContent.profileDesignation}
              </span>
            </p>
          </h1>
          <p>{profileContent.profileDescriptions}</p>
          <div className='col-12 mt-1'>
            <a className='button' href={cv} download>
              <span className='button-text'>Download CV</span>
              <span className='button-icon fa fa-download'></span>
            </a>
          </div>
        </div>

        <div className='image'>
          <img
            src={profileContent.profileImage}
            alt='profile img'
            className='col-lg-auto '
            height='500px'
            width='auto'
          />
        </div>
      </div>
    </>
  );
};

export default Profile;
