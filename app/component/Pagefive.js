"use client";


import React,{useEffect,useState,useRef} from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Image from 'next/image';


const faqs = [
  {
    id: 1,
    question: "Where can I find more documentation?",
    answer:
      "The best place to start is Digi-ID.io. If you want to know more about the details and advantages of Digi-ID, you can refer to the user guide, vendor guide or integration guide. If you are looking for the media kit, please get the intro sheet and logos.",
  },
  {
    id: 2,
    question: "How do I participate in staking?",
    answer:
      "Staking is incredibly simple! Just link your wallet in the staking section, and then choose the amount you wish to stake.",
  },
  {
    id: 3,
    question: "When does the PRESALE end?",
    answer:
      "The presale will conclude once the target funding is reached or when we officially announce its end. Rest assured, you'll get all the latest updates and key information through our Telegram and X (formerly Twitter) channels. Don't wait too long - secure your place in this exciting project before it's too late!",
  },
  {
    id: 4,
    question: "On which exchange will the launch take place?",
    answer:
      "The launch will take place on Rydium, and you can track the progress and price on platforms like Dextool or Dexscreener. Be sure to follow along as the excitement builds - this is a launch you how not want to miss!",
  },
  {
    id: 5,
    question: "What's next for $EXTAI?",
    answer:
      "$EXTAI isn't just about the present - it's about shaping the future. As a holder, you'll gain access to exclusive insights collected by our AI agent, revealing valuable information that will influence the development of both blockchain and AI technologies. Our goal is to build a thriving community while pushing the limits of what's possible with these technologies. Join us in this journey into the future!",
  },
];




const Pagefive = () => {
    const [openFaq, setOpenFaq] = useState(faqs[0].id); // First item always open

  const toggleFaq = (id) => {
    setOpenFaq((prev) => (prev === id ? null : id)); // Always keeps one open
  };

    useEffect(() => {
        const ctx = gsap.context(() => {
          gsap.from(".section7", {
            y: 100,
            duration: 2,
            scrollTrigger: {
              trigger: ".section7",
              start: 'top 85%',
              end: 'top 40%',
              scrub: 2,
            },
          });
        });
      
        ScrollTrigger.refresh();
        return () => ctx.revert();
      }, []);




      // hhsvs



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
        <div id='Community' className='section7 relative -mt-[1]'>
          <div className='voerflow w-full h-full absolute top-0 left-0 z-[-2]' ></div>
          
            <div className='px-[24px] sm:px-0 container mx-auto py-[32px] sm:py-[36px] md:py-[40px] lg:py-[48px] xl:py-[64px] 2xl:py-[80px]'>
                <div className='relative mt-[40px] sm:mt-[40px] md:mt-[50px] lg:mt-[66px] xl:mt-[80px] 2xl:mt-[100px] pb-[32px] sm:pb-[36px] md:pb-[40px] lg:pb-[48px] xl:pb-[64px] 2xl:pb-[73px]'>
                    <h2 className='howtobue text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] xl:text-[50px] 2xl:text-[60px] figtree'>Frequently Asked Questions</h2>
                </div>
                <div className='mt-[32px] sm:mt-[36px] md:mt-[40px] lg:mt-[46px] xl:mt-[60px] 2xl:mt-[80px]'>
                    <div className='flex flex-col justify-center items-center '>
                    <div className="w-full flex flex-col gap-[20px] sm:gap-[24px] md:gap-[28px] lg:gap-[32px] xl:gap-[36px] 2xl:gap-[40px]">

                    {faqs.map((faq, index) => (
                        <div key={faq.id} ref={(el) => (itemRefs.current[index] = el)}  className="benifitsepepe pb-[13px] sm:pb-[14px] md:pb-[15px] lg:pb-[16px] xl:pb-[20px] 2xl:pb-[24px] w-full border-b-[1px] border-[#1F1C29]">
                        <div onClick={() => toggleFaq(faq.id)} className="flex items-center justify-between w-full">
                            <div className="whatisextass text-[15px] sm:text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] figtree">
                            {faq.question}
                            </div>
                            <div  className="group cursor-pointer">
                            <svg className={`w-[20px] sm:w-[24px] md:w-[32px] lg:w-[36px] xl:w-[40px] 2xl:w-[46px] cursor-pointer transition-transform duration-300 ${
                                openFaq === faq.id ? "rotate-180" : "rotate-0"
                                }`}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995" stroke="#B4B3B7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            </div>
                        </div>
                        {openFaq === faq.id && (
                            <p className="extasiscuting text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[24px] sm:w-[70%] figtree">
                            {faq.answer}
                            </p>
                        )}
                        </div>
                    ))}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pagefive;