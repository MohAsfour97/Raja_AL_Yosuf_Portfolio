import React from 'react';
// motion 
import { motion } from "framer-motion"
// variants 
import { fadeIn } from "../variants"
// img 
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.jpg";

const Work = () => {
  return (
  <section className='section' id="work">
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}} 
          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          {/* text */}
          <div>
            <h2 className='h2 leading-tight text-accent'>
              My Latest <br />
              Work.
            </h2>
            <p className='max-w-sm mb-16'>
              I have published my CV , Resume, Cover Letter, Github repos such as this portfolio i made it all using code , angel raja to inspire and give insight
              into what projects I've been working on these past years.
            </p>
            <a href='https://github.com/bhavithran1?tab=repositories'>
              <button className='btn btn-sm'>View all projects</button>
            </a>
          </div>
          {/* images */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* Overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* Img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt="" />
              {/* Pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 
              transition-all duration-500 z-50'
              >
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 
              transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Business Website</span>
              </div>
          </div>
        </motion.div>
        <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}} 
        className='flex-1 flex flex-col gap-y-10'>
          {/* images */}

          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* Overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* Img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt="" />
              {/* Pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 
              transition-all duration-500 z-50'
              >
                <span className='text-gradient'> Documentation</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 
              transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>BA/Customer analysis</span>
              </div>
          </div>

          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[320px]'>
              {/* Overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* Img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt="" />
              {/* Pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 
              transition-all duration-500 z-50'
              >
                <span className='text-gradient'>Reinforcement Learning/ adaptibility</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 
              transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Smart IQ and expert in many things</span>
              </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Work;
