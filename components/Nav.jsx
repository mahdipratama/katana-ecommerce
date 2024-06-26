'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import Cart from './Cart';

function Nav() {
  const router = useRouter();

  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <nav className="layout_navbar flex items-center justify-between">
      <div className="logo">
        <Link href={'/'}>
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={180}
            height={180}
            placeholder="blur"
            blurDataURL={'/assets/images/logo.png'}
          />
        </Link>
      </div>

      <Cart />

      <div
        onClick={() => setActiveMenu(prev => !prev)}
        className={`hamburger z-10 ${activeMenu && 'fixed right-5'}`}>
        <svg
          className={`ham hamRotate ham8 ${activeMenu && 'active'}`}
          viewBox="0 0 100 100"
          width="60">
          <path
            className="line top"
            d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
          />
          <path className="line middle" d="m 30,50 h 40" />
          <path
            className="line bottom"
            d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
          />
        </svg>
      </div>

      <div
        className={`
        wrapper_menu ${activeMenu && 'active'} bg-secondary 
        sm:bg-main sm:static sm:ml-2 lg:ml-10`}>
        <ul
          onClick={() => setActiveMenu(false)}
          className="absolute top-[20%] left-[20%] gap-8 text-[18px] 
          flex flex-col text-white font-semibold
          sm:static sm:text-[16px] sm:font-light sm:flex-row sm:gap-5 md:gap-8 lg:gap-16 lg:mr-1 sm:text-headingColor ">
          <Link href={'/'}>
            <li>Home</li>
          </Link>

          <Link href={'/products?category=anime'}>
            <li>Anime katana</li>
          </Link>

          <Link href={'/products?category=custom'}>
            <li>Custom katana</li>
          </Link>

          <Link href={'/products?category=tanto'}>
            <li>Tanto</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
