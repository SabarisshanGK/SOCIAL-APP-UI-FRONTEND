import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { StorieS } from '../../DATAS/stories';
import './Stories.scss';
const Stories = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <div className="Stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {StorieS.map((story) => {
        return (
          <div className="story" key={story.id}>
            <img src={story.images} alt="" />
            <span>{story.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Stories;
