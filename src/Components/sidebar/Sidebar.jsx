import React from "react";
import { HiHome,HiOutlineHeart } from "react-icons/hi";
import{FiSearch} from "react-icons/fi"
import { Link } from "react-router-dom";
import{MdOutlineExplore} from "react-icons/md";
import {BiMoviePlay,BiUserCircle} from "react-icons/bi";
import{BsInstagram} from "react-icons/bs"
import {CgAddR} from "react-icons/cg"
import{RiMessengerLine} from "react-icons/ri"
const links = [
  {
    name: "Home",
    logo: <HiHome />,
    link:"/"
  },
  {
    name: "Search",
    logo: <FiSearch />,
    
  },
  {
    name: "Explore",
    logo: <MdOutlineExplore />,
    link:"/explore"
  },
  {
    name: "Reels",
    logo: <BiMoviePlay />,
    link:"/reel"
  },{
    name: "Messages",
    logo: <RiMessengerLine />,
    link:"/message"
  },{
    name: "Notifications",
    logo: < HiOutlineHeart/>,
  },{
    name: "Create",
    logo: <CgAddR />,
  },{
    name: "Profile",
    logo: < BiUserCircle/>,
    link:"/profile"
  },
];

const Sidebar = () => {
  return (
    <>
    <nav>
    <div className="wapper fixed top-0 w-72px lg:w-[244px] bg-black border-r-4  border-dark-gray  h-screen "> 
      <div className="sidebar top-0  bg-black   h-screen  ">
        <div className="logo-section text-main-font   h-[14%] flex  justify-start px-6 items-center ">
          <div className=" hidden lg:inline-block cursor-pointer  text-xl  ">Victagram</div>
          <div className="logo lg:hidden  text-base"><BsInstagram className="w-6 h-6" /></div>
        </div>

        
          <div className="side-navbar  ">
            {links &&
              links.map((items , i) => {
                return (
                  <Link to={items.link} key={i}>
                    <div className="icons  text-main-font flex py-4 pl-6 justify-start items-center space-x-5 ">
                      <div className="links-logo    text-2xl ">{items.logo}</div>
                      <div className="name  text-base lg:block hidden active:font-bold focus:font-bold focus-within:font-bold "> {items.name}</div>
                    </div>
                  </Link>
                );
              })}
          </div>
      
      </div>
      </div>
      </nav>
    </>
  );
};

export default Sidebar;
