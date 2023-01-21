import React, { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
// import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Link } from 'react-router-dom';
import './post.scss';
import Comments from '../COMMENTS/Comments';
//import { LikedContext } from '../../context/LikedContext';

const Post = ({ post }) => {
  //const { liked, likeButton } = useContext(LikedContext);
  // //const liked = false;
  // const heartIcon = useRef();
  // const likesAmountLabel = useRef();

  // const handleLike = () => {
  //   heartIcon.classList.toggle('liked');
  //   if (heartIcon.classList.contains('liked')) {
  //     post.likes++;
  //   } else {
  //     post.likes--;
  //   }
  // };
  const [commentOpen, setCommentOpen] = useState(false);

  const [liked, setLiked] = useState(post.hasLiked);
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <span className="name">{post.name}</span>
                {post.verified ? <VerifiedIcon id="verify" /> : ''}
              </Link>
              <span className="Date">1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <img src={post.picture} alt="" />
          <p>{post.desc}</p>
        </div>
        <div className="info">
          <div className="item">
            <div
              className="like-button"
              onClick={() => {
                setLiked(!liked);
                if (liked) {
                  post.likes--;
                } else {
                  post.likes++;
                }
              }}
            >
              <div className="heart-bg">
                <div className={`heart-${liked ? 'liked' : 'unliked'}`}></div>
              </div>
              <div className="likes-amount">{post.likes}</div>
            </div>
          </div>
          <div
            className="item"
            onClick={() => {
              setCommentOpen(!commentOpen);
            }}
          >
            <TextsmsOutlinedIcon />
            300 comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;
