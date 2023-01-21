import React from 'react';
import './RightBar.scss';
import user from '../images/user-2.png';
const RightBar = () => {
  return (
    <div className="Rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="users">
            <div className="userInfo">
              <img src={user} alt="" />
              <span>VISVA K</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Unfollow</button>
            </div>
          </div>
          <div className="users">
            <div className="userInfo">
              <img src={user} alt="" />
              <span>VISVA K</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Unfollow</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="users">
            <div className="userInfo">
              <img src={user} alt="" />
              <p>
                <span>VISVA K</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="users">
            <div className="userInfo">
              <img src={user} alt="" />
              <p>
                <span>VISVA K</span> Posted
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="users">
            <div className="userInfo">
              <img src={user} alt="" />
              <p>
                <span>VISVA K</span> liked a picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="users">
            <div className="userInfo">
              <img src={user} alt="" />
              <p>
                <span>VISVA K</span> commented on picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="users">
            <div className="userInfo">
              <img src={user} alt="" />
              <div className="online" />
              <span>VISVA K</span>
            </div>
          </div>
          <div className="users">
            <div className="userInfo">
              <img src={user} alt="" />
              <div className="online" />
              <span>VISVA K</span>
            </div>
          </div>
          <div className="users">
            <div className="userInfo">
              <img src={user} alt="" />
              <div className="online" />
              <span>VISVA K</span>
            </div>
          </div>
          <div className="users">
            <div className="userInfo">
              <img src={user} alt="" />
              <div className="online" />
              <span>VISVA K</span>
            </div>
          </div>
          <div className="users">
            <div className="userInfo">
              <img src={user} alt="" />
              <div className="online" />
              <span>VISVA K</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
