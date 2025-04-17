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
      title: 'Truly decentralized',
      description:
        'DigiByte has never been funded through an ICO or significant amount of premined coins. There is no CEO or a company controlling the DigiByte blockchain.',
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[24px] sm:w-[32px] md:w-[36px] lg:w-[40px] xl:w-[48px] 2xl:w-[50px]"
          viewBox="0 0 50 50"
          fill="none"
        >
          <path
            d="M3.125 10.9375C3.125 8.77969 4.87344 7.03125 7.03125 7.03125C8.63281 7.03125 10.0047 7.99687 10.6078 9.375H14.8438C15.3453 9.375 15.8172 9.61562 16.1109 10.0234L19.9344 15.3172C19.0031 15.8063 18.1531 16.425 17.4031 17.15L14.0453 12.5H10.6078C10.0047 13.8781 8.63281 14.8438 7.03125 14.8438C4.87344 14.8438 3.125 13.0953 3.125 10.9375Z"
            fill="url(#paint0_linear_122_30388)"
          />
          <path
            d="M3.125 25C3.125 22.8422 4.87344 21.0938 7.03125 21.0938C8.63281 21.0938 10.0047 22.0594 10.6078 23.4375H14.1875C14.0219 24.5922 14.0219 25.4109 14.1875 26.5625H10.6078C10.0047 27.9406 8.63281 28.9062 7.03125 28.9062C4.87344 28.9062 3.125 27.1578 3.125 25Z"
            fill="url(#paint1_linear_122_30388)"
          />
          <path
            d="M21.0938 7.03125C21.0938 4.87344 22.8422 3.125 25 3.125C27.1578 3.125 28.9062 4.87344 28.9062 7.03125C28.9062 8.63281 27.9406 10.0047 26.5625 10.6078V14.1875C25.4094 14.0219 24.5891 14.0219 23.4375 14.1875V10.6078C22.0594 10.0047 21.0938 8.63281 21.0938 7.03125Z"
            fill="url(#paint2_linear_122_30388)"
          />
          <path
            d="M30.0671 15.3156L33.8906 10.0219C34.1828 9.61563 34.6546 9.375 35.1562 9.375H39.3921C39.9953 7.99687 41.3671 7.03125 42.9687 7.03125C45.1265 7.03125 46.8749 8.77969 46.8749 10.9375C46.8749 13.0953 45.1265 14.8438 42.9687 14.8438C41.3671 14.8438 39.9953 13.8781 39.3921 12.5H35.9546L32.5968 17.1484C31.8484 16.4234 30.9984 15.8047 30.0671 15.3156Z"
            fill="url(#paint3_linear_122_30388)"
          />
          <path
            d="M46.875 39.0625C46.875 41.2203 45.1266 42.9687 42.9688 42.9687C41.3672 42.9687 39.9954 42.0031 39.3922 40.625H35.1563C34.6547 40.625 34.1829 40.3844 33.8891 39.9766L30.0657 34.6828C30.9969 34.1937 31.8469 33.575 32.5969 32.85L35.9547 37.5H39.3922C39.9954 36.1219 41.3672 35.1562 42.9688 35.1562C45.1266 35.1562 46.875 36.9047 46.875 39.0625Z"
            fill="url(#paint4_linear_122_30388)"
          />
          <path
            d="M19.9328 34.6844L16.1094 39.9781C15.8172 40.3844 15.3453 40.625 14.8437 40.625H10.6078C10.0047 42.0031 8.63281 42.9688 7.03125 42.9688C4.87344 42.9688 3.125 41.2203 3.125 39.0625C3.125 36.9047 4.87344 35.1563 7.03125 35.1563C8.63281 35.1563 10.0047 36.1219 10.6078 37.5H14.0453L17.4031 32.8516C18.1516 33.5766 19.0016 34.1953 19.9328 34.6844Z"
            fill="url(#paint5_linear_122_30388)"
          />
          <path
            d="M46.875 25C46.875 27.1578 45.1266 28.9062 42.9687 28.9062C41.3672 28.9062 39.9953 27.9406 39.3922 26.5625H35.8125C35.9781 25.4094 35.9781 24.5891 35.8125 23.4375H39.3922C39.9953 22.0594 41.3672 21.0938 42.9687 21.0938C45.1266 21.0938 46.875 22.8422 46.875 25Z"
            fill="url(#paint6_linear_122_30388)"
          />
          <path
            d="M28.9062 42.9687C28.9062 45.1266 27.1578 46.875 25 46.875C22.8422 46.875 21.0938 45.1266 21.0938 42.9687C21.0938 41.3672 22.0594 39.9953 23.4375 39.3922V35.8125C24.5906 35.9781 25.4094 35.9781 26.5625 35.8125V39.3922C27.9406 39.9953 28.9062 41.3672 28.9062 42.9687Z"
            fill="url(#paint7_linear_122_30388)"
          />
          <path
            d="M33.5938 25C33.5938 29.7469 29.7469 33.5938 25 33.5938C20.2531 33.5938 16.4062 29.7469 16.4062 25C16.4062 20.2531 20.2531 16.4062 25 16.4062C29.7469 16.4062 33.5938 20.2531 33.5938 25Z"
            fill="url(#paint8_linear_122_30388)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_122_30388"
              x1="9.27525"
              y1="7.03125"
              x2="10.7591"
              y2="14.3062"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F3F3F6" />
              <stop offset="1" stopColor="#663DDE" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_122_30388"
              x1="7.17257"
              y1="21.0938"
              x2="8.4967"
              y2="26.6275"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F3F3F6" />
              <stop offset="1" stopColor="#663DDE" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_122_30388"
              x1="23.9522"
              y1="3.125"
              x2="27.1831"
              y2="9.85925"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F3F3F6" />
              <stop offset="1" stopColor="#663DDE" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_122_30388"
              x1="36.2168"
              y1="7.03125"
              x2="37.7003"
              y2="14.3052"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F3F3F6" />
              <stop offset="1" stopColor="#663DDE" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_122_30388"
              x1="36.2159"
              y1="32.85"
              x2="37.6998"
              y2="40.125"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F3F3F6" />
              <stop offset="1" stopColor="#663DDE" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_122_30388"
              x1="9.27468"
              y1="32.8516"
              x2="10.7582"
              y2="40.1255"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F3F3F6" />
              <stop offset="1" stopColor="#663DDE" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_122_30388"
              x1="39.8601"
              y1="21.0938"
              x2="41.1842"
              y2="26.6275"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F3F3F6" />
              <stop offset="1" stopColor="#663DDE" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_122_30388"
              x1="23.9522"
              y1="35.8125"
              x2="27.1831"
              y2="42.5467"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F3F3F6" />
              <stop offset="1" stopColor="#663DDE" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_122_30388"
              x1="22.6949"
              y1="16.4063"
              x2="26.6068"
              y2="27.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F3F3F6" />
              <stop offset="1" stopColor="#663DDE" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: 'More secure',
      description:
        'DigiByte uses 5 cryptographic algorithms and real time difficulty adjustment to prevent malicious mining centralization and hash power fluctuation.',
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[24px] sm:w-[32px] md:w-[36px] lg:w-[40px] xl:w-[48px] 2xl:w-[50px]"
          viewBox="0 0 50 50"
          fill="none"
        >
          <path
            d="M41.3907 10.4063L26.2657 3.4375L26.0314 3.34375C25.3546 3.17179 24.6456 3.17179 23.9689 3.34375L23.7345 3.4375L8.6095 10.4063C7.89509 10.7352 7.2966 11.2721 6.89236 11.9468C6.48812 12.6214 6.29695 13.4024 6.34387 14.1875L6.87512 23.0625C7.17659 28.1671 8.92307 33.0807 11.9109 37.2305C14.8987 41.3802 19.0047 44.595 23.7501 46.5C24.1478 46.679 24.5796 46.7696 25.0157 46.7656C25.4303 46.772 25.8412 46.6866 26.2189 46.5156C30.9701 44.6154 35.0827 41.4026 38.0763 37.2525C41.0699 33.1024 42.821 28.1862 43.1251 23.0781L43.6564 14.2031C43.7065 13.4155 43.5169 12.6311 43.1125 11.9533C42.708 11.2755 42.1078 10.7361 41.3907 10.4063ZM33.2032 21.3438L24.8595 30.7188C24.7238 30.8741 24.5586 31.001 24.3736 31.0922C24.1885 31.1834 23.9873 31.237 23.7814 31.25H23.7032C23.3106 31.2529 22.9313 31.1079 22.6407 30.8437L16.9064 25.5625C16.6018 25.2807 16.4216 24.8895 16.4055 24.4748C16.3894 24.0602 16.5386 23.6561 16.8204 23.3516C17.1022 23.047 17.4935 22.8668 17.9081 22.8507C18.3227 22.8346 18.7268 22.9838 19.0314 23.2656L23.5939 27.4688L30.8595 19.2813C31.1384 18.9909 31.5186 18.8194 31.9209 18.8025C32.3231 18.7856 32.7164 18.9247 33.0186 19.1906C33.3209 19.4566 33.5088 19.829 33.5432 20.2301C33.5776 20.6313 33.4558 21.0302 33.2032 21.3438Z"
            fill="url(#paint0_linear_122_30423)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_122_30423"
              x1="19.9943"
              y1="3.21479"
              x2="31.1448"
              y2="31.421"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F3F3F6" />
              <stop offset="1" stopColor="#663DDE" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: 'Much faster',
      description:
        'DigiByte blocks occur every 15 seconds which is 40x faster than Bitcoin and IOX faster than Litecoin. SegWit enables up to 4x amount of transactions per second with negligible fees.',
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[24px] sm:w-[32px] md:w-[36px] lg:w-[40px] xl:w-[48px] 2xl:w-[50px]"
          viewBox="0 0 50 50"
          fill="none"
        >
          <path
            d="M21.0776 0H29.525V2.23152H21.0776V0Z"
            fill="url(#paint0_linear_122_30459)"
          />
          <path
            d="M27.2316 6.73344V4.56912H23.3706V6.68835C23.9237 6.64882 26.5001 6.66399 27.2316 6.73344Z"
            fill="url(#paint1_linear_122_30459)"
          />
          <path
            d="M12.0452 10.6398C11.0703 9.82361 8.06278 8.28996 4.9381 10.9531C2.66812 12.8878 3.10712 16.2858 4.95786 18.4044C6.68564 15.2981 9.10007 12.6527 12.0452 10.6398Z"
            fill="url(#paint2_linear_122_30459)"
          />
          <path
            d="M45.1032 18.4046C46.9945 16.3253 47.1989 13.0254 45.1229 10.9532C43.1794 9.01335 40.0832 8.90908 38.0159 10.6398C40.9607 12.6526 43.3753 15.2982 45.1032 18.4046Z"
            fill="url(#paint3_linear_122_30459)"
          />
          <path
            d="M25.0306 27.7418C24.0613 27.7418 23.2727 28.5282 23.2727 29.495C23.2727 30.4618 24.0613 31.2482 25.0306 31.2482C25.9999 31.2482 26.7885 30.4618 26.7885 29.495C26.7885 28.5282 25.9999 27.7418 25.0306 27.7418Z"
            fill="black"
          />
          <path
            d="M42.6522 29.4359C42.6522 28.7904 43.1758 28.2671 43.8216 28.2671H45.6025C45.3174 23.4781 43.3773 19.1259 40.3441 15.7714L39.1263 17.0581C38.5815 17.5298 38.0305 17.5451 37.4731 17.1042C37.004 16.6606 36.9833 15.9208 37.4272 15.4519L38.6799 14.1282C35.3149 11.1594 30.972 9.26741 26.1997 9.00021V10.8532C26.1997 11.4987 25.6761 12.022 25.0303 12.022C24.3844 12.022 23.8608 11.4987 23.8608 10.8532V9.00021C19.0502 9.26955 14.6757 11.1897 11.2995 14.1999L12.6688 15.5684C13.1255 16.0248 13.1255 16.7649 12.6688 17.2214C12.1175 17.6778 11.5663 17.6778 11.015 17.2214L9.64479 15.8519C6.61157 19.2418 4.6871 23.636 4.44629 28.4649H6.43699C7.08283 28.4649 7.60644 28.9881 7.60644 29.6337C7.60644 30.2792 7.08283 30.8025 6.43699 30.8025H4.46349C4.76851 35.6119 6.74244 39.9769 9.8152 43.3272L11.155 41.9881C11.6118 41.5317 12.3522 41.5316 12.8089 41.988C13.2656 42.4444 13.2656 43.1845 12.809 43.6409L11.4906 44.9585C14.8868 47.9125 19.261 49.777 24.059 49.9999V48.2162C24.059 47.5707 24.5826 47.0474 25.2284 47.0474C25.8743 47.0474 26.3979 47.5707 26.3979 48.2162V49.977C31.1772 49.6637 35.5169 47.7216 38.8601 44.7025L37.6132 43.5237C37.144 43.0801 37.1233 42.3404 37.5672 41.8715C38.0111 41.4026 38.7511 41.3819 39.2204 41.8254L40.5041 43.039C43.4699 39.6815 45.3547 35.3552 45.6101 30.6045H43.8216C43.1759 30.6046 42.6522 30.0814 42.6522 29.4359ZM36.3533 20.3204L28.7896 27.8705C29.0064 28.3688 29.1273 28.9179 29.1273 29.495C29.1273 31.7505 27.2893 33.5857 25.0305 33.5857C22.7716 33.5857 20.9337 31.7505 20.9337 29.495C20.9337 27.2394 22.7715 25.4043 25.0305 25.4043C25.8595 25.4043 26.6313 25.6521 27.277 26.0766L34.7007 18.6665C35.1577 18.2103 35.8981 18.2109 36.3544 18.6675C36.8108 19.1241 36.8104 19.8642 36.3533 20.3204Z"
            fill="url(#paint4_linear_122_30459)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_122_30459"
              x1="24.1684"
              y1="1.37139e-07"
              x2="24.3168"
              y2="1.65784"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F3F3F6" />
              <stop offset="1" stopColor="#663DDE" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_122_30459"
              x1="24.7833"
              y1="4.56912"
              x2="25.0804"
              y2="6.13348"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F3F3F6" />
              <stop offset="1" stopColor="#663DDE" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_122_30459"
              x1="6.56181"
              y1="9.45439"
              x2="8.65486"
              y2="15.4228"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F3F3F6" />
              <stop offset="1" stopColor="#663DDE" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_122_30459"
              x1="41.1574"
              y1="9.41559"
              x2="43.2784"
              y2="15.3948"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F3F3F6" />
              <stop offset="1" stopColor="#663DDE" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_122_30459"
              x1="19.5074"
              y1="9.00022"
              x2="28.8096"
              y2="36.5644"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F3F3F6" />
              <stop offset="1" stopColor="#663DDE" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
        title: 'Forward thinking',
        description:
          'Over the past 11 years, DigiByte has repeatedly set itself apart with multiple blockchain firsts, such as DigiShield guard, MultiAlgo mining,',
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[24px] sm:w-[32px] md:w-[36px] lg:w-[40px] xl:w-[48px] 2xl:w-[50px]" viewBox="0 0 50 50" fill="none">
            <g clip-path="url(#clip0_122_30417)">
              <path d="M49.525 21.7958L31.8167 4.60833C31.3667 4.17083 30.6937 4.04792 30.1208 4.28959C29.5437 4.53542 29.1667 5.10209 29.1667 5.72917V14.5875C13.0354 14.8667 0 28.075 0 44.2708C0 44.9833 0.502083 45.5667 1.19167 45.7458C1.31458 45.7771 1.4375 45.7917 1.56042 45.7917C2.13125 45.7917 2.6875 45.4646 2.97292 44.95C7.65 36.5 16.5542 31.25 26.2125 31.25H29.1667V40.1042C29.1667 40.7313 29.5437 41.2979 30.1208 41.5438C30.6917 41.7854 31.3687 41.6625 31.8167 41.225L49.525 24.0375C49.8292 23.7438 50 23.3396 50 22.9167C50 22.4938 49.8292 22.0896 49.525 21.7958Z" fill="url(#paint0_linear_122_30417)"/>
            </g>
            <defs>
              <linearGradient id="paint0_linear_122_30417" x1="18.2941" y1="4.16756" x2="26.4385" y2="33.0414" gradientUnits="userSpaceOnUse">
                <stop stop-color="#F3F3F6"/>
                <stop offset="1" stop-color="#663DDE"/>
              </linearGradient>
              <clipPath id="clip0_122_30417">
                <rect width="50" height="50" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        ),
    },
    {
    title: 'Blazing Fast Speed',
    description:
        'Enjoy instant transactions and real-time performance with a system built for speed. No lags, just pure efficiency.',
    svg: (
        <svg xmlns="http://www.w3.org/2000/svg"className="w-[24px] sm:w-[32px] md:w-[36px] lg:w-[40px] xl:w-[48px] 2xl:w-[50px]" viewBox="0 0 50 50" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M28.9062 3.90625H7.03125C6.17187 3.90625 5.46875 4.60625 5.46875 5.46875C5.46875 6.33125 6.17187 7.03125 7.03125 7.03125H17.8595C16.422 7.91484 15.1016 8.96562 13.9219 10.1562H8.59375C7.73437 10.1562 7.03125 10.8563 7.03125 11.7188C7.03125 12.5812 7.73437 13.2812 8.59375 13.2812H11.3672C10.711 14.2672 10.1329 15.3117 9.64069 16.4062H7.8125C6.95312 16.4062 6.25 17.1063 6.25 17.9688C6.25 18.8312 6.95312 19.5312 7.8125 19.5312H8.53119C8.19525 20.7922 7.9688 22.0977 7.86724 23.4375H3.90625C3.04687 23.4375 2.34375 24.1375 2.34375 25C2.34375 25.8625 3.04687 26.5625 3.90625 26.5625H7.86724C7.9688 27.9031 8.19525 29.2086 8.53119 30.4688H1.5625C0.703125 30.4688 0 31.1688 0 32.0312C0 32.8937 0.703125 33.5938 1.5625 33.5938H9.64069C10.1329 34.6875 10.711 35.732 11.3672 36.7188H6.25C5.39062 36.7188 4.6875 37.4188 4.6875 38.2812C4.6875 39.1437 5.39062 39.8438 6.25 39.8438H13.9219C15.1016 41.0344 16.422 42.0852 17.8595 42.9688H10.9375C10.0781 42.9688 9.375 43.6688 9.375 44.5312C9.375 45.3937 10.0781 46.0938 10.9375 46.0938H28.9062C40.5469 46.0938 50 36.6422 50 25C50 13.3578 40.5469 3.90625 28.9062 3.90625ZM6.25 42.9688H1.5625C0.703125 42.9688 0 43.6688 0 44.5312C0 45.3937 0.703125 46.0938 1.5625 46.0938H6.25C7.10938 46.0938 7.8125 45.3937 7.8125 44.5312C7.8125 43.6688 7.10938 42.9688 6.25 42.9688ZM27.3438 11.7188V25C27.3438 25.8633 28.0391 26.5625 28.9062 26.5625H38.2812C39.1406 26.5625 39.8438 25.8625 39.8438 25C39.8438 24.1375 39.1406 23.4375 38.2812 23.4375H30.4688V11.7188C30.4688 10.8563 29.7656 10.1562 28.9062 10.1562C28.0469 10.1562 27.3438 10.8563 27.3438 11.7188ZM3.125 16.4062H1.5625C0.703125 16.4062 0 17.1063 0 17.9688C0 18.8312 0.703125 19.5312 1.5625 19.5312H3.125C3.98438 19.5312 4.6875 18.8312 4.6875 17.9688C4.6875 17.1063 3.98438 16.4062 3.125 16.4062Z" fill="url(#paint0_linear_122_30452)"/>
        <defs>
            <linearGradient id="paint0_linear_122_30452" x1="18.2941" y1="3.90625" x2="26.6437" y2="33.1122" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F3F3F6"/>
            <stop offset="1" stop-color="#663DDE"/>
            </linearGradient>
        </defs>
        </svg>
    ),
    },
    {
        title: 'Enhanced Security',
        description:
            'Your data and assets are protected with advanced encryption and decentralized protocols. Built to resist threats, ensuring peace of mind at every step.',
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[24px] sm:w-[32px] md:w-[36px] lg:w-[40px] xl:w-[48px] 2xl:w-[50px]" viewBox="0 0 50 50" fill="none">
  <path d="M10.8281 38.5625C10.9062 38.5781 10.9844 38.5781 11.0625 38.5781H12.4063V31.3437C12.4063 29.2812 14.0156 27.5781 16.0469 27.4531C16.4375 22.8594 20.3125 19.2344 25 19.2344C29.6875 19.2344 33.5625 22.8594 33.9531 27.4531C35.9844 27.5781 37.5937 29.2812 37.5937 31.3437V38.5781H38.9375C39.0156 38.5781 39.0938 38.5781 39.1719 38.5625C44.4531 37.7812 48.4375 33.1406 48.4375 27.7656C48.4375 21.9999 43.9375 17.2656 38.2656 16.8593C37.9375 13.8907 36.6094 11.125 34.4375 8.95309C31.9062 6.42184 28.5469 5.04684 25 5.04684C18.1562 5.04684 12.5 10.2187 11.7344 16.8593C6.0625 17.2656 1.5625 21.9999 1.5625 27.7656C1.5625 33.1406 5.54686 37.7812 10.8281 38.5625Z" fill="url(#paint0_linear_122_30491)"/>
  <path d="M25 21.5781C21.3437 21.5781 18.3594 24.5625 18.3594 28.2187V29.7812H16.3125C15.4531 29.7812 14.75 30.4844 14.75 31.3437V43.3906C14.75 44.2656 15.4531 44.9531 16.3125 44.9531H33.6875C34.5469 44.9531 35.25 44.2656 35.25 43.3906V31.3437C35.25 30.4844 34.5469 29.7812 33.6875 29.7812H31.6406V28.2187C31.6406 24.5625 28.6563 21.5781 25 21.5781ZM28.5156 29.7812H21.4844V28.2187C21.4844 26.2813 23.0625 24.7031 25 24.7031C26.9375 24.7031 28.5156 26.2813 28.5156 28.2187V29.7812Z" fill="url(#paint1_linear_122_30491)"/>
  <defs>
    <linearGradient id="paint0_linear_122_30491" x1="18.7132" y1="5.04685" x2="24.4617" y2="28.7642" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F3F3F6"/>
      <stop offset="1" stop-color="#663DDE"/>
    </linearGradient>
    <linearGradient id="paint1_linear_122_30491" x1="22.2506" y1="21.5781" x2="28.1351" y2="36.8095" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F3F3F6"/>
      <stop offset="1" stop-color="#663DDE"/>
    </linearGradient>
  </defs>
</svg>
        ),
    },
  ];


const Pageone = () => {
  const wrapperRef = useRef(null);
  const gridItem1Ref = useRef(null);
  const gridItem2Ref = useRef(null);
  const gridItem3Ref = useRef(null);
  const titleRef = useRef(null);
  const acquireRef = useRef(null);

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


  // itesms

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
          duration: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 100%',
            toggleActions: 'play none none none',
          },
          delay: index * 0.1, // Delay between each item
        }
      );
    });
  }, []);



    
    return (
        <div id='DigiAssets' ref={wrapperRef} className='relative '>
            <div className='relative overflow-hidden pb-[50px] sm:pb-[50px] md:pb-[60px] lg:pb-[90px] xl:pb-[110px] 2xl:pb-[141px]' id="smooth-content">
            <Image className="absolute left-0 top-0 -translate-y-1/2 z-[1] w-full" src={linerone} alt='leading...'/>
                
                <div className='pt-[50px] sm:pt-[60px] md:pt-[80px] lg:pt-[100px] xl:pt-[130px] 2xl:pt-[160px] container mx-auto pb-[32px] sm:pb-[36px] md:pb-[40px] lg:pb-[48px] xl:pb-[64px] 2xl:pb-[99px] px-[24px] sm:px-0 w-full '>
                    <div ref={titleRef} className="TradeLikeAProWithXonicCapital figtree text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[50px] 2xl:text-[60px] figtree text-center pb-[32px] sm:pb-[36px] md:pb-[40px] lg:pb-[48px] xl:pb-[64px] 2xl:pb-[78px] relative z-[1]">
                    What makes DigiByte stronger <div className='gradientuser'>than others?</div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-[13px] sm:gap-[14px] md:gap-[15px] lg:gap-[16px] xl:gap-[20px] 2xl:gap-[24px] w-full">
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

export default Pageone;