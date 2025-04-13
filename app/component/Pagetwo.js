'use client';

import React, { useEffect, useRef,useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import numbeingss from './image/numbeingss.png';
import linerone from './image/linerone.svg';
import Image from 'next/image';
import Link from 'next/link';
// import { usePathname } from 'next/navigation';
import Crxconving from './Crxconving';

gsap.registerPlugin(ScrollTrigger);


const gridItems = [
    {
      title: 'Applications / DigiAssets.',
      description:
        'The top layer is like an app store with clear real-world uses. All types of digital assets can be created with the DigiAssets protocol on top of the DigiByte blockchain. ',
      svg: (
        <svg className='w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[80px]' viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="40" cy="40" r="40" fill="url(#paint0_linear_122_30593)"/>
<path d="M39.8625 54V28.92L40.3825 26H45.1025V54H39.8625ZM33.9425 34.84V29.88C34.6092 29.9333 35.3292 29.7733 36.1025 29.4C36.8758 29 37.6358 28.4933 38.3825 27.88C39.1558 27.24 39.8225 26.6 40.3825 25.96L43.8625 29.36C42.9025 30.4267 41.8892 31.4 40.8225 32.28C39.7558 33.1333 38.6492 33.8 37.5025 34.28C36.3825 34.76 35.1958 34.9467 33.9425 34.84Z" fill="black"/>
<defs>
<linearGradient id="paint0_linear_122_30593" x1="29.2706" y1="4.91645e-06" x2="47.4791" y2="53.7401" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F3F6"/>
<stop offset="1" stop-color="#663DDE"/>
</linearGradient>
</defs>
        </svg>

      ),
    },
    {
      title: 'Digital asset / Public ledger.',
      description:
        'The middle layer provides security and administration. A Digital Byte of data, a representation of larger data or a unit that holds value, and cannot be counterfeited, duplicated or hacked.',
      svg: (
        <svg className='w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[80px]' viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="40" fill="url(#paint0_linear_122_30521)"/>
        <path d="M30.458 54V49.96C30.458 49.1867 30.698 48.3333 31.178 47.4C31.658 46.4667 32.3246 45.5333 33.178 44.6C34.0313 43.6667 35.0313 42.8 36.178 42L40.418 38.96C41.0046 38.56 41.5513 38.1067 42.058 37.6C42.5913 37.0933 43.018 36.5467 43.338 35.96C43.6846 35.3467 43.858 34.76 43.858 34.2C43.858 33.5067 43.6846 32.88 43.338 32.32C43.018 31.76 42.538 31.32 41.898 31C41.258 30.68 40.4713 30.52 39.538 30.52C38.738 30.52 38.018 30.68 37.378 31C36.7646 31.32 36.258 31.7467 35.858 32.28C35.458 32.8133 35.178 33.3867 35.018 34L29.378 33.04C29.6446 31.7067 30.218 30.4667 31.098 29.32C31.978 28.1733 33.1246 27.2533 34.538 26.56C35.978 25.84 37.6046 25.48 39.418 25.48C41.498 25.48 43.2846 25.8533 44.778 26.6C46.2713 27.3467 47.418 28.3733 48.218 29.68C49.0446 30.96 49.458 32.4533 49.458 34.16C49.458 35.8933 48.978 37.44 48.018 38.8C47.0846 40.1333 45.7913 41.3867 44.138 42.56L40.338 45.32C39.5646 45.8533 38.898 46.44 38.338 47.08C37.778 47.72 37.3513 48.4267 37.058 49.2H49.818V54H30.458Z" fill="black"/>
        <defs>
        <linearGradient id="paint0_linear_122_30521" x1="29.2706" y1="4.91645e-06" x2="47.4791" y2="53.7401" gradientUnits="userSpaceOnUse">
        <stop stop-color="#F3F3F6"/>
        <stop offset="1" stop-color="#663DDE"/>
        </linearGradient>
        </defs>
        </svg>

      ),
    },
    {
      title: 'Core protocol / Global network.',
      description:
        'The bottom layer provides communication and operating procedures. A very low-level way nodes on the DigiByte global network communicate. Thousands of people are running DigiByte software all across the planet.',
      svg: (
        <svg className='w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[80px]' viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="40" fill="url(#paint0_linear_122_30507)"/>
        <path d="M40.6267 54.48C38.9734 54.48 37.4801 54.24 36.1467 53.76C34.8134 53.2533 33.6934 52.5467 32.7867 51.64C31.9067 50.7067 31.2934 49.6133 30.9467 48.36L35.9867 46.88C36.1734 47.2 36.4267 47.6 36.7467 48.08C37.0667 48.5333 37.5067 48.92 38.0667 49.24C38.6267 49.56 39.3601 49.72 40.2667 49.72C41.6001 49.72 42.6534 49.36 43.4267 48.64C44.2267 47.8933 44.6267 46.9333 44.6267 45.76C44.6267 44.96 44.4267 44.2533 44.0267 43.64C43.6267 43.0267 42.9734 42.56 42.0667 42.24C41.1867 41.8933 40.0267 41.72 38.5867 41.72H36.9067V38H38.3867C39.9867 38 41.4934 38.2 42.9067 38.6C44.3201 38.9733 45.5601 39.5333 46.6267 40.28C47.7201 41 48.5734 41.88 49.1867 42.92C49.8001 43.9333 50.1067 45.0933 50.1067 46.4C50.1067 48.08 49.6667 49.5333 48.7867 50.76C47.9067 51.96 46.7467 52.88 45.3067 53.52C43.8667 54.16 42.3067 54.48 40.6267 54.48ZM36.9067 40.72V37.24H38.5867C40.4534 37.24 41.8401 36.92 42.7467 36.28C43.6534 35.64 44.1067 34.76 44.1067 33.64C44.1067 33 43.9467 32.4267 43.6267 31.92C43.3067 31.4133 42.8534 31.0133 42.2667 30.72C41.6801 30.4267 41.0001 30.28 40.2267 30.28C39.7201 30.28 39.2001 30.3733 38.6667 30.56C38.1334 30.72 37.6401 31 37.1867 31.4C36.7601 31.7733 36.4134 32.32 36.1467 33.04L31.1867 31.56C31.5601 30.2533 32.2001 29.16 33.1067 28.28C34.0401 27.3733 35.1467 26.6933 36.4267 26.24C37.7067 25.76 39.0267 25.52 40.3867 25.52C42.1201 25.52 43.6801 25.8533 45.0667 26.52C46.4534 27.16 47.5467 28.0533 48.3467 29.2C49.1467 30.3467 49.5467 31.6667 49.5467 33.16C49.5467 34.44 49.2401 35.5467 48.6267 36.48C48.0134 37.4133 47.1734 38.2 46.1067 38.84C45.0667 39.48 43.8801 39.96 42.5467 40.28C41.2134 40.5733 39.8267 40.72 38.3867 40.72H36.9067Z" fill="black"/>
        <defs>
        <linearGradient id="paint0_linear_122_30507" x1="29.2706" y1="4.91645e-06" x2="47.4791" y2="53.7401" gradientUnits="userSpaceOnUse">
        <stop stop-color="#F3F3F6"/>
        <stop offset="1" stop-color="#663DDE"/>
        </linearGradient>
        </defs>
        </svg>

      ),
    },
    {
        title: 'Open source / Permissionless.',
        description:
          'Just like this website, the DigiByte blockchain is completely open source and free to use released under the MIT license, which gives you the power to run and modify the software.',
        svg: (
          <svg className='w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[80px]' viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="40" fill="url(#paint0_linear_122_30514)"/>
          <path d="M41.4238 54V48.48H28.3838V44.12L40.7838 26H46.5838V43.8H51.4638V48.48H46.5838V54H41.4238ZM34.0238 43.8H41.4238V32.96L34.0238 43.8Z" fill="black"/>
          <defs>
          <linearGradient id="paint0_linear_122_30514" x1="29.2706" y1="4.91645e-06" x2="47.4791" y2="53.7401" gradientUnits="userSpaceOnUse">
          <stop stop-color="#F3F3F6"/>
          <stop offset="1" stop-color="#663DDE"/>
          </linearGradient>
          </defs>
          </svg>          
        ),
    },
  ];


const Pagetwo = () => {
    // const gridItemRefs = useRef(gridItems.map(() => useRef(null)));
    const [activeLink, setActiveLink] = useState('/buy'); 
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCrypto, setSelectedCrypto] = useState({
        image: numbeingss,
        name: 'BNB',
    });

    const options = [
        { image: numbeingss, name: 'BNB' },
        { image: numbeingss, name: 'BMB' },
        { image: numbeingss, name: 'BAB' },
        { image: numbeingss, name: 'BCB' },
    ];

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const handleSelect = (crypto) => {
        setSelectedCrypto(crypto);
        setIsOpen(false);
    };
    
    
    // Default to "/buy"

    const handleLinkClick = (href) => {
        setActiveLink(href); 
    };


    const wrapperRef = useRef(null); // Outer container
  const gridItem1Ref = useRef(null); // First grid item
  const gridItem2Ref = useRef(null); // Second grid item
  const gridItem3Ref = useRef(null); // Third grid item
  const titleRef = useRef(null); // "Core Products" title
  const acquireRef = useRef(null); // "Acquire CRX" section

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: '(min-width: 768px)',
        isMobile: '(max-width: 767px)',
      },
      (context) => {
        const { isDesktop, isMobile } = context.conditions;

        // Main wrapper animation
        gsap.fromTo(
          wrapperRef.current,
          { y: isMobile ? 50 : 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: isMobile ? 1 : 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: isMobile ? 'top 90%' : 'top 80%',
              end: 'top 20%',
              scrub: 0.8,
            },
          }
        );

        // Title animation
        gsap.fromTo(
          titleRef.current,
          { y: 30, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 85%',
              end: 'top 50%',
              scrub: 0.8,
            },
          }
        );

        // Grid items animation (individual with slight stagger)
        [gridItem1Ref, gridItem2Ref, gridItem3Ref].forEach((ref, index) => {
          gsap.fromTo(
            ref.current,
            { y: 50, opacity: 0, scale: 0.9 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1,
              delay: index * 0.25, // Manual stagger effect
              ease: 'power3.out',
              scrollTrigger: {
                trigger: ref.current,
                start: 'top 80%',
                end: 'top 30%',
                scrub: 0.8,
              },
            }
          );
        });

        // Acquire CRX section animation
        gsap.fromTo(
          acquireRef.current,
          { y: 50, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: acquireRef.current,
              start: 'top 85%',
              end: 'top 40%',
              scrub: 0.8,
            },
          }
        );
      }
    );

    return () => mm.revert(); // Cleanup
  }, []);



  // advds

  const itemRefs = useRef([]);
  
    useEffect(() => {
      itemRefs.current.forEach((el, index) => {
        if (!el) return;
  
        gsap.fromTo(
          el,
          {
            autoAlpha: 0,
            y: 50,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 100%',
              toggleActions: 'play none none none',
            },
            delay: index * 0.2, // Delay between each item
          }
        );
      });
    }, []);


    
    return (
        <div id='Blockchain' ref={wrapperRef} className='relative overflow-hidden pb-[50px] sm:pb-[50px] md:pb-[60px] lg:pb-[90px] xl:pb-[110px] 2xl:pb-[141px] bg-[#100924]'>
            <div className='relative ' id="smooth-content">
                <div className='pt-[50px] sm:pt-[60px] md:pt-[80px] lg:pt-[100px] xl:pt-[130px] 2xl:pt-[160px] container mx-auto pb-[32px] sm:pb-[36px] md:pb-[40px] lg:pb-[48px] xl:pb-[64px] 2xl:pb-[99px] px-[24px] sm:px-0 w-full '>
                    <div ref={titleRef} className="TradeLikeAProWithXonicCapital figtree text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[50px] 2xl:text-[60px] figtree text-center pb-[32px] sm:pb-[36px] md:pb-[40px] lg:pb-[48px] xl:pb-[64px] 2xl:pb-[78px] ">
                    This is how the DigiByte <div className='gradientuser'>blockchain works</div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[13px] sm:gap-[14px] md:gap-[15px] lg:gap-[16px] xl:gap-[20px] 2xl:gap-[24px] w-full">
                    {gridItems.map((item, index) => (
                        <div
                        key={index}
                        ref={(el) => (itemRefs.current[index] = el)}
                        className="foxbackgron figtree flex flex-col items-start justify-start p-[14px] sm:p-[15px] md:p-[16px] lg:p-[20px] xl:p-[24px] 2xl:p-[32px] gap-[16px] sm:gap-[20px] md:gap-[24px] lg:gap-[28px] xl:gap-[36px] 2xl:gap-[40px] relative"
                        >
                        {item.svg}
                        <div>
                            <h2 className="forex figtree text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[32px]">
                            {item.title}
                            </h2>
                            <p className="padingfoxing figtree text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[24px]">
                            {item.description}
                            </p>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pagetwo;