'use client'


import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import logo from "./image/logo.png";


gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null); 
    const menuButtonRef = useRef(null);
    const [scrolled, setScrolled] = useState(false);
  
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
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    useEffect(() => {
      // Example of animating elements when they come into view
      gsap.fromTo('.feature', 
        { opacity: 0, y: 50 }, 
        {
          opacity: 1,
          y: 0,
          stagger: 0.3,
          scrollTrigger: {
            trigger: '.feature',
            start: 'top 80%',
            end: 'bottom top',
            toggleActions: 'play none none none'
          }
        }
      );
  
      // Example of animating the button with scale and opacity
      gsap.fromTo('.buttonaudit-3', 
        { opacity: 0, scale: 0.8 }, 
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'ease-in-out',
          scrollTrigger: {
            trigger: '.buttonaudit-3',
            start: 'top 80%',
            end: 'bottom top',
            toggleActions: 'play none none none'
          }
        }
      );
    }, []);
  
    const [isTranslated, setIsTranslated] = useState(false);
  
    const handleClick = () => {
      setIsTranslated(true);
      setTimeout(() => {
        setIsTranslated(false);
      }, 200);
    };
  
    return (
        <div id='Wiki' className=''>
            <div className='pt-[32px] sm:pt-[36px] md:pt-[40px] lg:pt-[48px] xl:pt-[64px] 2xl:pt-[80px]  w-full px-[24px] sm:px-0'>
                <div className='flex items-center sm:items-start justify-between sm:flex-row flex-col gap-[40px] pb-[20px] sm:pb-[24px] md:pb-[28px] lg:pb-[32px] xl:pb-[36px] 2xl:pb-[40px] container mx-auto'>
                    <div className='flex flex-col gap-[13px] sm:gap-[14px] md:gap-[15px] lg:gap-[16px] xl:gap-[20px] 2xl:gap-[24px]'>
                        <Image className='w-[40px] sm:w-[50px] md:w-[60px] lg:w-[90px] xl:w-[120px] 2xl:w-[153px] ' src={logo} alt="loading..."/>
                        <p className='privacypolicy text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] w-fit lg:w-[400px] figtree'>DigiByte is a fast-growing open-source blockchain launched in 2014. With 11 years of innovation, it&apos;s now one of the most secure, speedy, and decentralized UTXO blockchains. Trusted in over 100 countries worldwide.</p>
                    </div>
                        <div className='flex items-start justify-start gap-[36px] sm:gap-[40px] md:gap-[48px] lg:gap-[64px] xl:gap-[96px] 2xl:gap-[130px]'>
                        <div className='flex items-start flex-col gap-[13px] sm:gap-[14px] md:gap-[15px] lg:gap-[16px] xl:gap-[20px] 2xl:gap-[24px] justify-start'>
                          <a className='fotoerheadesecton text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] figtree'>DigiByte links. .2</a>
                            <ul className='flex justify-start flex-col gap-[6] lg:gap-[8px] footeritesm figtree text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>
                              <a className='figtree'>DigiByte Wiki</a>
                              <a className='figtree'>DigiExplorer</a>
                              <a className='figtree'>DigiStats </a>
                              <a className='figtree'>DigiByte Mining</a>
                            </ul>
                        </div>
                        <div className='flex items-start flex-col gap-[13px] sm:gap-[14px] md:gap-[15px] lg:gap-[16px] xl:gap-[20px] 2xl:gap-[24px] justify-start'>
                          <a className='fotoerheadesecton text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] figtree'>DigiByte links.</a>
                            <ul className='flex justify-start flex-col gap-[6] lg:gap-[8px] footeritesm figtree text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>
                              <a className='figtree'>DigiByte Wikis</a>
                              <a className='figtree'>DigiExplorer2</a>
                              <a className='figtree'>DigiStats 3</a>
                              <a className='figtree'>DigiByte Mining5</a>
                            </ul>
                        </div>
                        </div>
                </div>
                <div className="w-full h-[1px] pointer-events-none" style={{
                    background: '#1F1C29'
                }} />
                <div className='flex justify-between items-center pt-[16px] sm:pt-[20px] md:pt-[24px] lg:pt-[32px] xl:pt-[36px] 2xl:pt-[40px] pb-[14px] sm:pb-[15px] md:pb-[16px] lg:pb-[20px] xl:pb-[24px] 2xl:pb-[32px] container mx-auto'>
                    <div className='flex items-center gap-[12px] md:gap-[16px] xl:gap-[20px]'>
                        <p className='privacypolicy text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] figtree'>© Copyright DigiByte 2025</p>
                    </div>
                    <div className='flex items-center gap-[11px] md:gap-[14px] xl:gap-[16px]'>
                        <p className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-[16px] sm:w-[20px] md:w-[24px] lg:w-[32px] xl:w-[36px] 2xl:w-[40px] ' viewBox="0 0 40 40" fill="none">
                        <g clip-path="url(#clip0_122_30587)">
                          <path d="M40 20C40 8.95434 31.0457 2.67029e-05 20 2.67029e-05C8.95431 2.67029e-05 0 8.95434 0 20C0 29.3796 6.45719 37.2498 15.1685 39.411V26.1117H11.0443V20H15.1685V17.3665C15.1685 10.5591 18.2491 7.40394 24.9323 7.40394C26.1993 7.40394 28.3857 7.65234 29.2801 7.90082V13.4411C28.808 13.3915 27.9881 13.3666 26.9695 13.3666C23.6901 13.3666 22.4229 14.6088 22.4229 17.8386V20H28.9557L27.8334 26.1117H22.4229V39.8535C32.3258 38.6574 40 30.2254 40 20Z" fill="#070312"/>
                          <path d="M27.8333 26.1117L28.9556 20H22.4229V17.8385C22.4229 14.6087 23.6899 13.3666 26.9694 13.3666C27.988 13.3666 28.8079 13.3914 29.2799 13.4411V7.90083C28.3855 7.65234 26.1992 7.40386 24.9322 7.40386C18.2491 7.40386 15.1683 10.5591 15.1683 17.3665V20H11.0442V26.1117H15.1683V39.411C16.7158 39.7949 18.3338 40 19.9999 40C20.8202 40 21.6285 39.9494 22.4229 39.8535V26.1117H27.8333Z" fill="white"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_122_30587">
                            <rect width="40" height="40" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                        </p>
                        <p className=''><svg xmlns="http://www.w3.org/2000/svg" className='w-[16px] sm:w-[20px] md:w-[24px] lg:w-[32px] xl:w-[36px] 2xl:w-[40px] ' viewBox="0 0 40 40" fill="none">
                      <g clip-path="url(#clip0_122_30588)">
                        <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z" fill="#070312"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.0532 19.7889C14.8836 17.2487 18.7715 15.574 20.7167 14.7649C26.271 12.4547 27.4251 12.0534 28.1773 12.0402C28.3428 12.0373 28.7127 12.0783 28.9523 12.2727C29.1546 12.4369 29.2103 12.6587 29.237 12.8143C29.2636 12.97 29.2968 13.3246 29.2704 13.6017C28.9694 16.7641 27.6671 24.4386 27.0045 27.9807C26.7241 29.4794 26.1721 29.9819 25.6377 30.0311C24.4762 30.138 23.5943 29.2636 22.4694 28.5262C20.7091 27.3723 19.7147 26.654 18.0061 25.528C16.0314 24.2268 17.3115 23.5116 18.4368 22.3428C18.7313 22.0369 23.8487 17.3823 23.9477 16.9601C23.9601 16.9072 23.9716 16.7104 23.8546 16.6065C23.7377 16.5025 23.5651 16.5381 23.4406 16.5663C23.264 16.6064 20.452 18.4651 15.0044 22.1423C14.2063 22.6904 13.4833 22.9574 12.8355 22.9434C12.1214 22.928 10.7478 22.5397 9.7266 22.2077C8.4741 21.8006 7.47864 21.5853 7.56532 20.8939C7.61047 20.5337 8.10643 20.1654 9.0532 19.7889Z" fill="white"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_122_30588">
                          <rect width="40" height="40" fill="white"/>
                        </clipPath>
                      </defs>
                        </svg></p>
                        <p className=''><svg xmlns="http://www.w3.org/2000/svg" className='w-[13px] sm:w-[14px] md:w-[15px] lg:w-[16px] xl:w-[20px] 2xl:w-[23px] ' viewBox="0 0 23 23" fill="none">
                        <path d="M19.4705 3.98253C18.0045 3.30989 16.4325 2.81432 14.7889 2.53049C14.759 2.52501 14.7291 2.5387 14.7136 2.56608C14.5115 2.92566 14.2875 3.39476 14.1307 3.76348C12.3629 3.49881 10.6041 3.49881 8.87256 3.76348C8.7157 3.38657 8.48363 2.92566 8.28055 2.56608C8.26513 2.53961 8.23523 2.52592 8.2053 2.53049C6.56258 2.81341 4.99058 3.30898 3.52373 3.98253C3.51103 3.988 3.50015 3.99714 3.49292 4.00899C0.511167 8.46367 -0.305661 12.8089 0.0950476 17.1002C0.0968607 17.1212 0.108646 17.1412 0.124965 17.154C2.09224 18.5987 3.99789 19.4758 5.86814 20.0572C5.89807 20.0663 5.92979 20.0553 5.94884 20.0307C6.39125 19.4265 6.78562 18.7895 7.12375 18.1196C7.1437 18.0804 7.12465 18.0338 7.08387 18.0183C6.45833 17.781 5.8627 17.4917 5.28974 17.1631C5.24442 17.1367 5.24079 17.0719 5.28248 17.0408C5.40306 16.9505 5.52366 16.8565 5.63879 16.7616C5.65962 16.7442 5.68864 16.7406 5.71313 16.7515C9.47723 18.4701 13.5523 18.4701 17.272 16.7515C17.2965 16.7397 17.3255 16.7433 17.3472 16.7606C17.4624 16.8556 17.583 16.9505 17.7045 17.0408C17.7462 17.0719 17.7434 17.1367 17.6981 17.1631C17.1252 17.4981 16.5295 17.781 15.9031 18.0174C15.8623 18.0329 15.8441 18.0804 15.8641 18.1196C16.2095 18.7886 16.6039 19.4256 17.0381 20.0298C17.0562 20.0553 17.0889 20.0663 17.1188 20.0572C18.9981 19.4758 20.9038 18.5987 22.871 17.154C22.8883 17.1412 22.8992 17.1221 22.901 17.1011C23.3805 12.1398 22.0977 7.8303 19.5004 4.0099C19.494 3.99714 19.4832 3.988 19.4705 3.98253ZM7.68585 14.4872C6.5526 14.4872 5.61883 13.4468 5.61883 12.1691C5.61883 10.8913 6.53449 9.85093 7.68585 9.85093C8.84625 9.85093 9.77098 10.9005 9.75284 12.1691C9.75284 13.4468 8.83718 14.4872 7.68585 14.4872ZM15.3283 14.4872C14.1951 14.4872 13.2613 13.4468 13.2613 12.1691C13.2613 10.8913 14.1769 9.85093 15.3283 9.85093C16.4887 9.85093 17.4134 10.9005 17.3953 12.1691C17.3953 13.4468 16.4887 14.4872 15.3283 14.4872Z" fill="white"/>
                      </svg></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;