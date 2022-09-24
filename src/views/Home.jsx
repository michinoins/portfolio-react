import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Profile from '../components/Profile/Profile';
// import Index from '../../components/about/index';
// import Address from '../../components/Address';

// import Contact from '../../components/Contact';
// import Social from '../../components/Social';
// import SwitchDark from '../../components/switch/SwitchDark';

const menuItem = [
  { icon: 'fa-home', menuName: 'Home' },
  { icon: 'fa-user', menuName: 'About' },
  { icon: 'fa-envelope-open', menuName: 'Contact' },
];

const Home = () => {
  return (
    <div className='yellow'>
      {/* <SwitchDark /> */}
      {/* End Switcher */}
      <Tabs>
        <div className='header'>
          <TabList className=' icon-menu'>
            {menuItem.map((item, i) => (
              <Tab className='icon-box' key={i}>
                <i className={`fa ${item.icon}`}></i>
                <h2>{item.menuName}</h2>
              </Tab>
            ))}
          </TabList>
        </div>
        {/* End Menu Content */}

        <div className='tab-panel_list'>
          <TabPanel className='home '>
            <div data-aos='fade-up' data-aos-duration='1200'>
              {/* <Hero /> */}
              <div className='color-block d-none d-lg-block'></div>
              <Profile />
            </div>
          </TabPanel>

          <TabPanel className='about'>
            <div data-aos='fade-up' data-aos-duration='1200'>
              <h1>
                ABOUT <span>ME</span>
              </h1>
            </div>
            {/* <Index /> */}
            Tab2
          </TabPanel>

          {/* Contact Content Starts */}
          <TabPanel className='contact'>
            <div data-aos='fade-up' data-aos-duration='1200'>
              <h1>
                get in <span>touch</span>
              </h1>
            </div>
            Tab3
            <div data-aos='fade-up' data-aos-duration='1200'></div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default Home;
