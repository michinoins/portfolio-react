import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Profile from '../components/profile/Profile';
import Index from '../components/about/index';
// import Address from '../../components/Address';

// import Contact from '../../components/Contact';
// import Social from '../../components/Social';
// import SwitchDark from '../../components/switch/SwitchDark';

const menuItem = [
  { icon: 'fa-home', menuName: 'Home' },
  { icon: 'fa-user', menuName: 'About' },
];

const Home = () => {
  return (
    <div className='main-background'>
      {/* End Switcher */}
      <Tabs>
        <div className='header'>
          <TabList className=' icon-menu'>
            {menuItem.map((item, i) => (
              <Tab className='icon-box' key={i}>
                <i className={`fa ${item.icon}`}></i>
              </Tab>
            ))}
          </TabList>
        </div>
        {/* End Menu Content */}

        <div className='tab-panel_list'>
          <TabPanel className='home '>
            <div data-aos='zoom-out' data-aos-duration='1200'>
              <Profile />
            </div>
          </TabPanel>

          <TabPanel className='about'>
            <div data-aos='zoom-out'>
              <Index />
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default Home;
