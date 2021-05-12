import React from 'react'
import './Sidebar.css'
import SidebarOptions from './SidebarOptions'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const Sidebar = () => {
    return (
        <div className="sidebar">
            {/* <h2 className="sidebarLogo">CHAUKAT</h2> */}

            <SidebarOptions isActive title="Home" Icon={HomeIcon}/>
            <SidebarOptions title="Explore" Icon={SearchIcon}/>
            <SidebarOptions title="Messages" Icon={MailOutlineIcon}/>
            <SidebarOptions title="Bookmarks" Icon={BookmarkBorderIcon}/>
            <SidebarOptions title="More" Icon={MoreHorizIcon}/>

        </div>
    )
}

export default Sidebar;
