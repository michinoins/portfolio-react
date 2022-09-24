import profileImg from '../../assets/img/profile/profile.jpg';

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
          <h1 className='text-uppercase poppins-font'>
            <p> I'm {profileContent.profileTitleName}</p>
            <span>{profileContent.profileDesignation}</span>
          </h1>
          <p>{profileContent.profileDescriptions}</p>
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
