'use client';
import React from 'react';
import { sidebarLinks } from '../../constants/index';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import LogoutImg from '../../public/assets/logout.svg';

const LeftSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <section className="sticky left-0 top-0 z-20 flex h-screen w-fit flex-col justify-between overflow-auto border-r border-r-dark-4 bg-zinc-800 pb-5 pt-28 max-md:hidden custom-scrollbar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`relative flex justify-start gap-4 rounded-lg p-4 ${isActive && 'bg-firebrick'} `}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="text-light-1 max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>

      <div className="mt-10 px-6">

      </div>
    </section>
  );
};

export default LeftSidebar;
