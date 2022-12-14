import React from 'react'
import { Link } from 'react-router-dom';

import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsYoutube, BsCameraVideo, BsBell } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoAppsSharp } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-14 h-14 bg-[#030303] opacity-95 sticky top-0 z-50">
        <div className="flex gap-8 items-center text-2xl">
            <div>
                <GiHamburgerMenu className="text-slate-300"/>
            </div>
            <Link to="/">
                <div className="flex gap-1 items-center justify-center">
                    <BsYoutube className='text-3xl text-red-600'/>
                    <span className="text-xl font-sm text-white">YouTube</span>
                </div>
            </Link>
        </div>
        <div className="flex items-center justify-center gap-5">
            <form action="">
                <div className="flex bg-zinc-900 h-10 px-4 pr-0">
                    <div className="flex gap-4 items-center pr-5">
                        <div>
                            <AiOutlineSearch className="text-xl"/>
                        </div>
                        <input type="text" className="w-96 bg-zinc-900 focus:outline-none border-none "/>
                        <AiOutlineClose className="text-xl cursor-pointer"/>
                    </div>
                    <button className="flex items-center justify-center bg-zinc-800 h-10 w-16">
                        <AiOutlineSearch className="text-xl"/>
                    </button>
                </div>
            </form>

        </div>
    </div>
  )
}
