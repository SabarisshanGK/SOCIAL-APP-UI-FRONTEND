import { createContext, useEffect, useState } from 'react';
import { PostsData } from '../DATAS/postsdata';

export const LikedContext = createContext();

export const LikedContextProvider = ({ children }) => {
  const [liked, setLiked] = useState(
    PostsData.map((pr) => {
      return pr.hasLiked;
    })
  );

  const likeButton = () => {
    setLiked(!liked);
    if (liked) {
      PostsData.map((p) => {
        return p.likes--;
      });
    } else {
      PostsData.map((p) => {
        return p.likes++;
      });
    }
  };
  useEffect(() => {
    localStorage.setItem('liked', liked);
  }, [liked]);

  return (
    <LikedContext.Provider value={{ liked, likeButton }}>
      {children}
    </LikedContext.Provider>
  );
};
