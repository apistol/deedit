'use client';
import type { NextPage } from 'next';
import NavigationHome from '../components/home-page/navigation-home';
import FrameComponent from '../components/home-page/frame-component';
import { useEffect, useState } from 'react';
import WelcomeAnimation from '../components/home-page/welcome-animation';
import PostareTip from '../components/home-page/postare-tip';

const Categorii: NextPage = () => {
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
          <div className="flex flex-col w-full h-screen">
            <NavigationHome />
            <FrameComponent />
          </div>
          <PostareTip />
          <PostareTip />
        </div>
      )}
    </>
  );
};

export default Categorii;
