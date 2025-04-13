'use client';


import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import linetwo from './image/linertwo.svg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Pageeight = () => {
    const svgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      svgRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: svgRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);
    return (
        <div className='relative overflow-hidden px-[24px] sm:px-0' id='Downloads'>
            <Image ref={svgRef} className="absolute left-1/2 -translate-x-1/2  -z-[0] w-full sm:block hidden" src={linetwo} alt=""/>
            <div className='container mx-auto flex items-center justify-center flex-col py-[32px] sm:py-[36px] md:py-[40px] lg:py-[48px] xl:py-[64px] 2xl:py-[70px] relative z-[1] overflow-hidden px-[24px] sm:px-0'>
            {/* <div className="markerleines absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2  -z-[0] w-[80%]"></div>
            <svg ref={svgRef} className="absolute left-1/2 -translate-x-1/2  -z-[0] w-full sm:block hidden" viewBox="0 0 1728 476" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_122_365" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="1728" height="476">
            <rect width="1728" height="476" fill="#070312"/>
            </mask>
            <g mask="url(#mask0_122_365)">
            <g filter="url(#filter0_f_122_365)">
            <circle cx="864.5" cy="230.5" r="184.5" fill="#522FC7"/>
            </g>
            </g>
            <defs>
            <filter id="filter0_f_122_365" x="-64" y="-698" width="1857" height="1857" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="372" result="effect1_foregroundBlur_122_365"/>
            </filter>
            </defs>
            </svg> */}

              <h2 className='howtobue figtree text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] xl:text-[50px] 2xl:text-[60px]'>Secure Fast Decentralized</h2>
              <p className='colscatavazsd text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[24px] figtree'>Secure. Fast. Decentralized. DigiByte powers reliable, real-world blockchain solutions.</p>
                <div onClick={() => document.getElementById('email-input')?.focus()} id="email-form" className='roundclidenbttn flex items-center pl-[12px] sm:pl-[13px] md:pl-[14px] lg:pl-[15px] xl:pl-[16px] 2xl:pl-[20px] justify-between pr-[6px] lg:pr-[8px] py-[2px] lg:py-[8px] sm:gap-[100px] md:gap-[150px] lg:gap-[200px] xl:gap-[250px] 2xl:gap-[300px] mt-[16px] sm:mt-[20px] md:mt-[24px] lg:mt-[32px] xl:mt-[36px] 2xl:mt-[40px]'>
                      <input id="email-input"  className='outline-none inpoutstys' type='gmail' pleacholder='Enter your email address '/>
                      <button id="get-started-button" className='stateimageds text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[30px] py-[2px] md:py-[8px] xl:py-[10px] cursor-pointer figtree'>Get started</button>
                </div>
            </div>
        </div>
    );
};

export default Pageeight;