/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <footer className=" bg-primary footer">
      <div className="layout text-accent4 text-[14px] grid grid-cols-2 gap-y-5 gap-x-8 sm:px-7">
        <div className="">
          <div className="w-[150px] ml-[-7px] mb-4">
            <img src="/assets/images/logo2.png" alt="logo" />
          </div>
          <p>
            Mr. Bushido: Where Tradition Meets Modern Craftsmanship. Find out
            the best quality katanas hand forged and functional. A traditional
            sword worn by the Samurai.
            <br />
            <br />
            You must be at least 18 years old to use this website.{' '}
          </p>
        </div>

        <div>
          <h4 className="mb-4 mt-3 text-[16px] font-semibold text-main ">
            Helpful links
          </h4>
          <ul>
            <li>
              <Link href={'/'}>Katana</Link>
            </li>
            <li>
              <Link href={'/'}>Track my order</Link>
            </li>
            <li>
              <Link href={'/'}>Faq</Link>
            </li>
            <li>
              <Link href={'/'}>Contact</Link>
            </li>
            <li>
              <Link href={'/'}>Sitemap</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 mt-3 text-[16px] font-semibold text-main ">
            Policies
          </h4>
          <ul>
            <li>
              <Link href={'/'}>Shipping Policy</Link>
            </li>
            <li>
              <Link href={'/'}>Refund Policy</Link>
            </li>
            <li>
              <Link href={'/'}>Privacy Policy</Link>
            </li>
            <li>
              <Link href={'/'}>Term of Service</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 mt-3 text-[16px] font-semibold text-main ">
            Legal notes
          </h4>
          <ul>
            <li>
              <Link href={'/'}>Disclaimer</Link>
            </li>
            <li>
              <Link href={'/'}>Customs information</Link>
            </li>
          </ul>
        </div>

        <div className="col-span-2">
          <h4 className="mb-4 mt-3 text-[16px] font-semibold text-main ">
            Newsletter
          </h4>
          <p className="mb-3">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <form className="relative">
            <input
              type="email"
              className="w-full py-[10px] px-[20px] bg-transparent border rounded-[3px]"
            />
            <label className="absolute left-[15px] top-[11px]">Email</label>
            <button className="absolute right-[15px] top-[7px]" type="submit">
              <img
                className="w-full h-auto"
                src="/assets/icons/submit.png"
                alt="send icon"
              />
            </button>
          </form>
        </div>
      </div>
      <hr className="h-px bg-[rgba(255,255,255,0.2)] border-0 my-5" />
      <div className="text-center text-accent4 font-normal pb-5">
        <p className="text-[13px]">
          copyright &copy; Mr.Bushido. All right reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
