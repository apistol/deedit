'use client';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import WelcomeAnimation from '../components/home-page/welcome-animation';
import Post from '../components/Post';
import BannerHome from '../components/BannerHome';
import Category from '../components/Category';
import { getPosts } from '../utils/utils';

const HomePage: NextPage = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);
  //  TODO read from context
  //  const posts = useContext(PostsContext);

  useEffect(() => {
    const posts = async () => {
      await getPosts();
    };
    posts();
  }, []);

  useEffect(() => {
    const isVisited = localStorage.getItem('isVisited');

    if (!isVisited) {
      setShowAnimation(true);
      setTimeout(() => {
        setShowAnimation(false);
        localStorage.setItem('isVisited', 'true');
        setShowMainContent(true);
      }, 1500);
    } else {
      setShowMainContent(true);
    }
  }, []);

  return (
    <>
      <WelcomeAnimation showAnimation={showAnimation} />
      {showMainContent && (
        <div className="w-full bg-black flex flex-col justify-center items-center">
          <Category />
          <div className="flex flex-col w-full">
            <BannerHome textPrimary="povesti&" textSecondary="secrete" />
          </div>
          <Post />
          <Post />
        </div>
      )}
    </>
  );
};

export default HomePage;
