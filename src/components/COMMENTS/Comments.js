import React, { useContext } from 'react';
import './Comments.scss';
import imgs1 from '../../images/user-2.png';
import imgs2 from '../../images/img2.jpg';
import { UserContext } from '../../context/userContext';

const CommentsData = [
  {
    id: 1,
    userId: 1,
    name: 'VISVA K',
    comments:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cumque explicabo quo laborum dolorum quisquam id debitis cupiditate rem dolor quia, illo ipsum ipsa nam omnis molestias? Harum, ad ut!',
    profilePicture: imgs1,
  },
  {
    id: 2,
    userId: 2,
    name: 'SABARISSHAN G K',
    comments:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cumque explicabo quo laborum dolorum quisquam id debitis cupiditate rem dolor quia, illo ipsum ipsa nam omnis molestias? Harum, ad ut!',
    profilePicture: imgs2,
  },
];

const Comments = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <div className="Comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="Write a Comment" />
        <button>Send</button>
      </div>
      {CommentsData.map((comment) => {
        return (
          <div className="comment">
            <img src={comment.profilePicture} alt="" />
            <div className="info">
              <span>{comment.name}</span>
              <p>{comment.comments}</p>
            </div>
            <span className="date">1 hour ago</span>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
