'use client';
import type { NextPage } from 'next';
import Navigation from '../components/Navigation';
import { useEffect, useState } from 'react';
import WelcomeAnimation from '../components/home-page/welcome-animation';
import Post from '../components/Post';
import BannerHome from '../components/BannerHome';
import { UserButton } from '@clerk/nextjs';

const HomePage: NextPage = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);

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
          <Navigation />
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
