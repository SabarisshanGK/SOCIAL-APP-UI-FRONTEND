import React from 'react';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import cover from '../images/cover1.jpg';
import dp from '../images/img2.jpg';
import './Profile.scss';
import Posts from '../components/Posts/Posts.js';
//https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2

const Profile = () => {
  return (
    <div className="Profile">
      <div className="images">
        <img src={cover} alt="" className="cover" />
        <img src={dp} alt="" className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left2">
            <a href="https://www.facebook.com/">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="https://www.facebook.com/">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="https://www.facebook.com/">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="https://www.facebook.com/">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="https://www.facebook.com/">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>SABARISSHAN G K</span>
            <div className="info2">
              <div className="item">
                <PlaceIcon />
                <span>INDIA</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>English</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right2">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
