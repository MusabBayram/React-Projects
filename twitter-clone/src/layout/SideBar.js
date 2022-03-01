import React, { useState } from 'react';
import twitterLogo from '../images/twitter.svg';
import SideLink from '../components/SideLink';
import {
    BookmarksIcon,
    ExploreIcon,
    HomeIcon,
    ListsIcon,
    MessagesIcon,
    MoreIcon,
    NotificationsIcon,
    ProfileIcon,
  } from "../icons/Icon";
import UserBox from '../components/UserBox';

  const sideLinks = [
    {
      name: 'Home',
      icon: HomeIcon 
    },
    {
      name: 'Explore',
      icon: ExploreIcon
    },
    {
      name: 'Notifications',
      icon: NotificationsIcon
    },
    {
      name: 'Message',
      icon: MessagesIcon
    },
    {
      name: 'Bookmarks',
      icon: BookmarksIcon
    },
    {
      name: 'Lists',
      icon: ListsIcon
    },
    {
      name: 'Profile',
      icon: ProfileIcon
    },
    {
      name: 'More',
      icon: MoreIcon
    }
  ]
function SideBar() {
  const [active, setActive] = useState('Home');
  
  const handleMenuItemClick = (name) => {
    setActive(name);
  }
  
  return (
    <div className="flex flex-col justify-between w-72 px-2">
        <div>
          <div className='mt-1 mb-4 ml-1 flex items-center rounded-full justify-center w-12 h-12 hover:bg-gray-lightest transform transition-colors duration-200'>
            <img src={twitterLogo} alt="Twitter Logo" className="w-9 h-9" />
          </div>
          <nav className='mb-4'>
            <ul>
              {sideLinks.map(({ name, icon }) => (
                <SideLink key={name} name={name} Icon={icon} active={active} onMenuItemClick={handleMenuItemClick} />
              ))}
            </ul>
          </nav>
          <button className='bg-primary-base hover:bg-primary-dark text-white rounded-full py-3 px-8 w-11/12 shadow-lg transform transition-colors duration-200'>Tweet</button>
        </div>
        <div>
          <UserBox />
        </div>
    </div>
  )
}

export default SideBar