import React from 'react';
// Images
import Image from "../assets/avatar.jpg";
// Icons
import { FaGithub, FaLinkedin, FaSteam } from "react-icons/fa"
// Type animation
import { TypeAnimation } from 'react-type-animation';
// Motion
import {motion} from "framer-motion";
// Variants
import { fadeIn } from "../variants";


const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id="home">
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center
        lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
              variants={fadeIn("up", 0.3)} 
              initial="hidden"
              whileInView={"show"} 
              viewport={{once: false, amount: 0.7 }} 
              className='text-[55px] font-bold leading-[0.8] lg:text-[100px]'
              >
              RAJAJOJO
            </motion.h1>
            <motion.div 
              variants={fadeIn("up", 0.4)} 
              initial="hidden"
              whileInView={"show"} 
              viewport={{once: false, amount: 0.7 }} 
              className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'
              >
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation sequence={["Developer",2000,"Designer",2000, "Engineer", 2000, "Gamer",2000]}
                speed={50} className='text-accent' wrapper='span' repeat={Infinity}/>
            </motion.div>

            <motion.p 
            variants={fadeIn("up", 0.5)} 
            initial="hidden"
            whileInView={"show"} 
            viewport={{once: false, amount: 0.7 }} 
            className='mb-8 max-w-lg mx-auto lg:mx-0'
            >
              I'm a 21-year-old passionate Princess Learning Enthusiast and skilled in Project management & Project Success, i bielive in myself to a point all my dreams came true, from the beautiful country of Sudan living in KSA.
            </motion.p>

            <motion.div 
            variants={fadeIn("up", 0.6)} 
            initial="hidden"
            whileInView={"show"} 
            viewport={{once: false, amount: 0.7 }} 
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
            >
              <a href='#contact'>
                <button className='btn btn-lg'>Contact Me if your Batman</button>
              </a>
              <a href='https://github.com/bhavithran1' className='text-gradient btn-link'>
                My FashionPortfolio
              </a>
            </motion.div>
            {/* socials */}
            <motion.div 
            variants={fadeIn("up", 0.7)} 
            initial="hidden"
            whileInView={"show"} 
            viewport={{once: false, amount: 0.7 }} 
            className='flex text-[30px] gap-x-6 max-w-max mx-auto lg:mx-0'
            >
              <a href="https://www.linkedin.com/in/bhavithran-ananthan-0207542ab/">
                <FaLinkedin />
              </a>
              <a href="https://github.com/bhavithran1">
                <FaGithub />
              </a>
              <a href="https://steamcommunity.com/profiles/76561198800501618/">
                <FaSteam />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div 
          variants={fadeIn("down", 0.5)} 
          initial="hidden"
          whileInView={"show"} 
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'
          >
            <img className='rounded-full' src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
