import { memo } from "react";
import Link from "next/link";

const Header = memo(({ hamburger }) => {
  return (
    <header className="self-stretch bg-gray-white h-[98px] flex flex-row py-[22px] px-20 box-border items-center justify-center sticky w-full top-[0] [background:white] z-[2] text-center text-5xl text-primary-500 font-body-large-400 lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
      <div className="flex-1 flex flex-row items-center justify-between">
        <Link
          href="/"
          className="flex flex-row items-center justify-center gap-[8px]"
        >
          <img className=" w-11 h-11" alt="" src="/houseline.svg" />
          <div className="flex flex-col items-start justify-start">
            <div className=" leading-[24px] font-semibold">REIS</div>
            <div className=" text-sm leading-[16px] font-medium">
              Real State
            </div>
          </div>
        </Link>
        <div className="flex flex-row items-center justify-end gap-[36px] text-sm text-primary-900 md:flex sm:flex">
          <div className="flex flex-row items-start justify-start gap-[30px] md:hidden sm:hidden">
            <Link href="/" className=" leading-[22px]">
              HOME
            </Link>
            <Link href="#" className=" leading-[22px]">
              ABOUT US
            </Link>
            <Link href="#" className=" leading-[22px]">
              OUR AGENTS
            </Link>
            <Link href="/properties" className=" leading-[22px] font-semibold">
              PROPERTIES
            </Link>
            <Link href="#" className=" leading-[22px]">
              GALLERY
            </Link>
            <Link href="#" className=" leading-[22px]">
              BLOG
            </Link>
            <Link href="#" className=" leading-[22px]">
              CONTACT US
            </Link>
            <Link href="#" className=" leading-[22px]">
              SEARCH
            </Link>
          </div>
          {!hamburger && (
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] hidden flex-row items-center justify-center md:flex sm:flex sm:[transform:rotate(0deg)] sm:rounded-none">
              <img
                className=" w-6 h-6 overflow-hidden shrink-0 md:flex"
                alt=""
                src="/notification.svg"
              />
            </button>
          )}
        </div>
      </div>
    </header>
  );
});

export default Header;
