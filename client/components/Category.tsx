'use client';
import { UserButton } from '@clerk/nextjs';
import type { NextPage } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Category: NextPage = () => {
  const pathname = usePathname();

  return (
    <div className="w-full flex justify-center items-center pt-20 bg-black">
      <nav className="w-[450px] rounded-61xl bg-gray-400 shadow-[0px_12px_20px_rgba(0,_0,_0,_0.04)] flex justify-between py-[5px] px-1 max-w-[95%] lg:max-w-full text-xl text-black font-inter">
        <Link href="/">
          <button
            className={`cursor-pointer py-[9px] px-4 ${pathname === '/' ? 'bg-firebrick' : 'bg-transparent'} rounded-29xl hover:bg-tomato`}
          >
            <b
              className={`relative text-xl font-inter ${pathname === '/' ? 'text-white' : 'text-black'}`}
            >
              Sex
            </b>
          </button>
        </Link>
        <Link href="/alcool">
          <button
            className={`cursor-pointer py-[9px] px-4 ${pathname === '/alcool' ? 'bg-firebrick' : 'bg-transparent'} rounded-29xl hover:bg-tomato`}
          >
            <b
              className={`relative text-xl font-inter ${pathname === '/alcool' ? 'text-white' : 'text-black'}`}
            >
              Alcool
            </b>
          </button>
        </Link>
        <Link href="/droguri">
          <button
            className={`cursor-pointer py-[9px] px-4 ${pathname === '/droguri' ? 'bg-firebrick' : 'bg-transparent'} rounded-29xl hover:bg-tomato`}
          >
            <b
              className={`relative text-xl font-inter ${pathname === '/droguri' ? 'text-white' : 'text-black'}`}
            >
              Droguri
            </b>
          </button>
        </Link>
        <Link href="/misiune">
          <button
            className={`cursor-pointer py-[9px] px-4 ${pathname === '/misiune' ? 'bg-firebrick' : 'bg-transparent'} rounded-29xl hover:bg-tomato`}
          >
            <b
              className={`relative text-xl font-inter ${pathname === '/misiune' ? 'text-white' : 'text-black'}`}
            >
              Misiune
            </b>
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default Category;
