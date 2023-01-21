import React from 'react';
import { PostsData } from '../../DATAS/postsdata';
import Post from '../post/post';
import './Posts.scss';

const Posts = () => {
  return (
    <div className="posts">
      {PostsData.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  );
};

export default Posts;
