import { memo, useState } from "react";
import Link from "next/link";

const Header = memo(({ hamburger }) => {
  const [sidebaropen, setSidebaropen] = useState(false);

  const handleSidebarMenu = () => {
    setSidebaropen(!sidebaropen);
  };
  const closeSideBar = () => {
    setSidebaropen(false);
  };

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
          <div className="flex flex-row items-start justify-start gap-[20px] md:hidden sm:hidden">
            <Link href="/" className=" leading-[22px] text-slategray">
              HOME
            </Link>
            <Link href="about" className=" leading-[22px] text-slategray">
              ABOUT US
            </Link>
            <Link href="agents" className=" leading-[22px] text-slategray">
              OUR AGENTS
            </Link>
            <Link
              href="/properties"
              className=" leading-[22px] font-semibold text-slategray"
            >
              PROPERTIES
            </Link>
            <Link href="gallery" className=" leading-[22px] text-slategray">
              GALLERY
            </Link>
            <Link href="blog" className=" leading-[22px] text-slategray">
              BLOG
            </Link>
            <Link href="contact-us" className=" leading-[22px] text-slategray">
              CONTACT US
            </Link>
            <Link href="search" className=" leading-[22px] text-slategray">
              SEARCH
            </Link>
            <Link href="signup" className=" leading-[22px] text-slategray">
              SignUp
            </Link>
            <Link href="login" className=" leading-[22px] text-slategray">
              Login
            </Link>
          </div>

          <button
            onClick={handleSidebarMenu}
            className="cursor-pointer [border:none] p-0 bg-[transparent] hidden flex-row items-center justify-center md:flex sm:flex sm:[transform:rotate(0deg)] sm:rounded-none"
            type="button"
            data-drawer-target="drawer-navigation"
            data-drawer-show="drawer-navigation"
            aria-controls="drawer-navigation"
          >
            <img
              className=" w-6 h-6 overflow-hidden shrink-0 md:flex"
              alt=""
              src="/notification.svg"
              // data-drawer-target="drawer-navigation"
              // data-drawer-show="drawer-navigation"
              // aria-controls="drawer-navigation"
            />
          </button>
        </div>
      </div>

      {/* this is sidebar content  */}

      <div
        className={
          sidebaropen
            ? `fixed top-0 left-0 bottom-0  duration-700
    p-2 w-[300px] overflow-y-auto text-center bg-gray-900 shadow sm:hidden h-screen`
            : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500"
        }
      >
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center rounded-md ">
            <h1 className="text-[15px]  ml-3 text-xl text-gray-200 font-bold">
              Blog
            </h1>

            <button
              onClick={closeSideBar}
              type="button"
              data-drawer-hide="drawer-navigation"
              aria-controls="drawer-navigation"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white hover:cursor-pointer"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close menu</span>
            </button>
          </div>
          <hr className="my-2 text-gray-600" />
          <div>
            <div
              className="p-2.5 mt-3 flex items-center rounded-md 
  px-4 duration-300 cursor-pointer  bg-gray-700"
            >
              <i className="bi bi-search text-sm" />
              <input
                className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
                placeholder="Serach"
              />
            </div>
            <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
              <i className="bi bi-house-door-fill" />
              <span className="text-[15px] ml-4 text-gray-200">Home</span>
            </div>
            <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
              <i className="bi bi-bookmark-fill" />
              <span className="text-[15px] ml-4 text-gray-200">Bookmark</span>
            </div>
            <hr className="my-4 text-gray-600" />
            <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
              <i className="bi bi-envelope-fill" />
              <span className="text-[15px] ml-4 text-gray-200">Messages</span>
            </div>
            <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
              <i className="bi bi-chat-left-text-fill" />
              <div
                className="flex justify-between w-full items-center"
                onclick="dropDown()"
              >
                <span className="text-[15px] ml-4 text-gray-200">Chatbox</span>
                <span className="text-sm rotate-180" id="arrow">
                  <i className="bi bi-chevron-down" />
                </span>
              </div>
            </div>
            <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
              <i className="bi bi-chat-left-text-fill" />
              <div
                className="flex justify-between w-full items-center"
                onclick="dropDown()"
              >
                <span className="text-[15px] ml-4 text-gray-200">Chatbox</span>
                <span className="text-sm rotate-180" id="arrow">
                  <i className="bi bi-chevron-down" />
                </span>
              </div>
            </div>
            <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
              <i className="bi bi-chat-left-text-fill" />
              <div
                className="flex justify-between w-full items-center"
                onclick="dropDown()"
              >
                <span className="text-[15px] ml-4 text-gray-200">Chatbox</span>
                <span className="text-sm rotate-180" id="arrow">
                  <i className="bi bi-chevron-down" />
                </span>
              </div>
            </div>
            <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
              <i className="bi bi-chat-left-text-fill" />
              <div
                className="flex justify-between w-full items-center"
                onclick="dropDown()"
              >
                <span className="text-[15px] ml-4 text-gray-200">Chatbox</span>
                <span className="text-sm rotate-180" id="arrow">
                  <i className="bi bi-chevron-down" />
                </span>
              </div>
            </div>
            <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
              <i className="bi bi-chat-left-text-fill" />
              <div
                className="flex justify-between w-full items-center"
                onclick="dropDown()"
              >
                <span className="text-[15px] ml-4 text-gray-200">Chatbox</span>
                <span className="text-sm rotate-180" id="arrow">
                  <i className="bi bi-chevron-down" />
                </span>
              </div>
            </div>

            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
              <i className="bi bi-box-arrow-in-right" />
              <span className="text-[15px] ml-4 text-gray-200">Logout</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});

export default Header;
