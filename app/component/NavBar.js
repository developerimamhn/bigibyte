"use client";


import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { LiaBarsSolid } from "react-icons/lia";
import { VscChromeClose } from "react-icons/vsc";
import logo from './image/logo.png';
import righticon from './image/righticon.png';


const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null);
    const menuButtonRef = useRef(null);
    const [scrolled, setScrolled] = useState(false); // For background styling
    const [isVisible, setIsVisible] = useState(true); // For show/hide
    const [prevScrollPos, setPrevScrollPos] = useState(0); // Tracks scroll direction

    // Handle clicks outside to close the menu
    const handleClickOutside = (event) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target) &&
            (!menuButtonRef.current || !menuButtonRef.current.contains(event.target))
        ) {
            setToggle(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Smooth scroll to section
    const handleScroll = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 50,
                behavior: "smooth",
            });
            setToggle(false);
        }
    };

    // Scroll logic for show/hide and background change
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            // Update scrolled state for background styling
            if (currentScrollPos > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Show/hide navbar based on scroll direction
            if (currentScrollPos < 50) {
                setIsVisible(true); // Show near the top
            } else if (currentScrollPos > prevScrollPos) {
                setIsVisible(false); // Hide when scrolling down
            } else {
                setIsVisible(true); // Show when scrolling up
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);


    return (
        <div className={` header ${scrolled ? "scrolled" : " "}  w-full header backgronsdvg  ${
            isVisible ? "translate-y-0 transition-transform duration-300" : "-translate-y-full transition-transform duration-300"
        }`}>
            
            <header className='px-[24px] md:px-[80px] lg:px-[116px] xl:px-[130px] 2xl:px-[157px] flex justify-between items-center py-[12px] sm:py-[14px] lg:py-[16px] relative  lg:overflow-hidden'>
            <dev className='linersext absolute bottom-0 left-0 w-full h-[2px] z-10'></dev>
                <div className='lg:hidden relative top-[-11px]'>
                    
                    <div 
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-100' : 'opacity-0 -translate-x-2'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <VscChromeClose className='text-white text-[24px] absolute' />
                    </div>
                    <div ref={menuButtonRef}
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-0 translate-x-2' : 'opacity-100'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <LiaBarsSolid className='text-white text-[24px] absolute' />
                    </div>
                </div>
                <Link href='/' className='cursor-pointer flex items-center Froggo-Logo h-[20px] lg:h-[24px] 2xl:h-[28px]' onClick={(e) => handleScroll(e, "")}>
                <Image className='w-full h-[24px] lg:h-[28px] 2xl:h-[31px]' src={logo} alt=''/></Link> 
                <div clssName="navbar-items-mainbackground">
                <nav ref={menuRef} className={`navbar-items-main absolute lg:top-0 top-[100%] lg:left-0 lg:relative duration-1000 z-[999] lg:opacity-100 flex justif-start lg:justify-between items-start lg:items-center gap-[14px] md:gap-[16px] lg:gap-[18px] xl:gap-[20px] 2xl:gap-[22px] md:p-[12px] xl:p-[16px] lg:bg-transparent bg-[#16151f] lg:flex-row flex-col p-[20px] lg:p-[0] w-full h-screen lg:h-full
                    ${toggle ? 'left-[0]' :'left-[100%]' }
                    ${toggle ? 'opacity-100' : 'opacity-10'} 
                    `} >
                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px] figtree" href="#Blockchain" onClick={(e) => handleScroll(e, "Blockchain")}>
                    Blockchain</a>

                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px] figtree" href="#Currency" onClick={(e) => handleScroll(e, "Currency")}>
                    Currency</a>

                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px] figtree" href="#DigiAssets" onClick={(e) => handleScroll(e, "DigiAssets")}>
                    DigiAssets</a>
                    
                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px] figtree" href="#Digi-ID" onClick={(e) => handleScroll(e, "Digi-ID")}>
                    Digi-ID</a>
                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px] figtree" href="#Community" onClick={(e) => handleScroll(e, "Community")}>
                    Community</a>

                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px] figtree" href="#Downloads" onClick={(e) => handleScroll(e, "Downloads")}>
                    Downloads</a>
                    
                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px] figtree" href="#Wiki" onClick={(e) => handleScroll(e, "Wiki")}>
                    Wiki</a>
                </nav>
                </div>
                
                <ul className=''>
                    <button className='buttonaudit cursor-pointer text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[14.1px] flex items-center h-[36px] md:h-[40px] lg:h-[44px] xl:h-[48px] 2xl:h-[54px] px-[15px] sm:px-[16px] md:px-[20px] lg:px-[24px] xl:px-[28px] 2xl:px-[30px] group gap-[7.50px]'>
                     Request audit
                    </button>
                </ul>
                
                
            </header>
            <div className='navbarunderborder'></div>
        </div>
    );
};

export default NavBar;