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
      title: 'Easy to use',
      description:
        'Getting started to use DigiByte is even easier than sending an SMS. You can send and receive DigiBytes using the devices you already know and love.',
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-[24px] sm:w-[32px] md:w-[36px] lg:w-[40px] xl:w-[48px] 2xl:w-[50px]" viewBox="0 0 50 50" fill="none">
  <path d="M40.1001 42.5084C40.1001 42.9667 39.7251 43.3417 39.2667 43.3417H5.00008C4.54175 43.3417 4.16675 42.9667 4.16675 42.5084C4.16675 42.05 4.54175 41.675 5.00008 41.675H39.2667C39.7251 41.675 40.1001 42.05 40.1001 42.5084Z" fill="url(#paint0_linear_122_30402)"/>
  <path d="M38.4 33.3252V36.0002C38.4 37.9168 36.8417 39.4752 34.925 39.4752H9.35C7.43333 39.4752 5.875 37.9168 5.875 36.0002V18.6835C5.875 16.7668 7.43333 15.2085 9.35 15.2085H27.625V28.9002C27.625 31.3418 29.6083 33.3252 32.0417 33.3252H38.4Z" fill="url(#paint1_linear_122_30402)"/>
  <path d="M43.0834 6.65845H32.0417C30.5251 6.65845 29.2917 7.89178 29.2917 9.41678V28.9084C29.2917 30.4251 30.5251 31.6668 32.0417 31.6668H43.0834C44.6001 31.6668 45.8334 30.4251 45.8334 28.9084V9.41678C45.8334 7.88345 44.6001 6.65845 43.0834 6.65845ZM40.2001 28.9168H34.9334C34.4751 28.9168 34.1001 28.5418 34.1001 28.0834C34.1001 27.6251 34.4751 27.2501 34.9334 27.2501H40.2001C40.6584 27.2501 41.0334 27.6251 41.0334 28.0834C41.0334 28.5418 40.6584 28.9168 40.2001 28.9168Z" fill="url(#paint2_linear_122_30402)"/>
  <defs>
    <linearGradient id="paint0_linear_122_30402" x1="17.3141" y1="41.675" x2="17.3337" y2="42.9229" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F3F3F6"/>
      <stop offset="1" stop-color="#663DDE"/>
    </linearGradient>
    <linearGradient id="paint1_linear_122_30402" x1="17.7753" y1="15.2085" x2="22.0933" y2="32.2895" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F3F3F6"/>
      <stop offset="1" stop-color="#663DDE"/>
    </linearGradient>
    <linearGradient id="paint2_linear_122_30402" x1="35.3441" y1="6.65845" x2="42.9434" y2="21.4937" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F3F3F6"/>
      <stop offset="1" stop-color="#663DDE"/>
    </linearGradient>
  </defs>
</svg>
      ),
    },
    {
      title: 'Not an ICO',
      description:
        'DigiByte has never been funded through an ICO or significant amount of premined coins (0% remaining). There is no CEO or a company controlling the DigiByte blockchain.',
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-[24px] sm:w-[32px] md:w-[36px] lg:w-[40px] xl:w-[48px] 2xl:w-[50px]" viewBox="0 0 50 50" fill="none">
  <path d="M11.7188 16.9277H0V47.8574H11.7188V16.9277Z" fill="url(#paint0_linear_122_30430)"/>
  <path d="M48.9348 29.8552C48.9348 28.7395 48.5646 27.7087 47.9407 26.8789C49.187 25.976 50 24.5101 50 22.8573C50 20.1203 47.7731 17.8935 45.0361 17.8935H33.7524L35.3228 12.4694V9.87046C35.3228 5.08149 31.4266 1.1853 26.6376 1.1853C25.4764 1.1853 24.5317 2.13003 24.5317 3.29116V9.05288C23.7486 10.3062 19.3998 15.1861 14.6484 20.2988V45.9326L18.7029 47.453C21.1128 48.3567 23.6397 48.8149 26.2136 48.8149H41.8404C44.5774 48.8149 46.8042 46.588 46.8042 43.851C46.8042 42.7358 46.4345 41.7052 45.8111 40.8755C47.0572 39.9728 47.8694 38.5059 47.8694 36.8531C47.8694 35.7374 47.4992 34.7066 46.8755 33.8767C48.1218 32.9742 48.9348 31.5083 48.9348 29.8552Z" fill="url(#paint1_linear_122_30430)"/>
  <defs>
    <linearGradient id="paint0_linear_122_30430" x1="4.28768" y1="16.9277" x2="15.7969" y2="29.7976" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F3F3F6"/>
      <stop offset="1" stop-color="#663DDE"/>
    </linearGradient>
    <linearGradient id="paint1_linear_122_30430" x1="27.5829" y1="1.18531" x2="41.0577" y2="30.7024" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F3F3F6"/>
      <stop offset="1" stop-color="#663DDE"/>
    </linearGradient>
  </defs>
</svg>
      ),
    },
    {
      title: 'Much faster',
      description:
        'DigiByte transactions are confirmed in approx. 15 seconds, which is 40 times faster than Bitcoin and 10 times faster than Litecoin.',
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-[24px] sm:w-[32px] md:w-[36px] lg:w-[40px] xl:w-[48px] 2xl:w-[50px]" viewBox="0 0 50 50" fill="none">
  <path d="M21.0776 0H29.525V2.23152H21.0776V0Z" fill="url(#paint0_linear_122_30471)"/>
  <path d="M27.2316 6.73341V4.56909H23.3706V6.68832C23.9237 6.64879 26.5001 6.66396 27.2316 6.73341Z" fill="url(#paint1_linear_122_30471)"/>
  <path d="M12.0452 10.6398C11.0703 9.82356 8.06278 8.28991 4.9381 10.9531C2.66812 12.8878 3.10712 16.2857 4.95786 18.4043C6.68564 15.298 9.10007 12.6526 12.0452 10.6398Z" fill="url(#paint2_linear_122_30471)"/>
  <path d="M45.1032 18.4045C46.9945 16.3253 47.1989 13.0254 45.1229 10.9531C43.1794 9.01329 40.0832 8.90902 38.0159 10.6398C40.9607 12.6525 43.3753 15.2981 45.1032 18.4045Z" fill="url(#paint3_linear_122_30471)"/>
  <path d="M25.0306 27.7417C24.0613 27.7417 23.2727 28.5281 23.2727 29.4949C23.2727 30.4617 24.0613 31.2481 25.0306 31.2481C25.9999 31.2481 26.7885 30.4617 26.7885 29.4949C26.7885 28.5281 25.9999 27.7417 25.0306 27.7417Z" fill="black"/>
  <path d="M42.6522 29.4359C42.6522 28.7904 43.1758 28.2671 43.8216 28.2671H45.6025C45.3174 23.4781 43.3773 19.1259 40.3441 15.7714L39.1263 17.0582C38.5815 17.5298 38.0305 17.5451 37.4731 17.1042C37.004 16.6606 36.9833 15.9209 37.4272 15.452L38.6799 14.1282C35.3149 11.1594 30.972 9.26744 26.1997 9.00024V10.8532C26.1997 11.4987 25.6761 12.022 25.0303 12.022C24.3844 12.022 23.8608 11.4987 23.8608 10.8532V9.00024C19.0502 9.26958 14.6757 11.1898 11.2995 14.1999L12.6688 15.5684C13.1255 16.0248 13.1255 16.7649 12.6688 17.2214C12.1175 17.6778 11.5663 17.6778 11.015 17.2214L9.64479 15.852C6.61157 19.2418 4.6871 23.636 4.44629 28.4649H6.43699C7.08283 28.4649 7.60644 28.9882 7.60644 29.6337C7.60644 30.2792 7.08283 30.8025 6.43699 30.8025H4.46349C4.76851 35.6119 6.74244 39.977 9.8152 43.3273L11.155 41.9882C11.6118 41.5318 12.3522 41.5317 12.8089 41.9881C13.2656 42.4445 13.2656 43.1845 12.809 43.6409L11.4906 44.9586C14.8868 47.9125 19.261 49.7771 24.059 49.9999V48.2163C24.059 47.5708 24.5826 47.0475 25.2284 47.0475C25.8743 47.0475 26.3979 47.5708 26.3979 48.2163V49.9771C31.1772 49.6637 35.5169 47.7216 38.8601 44.7025L37.6132 43.5237C37.144 43.0802 37.1233 42.3404 37.5672 41.8715C38.0111 41.4026 38.7511 41.382 39.2204 41.8255L40.5041 43.039C43.4699 39.6815 45.3547 35.3553 45.6101 30.6045H43.8216C43.1759 30.6046 42.6522 30.0814 42.6522 29.4359ZM36.3533 20.3204L28.7896 27.8705C29.0064 28.3688 29.1273 28.918 29.1273 29.495C29.1273 31.7506 27.2893 33.5857 25.0305 33.5857C22.7716 33.5857 20.9337 31.7506 20.9337 29.495C20.9337 27.2395 22.7715 25.4043 25.0305 25.4043C25.8595 25.4043 26.6313 25.6522 27.277 26.0766L34.7007 18.6665C35.1577 18.2103 35.8981 18.2109 36.3544 18.6676C36.8108 19.1242 36.8104 19.8642 36.3533 20.3204Z" fill="url(#paint4_linear_122_30471)"/>
  <defs>
    <linearGradient id="paint0_linear_122_30471" x1="24.1684" y1="1.37139e-07" x2="24.3168" y2="1.65784" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F3F3F6"/>
      <stop offset="1" stop-color="#663DDE"/>
    </linearGradient>
    <linearGradient id="paint1_linear_122_30471" x1="24.7833" y1="4.56909" x2="25.0804" y2="6.13345" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F3F3F6"/>
      <stop offset="1" stop-color="#663DDE"/>
    </linearGradient>
    <linearGradient id="paint2_linear_122_30471" x1="6.56181" y1="9.45435" x2="8.65486" y2="15.4227" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F3F3F6"/>
      <stop offset="1" stop-color="#663DDE"/>
    </linearGradient>
    <linearGradient id="paint3_linear_122_30471" x1="41.1574" y1="9.41553" x2="43.2784" y2="15.3948" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F3F3F6"/>
      <stop offset="1" stop-color="#663DDE"/>
    </linearGradient>
    <linearGradient id="paint4_linear_122_30471" x1="19.5074" y1="9.00025" x2="28.8096" y2="36.5644" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F3F3F6"/>
      <stop offset="1" stop-color="#663DDE"/>
    </linearGradient>
  </defs>
</svg>
      ),
    },
    {
        title: 'Always secure',
        description:
          'DigiByte has been built on the uncrackable technology of the Bitcoin blockchain and implemented various advanced enhancements over it such as DigiShield guard',
        svg: (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-[24px] sm:w-[32px] md:w-[36px] lg:w-[40px] xl:w-[48px] 2xl:w-[50px]" viewBox="0 0 50 50" fill="none">
  <g clip-path="url(#clip0_122_30441)">
    <path d="M31.6005 10.8852L27.4577 6.73957C25.9378 5.22336 23.6121 5.12931 21.9041 6.30216C17.7987 3.4131 12.9005 0.346012 12.6791 0.212613C11.9839 -0.207992 11.0841 0.0152499 10.6678 0.707535C10.2486 1.39992 10.4704 2.30109 11.1627 2.71886C11.2137 2.7507 15.747 5.59298 19.6712 8.3133L19.1707 8.81378C17.4584 10.5261 17.4584 13.3127 19.1707 15.0279L23.3149 19.1707C25.0352 20.8909 27.8138 20.886 29.5291 19.1707L30.0292 18.6706C32.7488 22.5926 35.4954 27.1292 35.5271 27.1802C35.9433 27.8694 36.8412 28.095 37.5385 27.6751C38.2309 27.2574 38.4525 26.3576 38.0334 25.6653C37.9 25.4425 34.929 20.5419 32.0396 16.4372C33.2123 14.727 33.1189 12.4036 31.6005 10.8852Z" fill="url(#paint0_linear_122_30441)"/>
    <path d="M36.7188 35.2539C29.4238 35.2539 23.5352 33.2909 23.5352 30.8594V36.7188C23.5352 39.1503 29.4238 41.1133 36.7188 41.1133C44.0137 41.1133 50 39.1503 50 36.7188V30.8594C50 33.2909 44.0137 35.2539 36.7188 35.2539Z" fill="url(#paint1_linear_122_30441)"/>
    <path d="M36.7188 44.043C29.4238 44.043 23.5352 42.08 23.5352 39.6484V45.5078C23.5352 47.9394 29.4238 50 36.7188 50C44.0137 50 50 47.9394 50 45.5078V39.6484C50 42.08 44.0137 44.043 36.7188 44.043Z" fill="url(#paint2_linear_122_30441)"/>
    <path d="M40.2773 23.7178C40.432 23.971 40.5416 24.1516 40.5468 24.1604C41.7878 26.211 41.1451 28.9216 39.0519 30.1843C36.9402 31.4583 34.2464 30.7288 33.0194 28.6951C32.6779 28.1344 31.5469 26.2909 30.1568 24.1393C26.2166 24.8989 23.5352 26.3032 23.5352 27.9297C23.5352 30.3567 29.4376 32.3242 36.7188 32.3242C43.9999 32.3242 50 30.3567 50 27.9297C50 25.9166 45.8175 24.2379 40.2773 23.7178Z" fill="url(#paint3_linear_122_30441)"/>
    <path d="M0.429199 35.7792L2.50059 37.8521C3.07246 38.4239 3.99961 38.4244 4.57197 37.8521L21.2128 21.2112L17.0993 17.0992C17.089 17.0889 17.0823 17.0764 17.0722 17.0659L0.429199 33.7078C-0.143066 34.28 -0.143066 35.207 0.429199 35.7792Z" fill="url(#paint4_linear_122_30441)"/>
  </g>
  <defs>
    <linearGradient id="paint0_linear_122_30441" x1="20.6235" y1="1.71379e-06" x2="26.9883" y2="18.7194" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F3F3F6"/>
      <stop offset="1" stop-color="#663DDE"/>
    </linearGradient>
    <linearGradient id="paint1_linear_122_30441" x1="33.2182" y1="30.8594" x2="34.2092" y2="38.4081" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F3F3F6"/>
      <stop offset="1" stop-color="#663DDE"/>
    </linearGradient>
    <linearGradient id="paint2_linear_122_30441" x1="33.2182" y1="39.6484" x2="34.2278" y2="47.2666" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F3F3F6"/>
      <stop offset="1" stop-color="#663DDE"/>
    </linearGradient>
    <linearGradient id="paint3_linear_122_30441" x1="33.2182" y1="23.7178" x2="33.9198" y2="30.0856" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F3F3F6"/>
      <stop offset="1" stop-color="#663DDE"/>
    </linearGradient>
    <linearGradient id="paint4_linear_122_30441" x1="7.76139" y1="17.0659" x2="12.5906" y2="31.3169" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F3F3F6"/>
      <stop offset="1" stop-color="#663DDE"/>
    </linearGradient>
    <clipPath id="clip0_122_30441">
      <rect width="50" height="50" fill="white"/>
    </clipPath>
  </defs>
</svg>
        ),
    },
    {
    title: 'Mineable',
    description:
        'DigiByte is a 100% Proof of Work (PoW) blockchain that can be mined with five algorithms called Sha256, Scrypt, Skein, Qubit and Odocrypt.',
    svg: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-[24px] sm:w-[32px] md:w-[36px] lg:w-[40px] xl:w-[48px] 2xl:w-[50px]" viewBox="0 0 50 50" fill="none">
  <g clip-path="url(#clip0_122_30441)">
    <path d="M31.6005 10.8852L27.4577 6.73957C25.9378 5.22336 23.6121 5.12931 21.9041 6.30216C17.7987 3.4131 12.9005 0.346012 12.6791 0.212613C11.9839 -0.207992 11.0841 0.0152499 10.6678 0.707535C10.2486 1.39992 10.4704 2.30109 11.1627 2.71886C11.2137 2.7507 15.747 5.59298 19.6712 8.3133L19.1707 8.81379C17.4584 10.5261 17.4584 13.3127 19.1707 15.0279L23.3149 19.1707C25.0352 20.8909 27.8138 20.886 29.5291 19.1707L30.0292 18.6706C32.7488 22.5926 35.4954 27.1292 35.5271 27.1802C35.9433 27.8694 36.8412 28.095 37.5385 27.6751C38.2309 27.2574 38.4525 26.3576 38.0334 25.6653C37.9 25.4425 34.929 20.5419 32.0396 16.4372C33.2123 14.727 33.1189 12.4036 31.6005 10.8852Z" fill="url(#paint0_linear_122_30441)"/>
    <path d="M36.7188 35.2539C29.4238 35.2539 23.5352 33.2909 23.5352 30.8594V36.7188C23.5352 39.1503 29.4238 41.1133 36.7188 41.1133C44.0137 41.1133 50 39.1503 50 36.7188V30.8594C50 33.2909 44.0137 35.2539 36.7188 35.2539Z" fill="url(#paint1_linear_122_30441)"/>
    <path d="M36.7188 44.043C29.4238 44.043 23.5352 42.08 23.5352 39.6484V45.5078C23.5352 47.9394 29.4238 50 36.7188 50C44.0137 50 50 47.9394 50 45.5078V39.6484C50 42.08 44.0137 44.043 36.7188 44.043Z" fill="url(#paint2_linear_122_30441)"/>
    <path d="M40.2773 23.7178C40.432 23.971 40.5416 24.1516 40.5468 24.1604C41.7878 26.211 41.1451 28.9216 39.0519 30.1843C36.9402 31.4583 34.2464 30.7288 33.0194 28.6951C32.6779 28.1344 31.5469 26.2909 30.1568 24.1393C26.2166 24.8989 23.5352 26.3032 23.5352 27.9297C23.5352 30.3567 29.4376 32.3242 36.7188 32.3242C43.9999 32.3242 50 30.3567 50 27.9297C50 25.9166 45.8175 24.2379 40.2773 23.7178Z" fill="url(#paint3_linear_122_30441)"/>
    <path d="M0.429199 35.7792L2.50059 37.852C3.07246 38.4239 3.99961 38.4244 4.57197 37.852L21.2128 21.2112L17.0993 17.0992C17.089 17.0889 17.0823 17.0764 17.0722 17.0659L0.429199 33.7078C-0.143066 34.28 -0.143066 35.207 0.429199 35.7792Z" fill="url(#paint4_linear_122_30441)"/>
  </g>
  <defs>
    <linearGradient id="paint0_linear_122_30441" x1="20.6235" y1="1.71379e-06" x2="26.9883" y2="18.7194" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F3F3F6"/>
      <stop offset="1" stop-color="#663DDE"/>
    </linearGradient>
    <linearGradient id="paint1_linear_122_30441" x1="33.2182" y1="30.8594" x2="34.2092" y2="38.4081" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F3F3F6"/>
      <stop offset="1" stop-color="#663DDE"/>
    </linearGradient>
    <linearGradient id="paint2_linear_122_30441" x1="33.2182" y1="39.6484" x2="34.2278" y2="47.2666" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F3F3F6"/>
      <stop offset="1" stop-color="#663DDE"/>
    </linearGradient>
    <linearGradient id="paint3_linear_122_30441" x1="33.2182" y1="23.7178" x2="33.9198" y2="30.0856" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F3F3F6"/>
      <stop offset="1" stop-color="#663DDE"/>
    </linearGradient>
    <linearGradient id="paint4_linear_122_30441" x1="7.76139" y1="17.0659" x2="12.5906" y2="31.3169" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F3F3F6"/>
      <stop offset="1" stop-color="#663DDE"/>
    </linearGradient>
    <clipPath id="clip0_122_30441">
      <rect className="w-[24px] sm:w-[32px] md:w-[36px] lg:w-[40px] xl:w-[48px] 2xl:w-[50px]" fill="white"/>
    </clipPath>
  </defs>
</svg>
    ),
    },
    {
        title: 'Manageable units',
        description:
            'Compared to 21 million Bitcoin, 21 billion DigiByte (1000:1 ratio to BTC) have been designed to be ready for mass adoption.',
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[24px] sm:w-[32px] md:w-[36px] lg:w-[40px] xl:w-[48px] 2xl:w-[50px]" viewBox="0 0 47 50" fill="none">
  <path d="M23.2502 7.75007C10.3851 7.75007 0 4.2882 0 0V10.3334C0 14.6216 10.3851 18.0835 23.2502 18.0835C36.1153 18.0835 46.6726 14.6216 46.6726 10.3334V0C46.6726 4.2882 36.1153 7.75007 23.2502 7.75007Z" fill="url(#paint0_linear_122_30483)"/>
  <path d="M23.2502 23.2503C10.3851 23.2503 0 19.7884 0 15.5002V25.8337C0 30.1219 10.3851 33.756 23.2502 33.756C36.1153 33.756 46.6726 30.1219 46.6726 25.8337V15.5002C46.6726 19.7884 36.1153 23.2503 23.2502 23.2503Z" fill="url(#paint1_linear_122_30483)"/>
  <path d="M23.2502 39.4945C10.3851 39.4945 0 36.0326 0 31.7444V42.0778C0 46.366 10.3851 50.0001 23.2502 50.0001C36.1153 50.0001 46.6726 46.366 46.6726 42.0778V31.7444C46.6726 36.0326 36.1153 39.4945 23.2502 39.4945Z" fill="url(#paint2_linear_122_30483)"/>
  <defs>
    <linearGradient id="paint0_linear_122_30483" x1="17.0767" y1="1.11133e-06" x2="18.8244" y2="13.3128" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F3F3F6"/>
      <stop offset="1" stop-color="#663DDE"/>
    </linearGradient>
    <linearGradient id="paint1_linear_122_30483" x1="17.0767" y1="15.5002" x2="18.8573" y2="28.9354" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F3F3F6"/>
      <stop offset="1" stop-color="#663DDE"/>
    </linearGradient>
    <linearGradient id="paint2_linear_122_30483" x1="17.0767" y1="31.7444" x2="18.8573" y2="45.1796" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F3F3F6"/>
      <stop offset="1" stop-color="#663DDE"/>
    </linearGradient>
  </defs>
</svg>
        ),
    },
  ];


const Pageone = () => {
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



  // aegerv

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
        <div id='Digi-ID' ref={wrapperRef} className='relative overflow-hidden pb-[50px] sm:pb-[50px] md:pb-[60px] lg:pb-[90px] xl:pb-[110px] 2xl:pb-[141px]'>
            <div className='relative ' id="smooth-content">
            <Image className="absolute left-0 top-0 -translate-y-1/2 z-[1] w-full" src={linerone} alt='leading...'/>
                
                <div className='pt-[50px] sm:pt-[60px] md:pt-[80px] lg:pt-[100px] xl:pt-[130px] 2xl:pt-[160px] container mx-auto pb-[32px] sm:pb-[36px] md:pb-[40px] lg:pb-[48px] xl:pb-[64px] 2xl:pb-[99px] px-[24px] sm:px-0 w-full '>
                    <div ref={titleRef} className="TradeLikeAProWithXonicCapital figtree text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[50px] 2xl:text-[60px] figtree text-center pb-[32px] sm:pb-[36px] md:pb-[40px] lg:pb-[48px] xl:pb-[64px] 2xl:pb-[78px] ">
                    A digital currency you<div className='gradientuser'>would absolutely love.</div>
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