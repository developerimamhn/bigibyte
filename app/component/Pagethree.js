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
      title: 'DigiByte Genesis Mined',
      description:
        'Genesis block was successfully mined and the DigiByte blockchain officially launched.',
      svg: (
  <svg xmlns="http://www.w3.org/2000/svg" className='w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[80px]' viewBox="0 0 80 80" fill="none">
  <path d="M20.0299 21.6666C20.0299 19.0295 20.8119 16.4516 22.277 14.259C23.7421 12.0663 25.8245 10.3574 28.2608 9.3482C30.6972 8.33903 33.378 8.07498 35.9645 8.58945C38.5509 9.10392 40.9266 10.3738 42.7913 12.2385C44.656 14.1032 45.9259 16.479 46.4404 19.0654C46.9549 21.6518 46.6908 24.3327 45.6816 26.769C44.6725 29.2054 42.9635 31.2878 40.7709 32.7529C38.5782 34.2179 36.0003 34.9999 33.3633 34.9999C29.827 34.9999 26.4356 33.5952 23.9352 31.0947C21.4347 28.5942 20.0299 25.2028 20.0299 21.6666ZM50.8666 46.0666C50.9333 46.0666 50.9999 46.0999 51.0999 46.0999C51.1793 46.1081 51.2595 46.0979 51.3343 46.0701C51.4091 46.0423 51.4765 45.9977 51.5313 45.9397C51.586 45.8817 51.6267 45.8119 51.6502 45.7356C51.6737 45.6593 51.6793 45.5787 51.6666 45.4999C51.6666 45.2333 51.3999 45.0333 51.2666 44.9333C47.9565 42.6686 44.008 41.5238 39.9999 41.6666H26.6666C13.1333 41.6666 8.33325 51.5666 8.33325 60.0666C8.33325 67.6666 12.3666 71.6666 19.9999 71.6666H43.4333C43.5617 71.6723 43.6899 71.6511 43.8098 71.6046C43.9296 71.558 44.0385 71.487 44.1294 71.3961C44.2203 71.3052 44.2913 71.1963 44.3379 71.0765C44.3845 70.9566 44.4056 70.8284 44.3999 70.6999C44.3519 70.4425 44.2618 70.1947 44.1333 69.9666L42.3999 66.9999C42.0245 66.3564 41.7862 65.6422 41.7002 64.9022C41.6141 64.1622 41.6821 63.4124 41.8999 62.6999C42.1237 61.957 42.5109 61.2736 43.0333 60.6999C43.2127 60.5093 43.3189 60.2613 43.3333 59.9999C43.3254 59.7371 43.2182 59.4869 43.0333 59.2999C42.3076 58.4845 41.846 57.4684 41.7092 56.3855C41.5723 55.3026 41.7667 54.2036 42.2666 53.2333C42.3154 53.1189 42.3711 53.0076 42.4332 52.8999L44.9666 48.7333C45.4406 47.885 46.1321 47.1785 46.9699 46.6863C47.8077 46.1942 48.7616 45.9342 49.7333 45.9333C50.1153 45.9262 50.4966 45.9711 50.8666 46.0666ZM72.8999 63.8666C72.9724 63.9047 73.0327 63.9624 73.074 64.0331C73.1152 64.1038 73.1358 64.1847 73.1333 64.2666C73.1472 64.3608 73.1232 64.4567 73.0666 64.5333L70.5332 68.7999C70.4631 68.9151 70.3521 68.9997 70.2223 69.0368C70.0926 69.0738 69.9537 69.0607 69.8333 68.9999C69.1306 68.6064 68.3386 68.3997 67.5333 68.3997C66.7279 68.3997 65.9359 68.6064 65.2332 68.9999C64.5516 69.3829 63.983 69.9391 63.585 70.6121C63.187 71.2852 62.9737 72.0514 62.9666 72.8333C62.9632 72.9648 62.9095 73.09 62.8164 73.1831C62.7234 73.2761 62.5981 73.3299 62.4666 73.3333H57.3666C57.2298 73.3369 57.0971 73.2864 56.9972 73.1928C56.8974 73.0992 56.8385 72.97 56.8332 72.8333V72.7333C56.8134 71.9674 56.5939 71.2201 56.1963 70.5652C55.7987 69.9104 55.2369 69.3708 54.5666 68.9999C53.8639 68.6064 53.072 68.3997 52.2666 68.3997C51.4612 68.3997 50.6693 68.6064 49.9666 68.9999C49.8957 69.0416 49.8154 69.0646 49.7333 69.0666C49.6396 69.0637 49.5481 69.0378 49.4667 68.9913C49.3854 68.9448 49.3167 68.8791 49.2666 68.7999L46.7333 64.5333C46.6994 64.4771 46.6777 64.4145 46.6695 64.3495C46.6613 64.2845 46.6668 64.2184 46.6856 64.1556C46.7045 64.0929 46.7362 64.0347 46.7789 63.9849C46.8215 63.9351 46.8741 63.8948 46.9333 63.8666C47.6051 63.489 48.1672 62.9433 48.5646 62.283C48.962 61.6226 49.1809 60.8704 49.1999 60.0999V59.9999C49.1973 59.2126 48.9862 58.4401 48.588 57.7609C48.1899 57.0817 47.6189 56.5201 46.9333 56.1333C46.8554 56.0899 46.79 56.0273 46.7433 55.9514C46.6966 55.8756 46.6702 55.7889 46.6666 55.6999C46.6731 55.6185 46.6958 55.5392 46.7333 55.4666L49.2999 51.1999C49.3627 51.0859 49.4677 51.001 49.5924 50.9636C49.717 50.9262 49.8514 50.9392 49.9666 50.9999C50.6694 51.3932 51.4613 51.5997 52.2666 51.5997C53.0719 51.5997 53.8638 51.3932 54.5666 50.9999C55.257 50.6242 55.8343 50.0706 56.2388 49.3966C56.6432 48.7225 56.8599 47.9526 56.8666 47.1666C56.8652 47.1006 56.8772 47.0349 56.9019 46.9736C56.9265 46.9124 56.9633 46.8567 57.01 46.81C57.0567 46.7633 57.1124 46.7265 57.1736 46.7019C57.2349 46.6772 57.3005 46.6652 57.3666 46.6666H62.4332C62.5701 46.663 62.7028 46.7135 62.8026 46.8071C62.9025 46.9007 62.9614 47.0298 62.9666 47.1666C62.9737 47.9485 63.187 48.7147 63.585 49.3877C63.983 50.0608 64.5516 50.6169 65.2332 50.9999C65.9359 51.3935 66.7279 51.6002 67.5333 51.6002C68.3386 51.6002 69.1306 51.3935 69.8333 50.9999L70.2666 50.7666L73.3333 55.8999L72.8999 56.1333C72.204 56.5111 71.623 57.0698 71.2182 57.7504C70.8133 58.4309 70.5997 59.2081 70.5997 59.9999C70.5997 60.7918 70.8133 61.569 71.2182 62.2495C71.623 62.93 72.204 63.4887 72.8999 63.8666ZM63.8999 59.9999C63.8929 58.9885 63.4857 58.021 62.7674 57.3089C62.049 56.5969 61.078 56.1981 60.0666 56.1999H60.0333C59.2847 56.2131 58.5566 56.447 57.9406 56.8725C57.3245 57.2979 56.8478 57.8959 56.5704 58.5913C56.293 59.2867 56.2272 60.0486 56.3812 60.7813C56.5353 61.514 56.9024 62.1848 57.4364 62.7096C57.9704 63.2344 58.6475 63.5898 59.3828 63.7311C60.118 63.8724 60.8786 63.7933 61.5691 63.5038C62.2596 63.2144 62.8492 62.7274 63.2638 62.104C63.6785 61.4806 63.8998 60.7486 63.8999 59.9999Z" fill="url(#paint0_linear_122_30534)"/>
  <defs>
    <linearGradient id="paint0_linear_122_30534" x1="32.1156" y1="8.33326" x2="46.9101" y2="51.9972" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F3F3F6"/>
      <stop offset="1" stop-color="#663DDE"/>
    </linearGradient>
  </defs>
</svg>
      ),
    },
    {
      title: 'DigiByte Genesis Mined',
      description:
        'Genesis block was successfully mined and the DigiByte blockchain officially launched.',
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" className='w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[80px]' viewBox="0 0 80 80" fill="none">
        <g clip-path="url(#clip0_122_30541)">
          <path d="M20.3497 21.6042L13.4188 22.1397C11.4903 22.2888 9.77262 23.2995 8.70606 24.9128L0.712846 37.0021C-0.096054 38.2255 -0.224647 39.7566 0.36863 41.0978C0.962063 42.4391 2.18158 43.3738 3.63079 43.5983L9.97684 44.5811C11.4614 36.703 15.0151 28.8443 20.3497 21.6042Z" fill="url(#paint0_linear_122_30541)"/>
          <path d="M35.4187 70.023L36.4017 76.3691C36.6262 77.8183 37.5609 79.0378 38.902 79.6311C39.4599 79.878 40.0505 79.9998 40.6382 79.9998C41.4637 79.9998 42.2833 79.7594 42.9979 79.2869L55.0875 71.2938C56.7007 70.2271 57.7115 68.5093 57.8602 66.581L58.3957 59.6501C51.1555 64.9849 43.2969 68.5387 35.4187 70.023Z" fill="url(#paint1_linear_122_30541)"/>
          <path d="M33.0321 65.6246C33.2524 65.6246 33.4739 65.6065 33.695 65.5696C36.9956 65.0177 40.1769 64.088 43.2115 62.8712L17.1289 36.7886C15.912 39.8231 14.9824 43.0043 14.4305 46.3051C14.213 47.6061 14.6494 48.9316 15.582 49.8644L30.1357 64.418C30.9101 65.1923 31.9552 65.6246 33.0321 65.6246Z" fill="url(#paint2_linear_122_30541)"/>
          <path d="M73.6211 35.4689C80.0037 23.1293 80.2401 10.0895 79.9065 3.97387C79.7923 1.87842 78.1217 0.207811 76.026 0.093593C75.0303 0.0392184 73.8501 0 72.52 0C65.6816 0 54.8612 1.03577 44.531 6.37901C36.3214 10.6254 25.5563 19.9755 19.2051 32.2632C19.2801 32.3218 19.3534 32.384 19.4224 32.453L47.5472 60.5778C47.6163 60.6469 47.6783 60.72 47.7369 60.795C60.0246 54.4436 69.3747 43.6786 73.6211 35.4689ZM46.515 16.9124C51.0839 12.3435 58.5184 12.343 63.0875 16.9124C65.301 19.1256 66.5199 22.0686 66.5199 25.1987C66.5199 28.3288 65.301 31.2718 63.0875 33.485C60.8033 35.7692 57.8018 36.9116 54.8014 36.9119C51.8 36.9121 48.7998 35.7699 46.515 33.485C44.3016 31.2718 43.0826 28.3288 43.0826 25.1987C43.0826 22.0686 44.3016 19.1256 46.515 16.9124Z" fill="url(#paint3_linear_122_30541)"/>
          <path d="M49.8294 30.1706C52.5708 32.912 57.0317 32.9121 59.7731 30.1706C61.1011 28.8425 61.8325 27.0768 61.8325 25.1987C61.8325 23.3206 61.1011 21.555 59.7731 20.227C58.4025 18.8562 56.6019 18.1709 54.8013 18.1709C53.0008 18.1709 51.2002 18.8562 49.8296 20.227C48.5016 21.555 47.77 23.3206 47.77 25.1987C47.77 27.0768 48.5014 28.8426 49.8294 30.1706Z" fill="black"/>
          <path d="M2.39144 65.9275C2.99128 65.9275 3.59112 65.6988 4.04862 65.2409L11.7007 57.5889C12.616 56.6736 12.616 55.1897 11.7007 54.2744C10.7855 53.3591 9.30144 53.3591 8.38612 54.2744L0.734092 61.9264C-0.181221 62.8417 -0.181221 64.3256 0.734092 65.2409C1.19175 65.6986 1.79159 65.9275 2.39144 65.9275Z" fill="url(#paint4_linear_122_30541)"/>
          <path d="M18.7132 61.2868C17.7981 60.3715 16.314 60.3715 15.3987 61.2868L0.686973 75.9985C-0.22834 76.9139 -0.22834 78.3978 0.686973 79.3131C1.14463 79.7707 1.74447 79.9995 2.34432 79.9995C2.94416 79.9995 3.544 79.7707 4.0015 79.3129L18.7131 64.6014C19.6285 63.686 19.6285 62.2021 18.7132 61.2868Z" fill="url(#paint5_linear_122_30541)"/>
          <path d="M22.4111 68.2995L14.7592 75.9516C13.8439 76.8669 13.8439 78.3508 14.7592 79.2661C15.2169 79.7237 15.8167 79.9526 16.4164 79.9526C17.0161 79.9526 17.6161 79.7239 18.0736 79.2661L25.7256 71.6141C26.641 70.6987 26.641 69.2148 25.7256 68.2995C24.8105 67.3842 23.3264 67.3842 22.4111 68.2995Z" fill="url(#paint6_linear_122_30541)"/>
        </g>
        <defs>
          <linearGradient id="paint0_linear_122_30541" x1="7.4456" y1="21.6042" x2="13.1879" y2="36.6141" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F3F3F6"/>
            <stop offset="1" stop-color="#663DDE"/>
          </linearGradient>
          <linearGradient id="paint1_linear_122_30541" x1="43.8256" y1="59.6501" x2="48.0208" y2="73.6305" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F3F3F6"/>
            <stop offset="1" stop-color="#663DDE"/>
          </linearGradient>
          <linearGradient id="paint2_linear_122_30541" x1="24.9261" y1="36.7886" x2="31.4894" y2="56.1592" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F3F3F6"/>
            <stop offset="1" stop-color="#663DDE"/>
          </linearGradient>
          <linearGradient id="paint3_linear_122_30541" x1="41.4489" y1="3.73619e-06" x2="55.2862" y2="40.8391" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F3F3F6"/>
            <stop offset="1" stop-color="#663DDE"/>
          </linearGradient>
          <linearGradient id="paint4_linear_122_30541" x1="4.56242" y1="53.5879" x2="7.37102" y2="61.877" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F3F3F6"/>
            <stop offset="1" stop-color="#663DDE"/>
          </linearGradient>
          <linearGradient id="paint5_linear_122_30541" x1="7.09831" y1="60.6003" x2="11.5137" y2="73.6317" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F3F3F6"/>
            <stop offset="1" stop-color="#663DDE"/>
          </linearGradient>
          <linearGradient id="paint6_linear_122_30541" x1="18.5875" y1="67.613" x2="21.3961" y2="75.9022" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F3F3F6"/>
            <stop offset="1" stop-color="#663DDE"/>
          </linearGradient>
          <clipPath id="clip0_122_30541">
            <rect width="80" height="80" fill="white"/>
          </clipPath>
        </defs>
      </svg>

      ),
    },
  ];


const Pagethree = () => {
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



  // avzd


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
        <div id='Currency' className='relative overflow-hidden pb-[40px] sm:pb-[40px] md:pb-[50px] lg:pb-[60px] xl:pb-[70px] 2xl:pb-[80px] bg-[#070312]'>
            <div  className='relative ' id="smooth-content">
                <div ref={wrapperRef} className='pt-[50px] sm:pt-[60px] md:pt-[80px] lg:pt-[100px] xl:pt-[130px] 2xl:pt-[160px] container mx-auto pb-[32px] sm:pb-[36px] md:pb-[40px] lg:pb-[48px] xl:pb-[64px] 2xl:pb-[99px] px-[24px] sm:px-0 w-full '>
                    <div ref={titleRef} className="TradeLikeAProWithXonicCapital text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[50px] 2xl:text-[60px] figtree text-center pb-[32px] sm:pb-[36px] md:pb-[40px] lg:pb-[48px] xl:pb-[64px] 2xl:pb-[78px] ">
                    <div className='gradientuser figtree'>The history of DigiByte.</div>
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

export default Pagethree;