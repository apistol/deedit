'use client';
import type { NextPage } from 'next';
import Post from '../../../components/Post';
import BannerHome from '../../../components/BannerHome';
import Navigation from '../../../components/Category';
import Category from '../../../components/Category';

const DroguriPage: NextPage = () => {
  return (
    <>
      <div className="w-full bg-black flex flex-col justify-center items-center">
        <Category />
        <div className="flex flex-col w-full">
          <BannerHome textPrimary="iarba&" textSecondary="high" />
        </div>
        <Post />
        <Post />
      </div>
    </>
  );
};

export default DroguriPage;
