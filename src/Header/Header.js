import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import {Avatar } from '@material-ui/core'
import './Header.css'


const Header = () => {
  return (
    <div className="header">
      <div className="headerLogo">
        <h4 className="sidebarLogo">CHAUKAT</h4>
      </div>
      <div className="headerInput">
        <SearchIcon />
        <input type="text" placeholder="Search.." />
      </div>
      <div className="headerRem">
        <LanguageIcon />
        <NotificationsNoneIcon />
        <AccountCircleOutlinedIcon />
          {/* <div className="headerAvatar">
          <Avatar
            // onClick={() => auth.signOut()}
            className="Avatar"
            src={"https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
            }
          />
        </div> */}
      </div>
    </div>
  );
};

export default Header;
