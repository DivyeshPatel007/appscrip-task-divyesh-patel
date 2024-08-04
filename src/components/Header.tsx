"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogoSlack, IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline, IoChatbubbleOutline } from "react-icons/io5";
import DesktopNavigation from "./navigations/DesktopNavigation";
import MobileNavigation from "./navigations/MobileNavigation";



const Header = () => {
    const [isNavBar, setIsNavBar] = useState<boolean>(false);

    const handleNavClick = () => {
        setIsNavBar(!isNavBar);
    };

    return (
        <header className="w-full">
            {/* Overlay */}
            <div
                className={`${isNavBar ? "bg-black bg-opacity-80 z-40" : "opacity-0 -z-10"
                    } fixed inset-0 transition-opacity duration-300 lg:hidden`}
                onClick={() => setIsNavBar(false)}
            ></div>

            {/* Upper header with banner */}
            <div className="bg-black text-red-500 flex items-center justify-center gap-3 w-full h-9">
                <IoLogoSlack />
                <h5 className="text-sm">Lorem, ipsum dolor.</h5>
            </div>

            {/* Lower header */}
            <div className="flex items-center justify-between py-4 px-4 border-b border-slate-200">
                <div className="flex items-center gap-2 text-2xl">
                    <GiHamburgerMenu
                        className="cursor-pointer lg:hidden"
                        onClick={handleNavClick}
                    />
                    <IoLogoSlack />
                </div>
                <h1 className="font-bold text-2xl">LOGO</h1>
                <div className="flex gap-2 text-2xl">
                    <IoChatbubbleOutline />
                    <IoMdHeartEmpty />
                    <IoCartOutline />
                </div>
            </div>

            {/* Navigation Sidebar */}
            <MobileNavigation handleNavClick={handleNavClick} isNavBar={isNavBar} />

            {/* Desktop Navigation */}
            <DesktopNavigation />
        </header>
    );
};

export default Header;