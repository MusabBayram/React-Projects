import React from 'react'

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

function SideBar() {
  return (
    <div className="w-72 bg-blue-200">
        <h1>SideBar</h1>
        <BookmarksIcon/>
        <ExploreIcon/>
        <HomeIcon/>
        <ListsIcon/>
        <MessagesIcon/>
        <MoreIcon/>
        <NotificationsIcon/>
        <ProfileIcon/>
    </div>
  )
}

export default SideBar