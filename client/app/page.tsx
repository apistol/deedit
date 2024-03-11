'use client';
import type { NextPage } from 'next';
import NavigationHome from '../components/home-page/navigation-home';
import FrameComponent from '../components/home-page/frame-component';
import LoremIpsumText from '../components/home-page/lorem-ipsum-text';
import SecretsTipFrame from '../components/home-page/secrets-tip-frame';
import { useEffect, useState } from 'react';
import WelcomeAnimation from '../components/home-page/welcome-animation';

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
        <div className="w-full relative bg-black overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-52 box-border gap-[120px_0px] tracking-[normal] mq950:gap-[60px_0px] mq450:gap-[30px_0px]">
          <section className="w-[952.8px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[71px_0px] max-w-full text-left text-xl text-white font-inter mq700:gap-[18px_0px] mq975:gap-[35px_0px]">
            <div className="w-[92.9px] h-8 relative">
              <img
                className="absolute top-[0px] left-[0px] w-[92.9px] h-8"
                loading="lazy"
                alt=""
                src="/logo.svg"
              />
              <div className="absolute top-[2px] left-[12.1px] tracking-[-0.01em] leading-[140%] font-extrabold inline-block w-[68px] h-[27px] z-[1] mq450:text-base mq450:leading-[22px]">
                DeedIt
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end max-w-full">
              <NavigationHome />
            </div>
          </section>
          <FrameComponent />
          <LoremIpsumText />
          <SecretsTipFrame />
        </div>
      )}
    </>
  );
};

export default Categorii;
