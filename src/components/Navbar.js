import React, { useContext } from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import img1 from '../images/img2.jpg';
import '../components/Navbar.scss';
import { DarkModeToggleContext } from '../context/DarkModeContext';
import { UserContext } from '../context/userContext';
import { color } from '@mui/system';
const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeToggleContext);
  const { currentUser } = useContext(UserContext);
  return (
    <div className="Navbar">
      <div className="left1">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span>SOCIAL APP</span>
        </Link>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <HomeOutlinedIcon style={{ cursor: 'pointer' }} />
        </Link>
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle}></WbSunnyOutlinedIcon>
        ) : (
          <DarkModeOutlinedIcon
            style={{ cursor: 'pointer' }}
            onClick={toggle}
          />
        )}
        <GridViewOutlinedIcon style={{ cursor: 'pointer' }} />
        <div className="search">
          <SearchOutlinedIcon style={{ cursor: 'pointer' }} />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="right1">
        <PersonOutlinedIcon style={{ cursor: 'pointer' }} />
        <EmailOutlinedIcon style={{ cursor: 'pointer' }} />
        <NotificationsOutlinedIcon style={{ cursor: 'pointer' }} />
        <div className="user">
          <img src={currentUser.profilePic} alt="none"></img>
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
