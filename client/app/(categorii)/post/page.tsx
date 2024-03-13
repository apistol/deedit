import React from 'react';
import Post from '../../../components/Post';
import InputComment from '../../../components/InputComment';

const PostLayout = () => {
  return (
    <div className="bg-black w-full flex flex-col justify-center items-center">
      <Post />
      <InputComment />
    </div>
  );
};

export default PostLayout;
