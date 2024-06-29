import React from 'react';
// Icon
import { BsArrowUpRight } from "react-icons/bs";
// Motion
import { motion } from "framer-motion";
// Variants
import { fadeIn } from "../variants";

// services data
const services = [
  {
    name: "Project Managmnet",
    description:" Expert Project Manager with extensive experience in serving high-end VIP clients. Skilled in delivering top-tier training and consultancy services, focusing on user experience enhancement. Proficient in public speaking, time management, and bilingual communication (English and Arabic). Strong in social skills, teamwork, work ethic, and flexibility. Capable of leveraging soft skills like persuasion and fostering seamless team dynamics.",
  link: "Learn More",
    arrow_url: "",
    url: "",

  },
  {
    name: "User Experience Enhancment",
    description:"Specializing in user experience enhancement, adept at crafting intuitive interfaces and optimizing interactions to elevate user satisfaction and engagement.",
    link: "Learn More",
    arrow_url: "",
    url: "",

  },
  {
    name: "Bilingual: English and Arabic",
    description:"Bilingual proficiency in English and Arabic, facilitating clear communication and collaboration across diverse linguistic and cultural contexts.",
    link: "Learn More",
    arrow_url: "",
    url: "",
  },
  {
    name: "Digital Marketing",
    description:"Proficient in digital marketing strategies with expertise in social media, data analytics, and campaign optimization. Skilled in leveraging insights to drive effective marketing initiatives.",
    link: "Learn More",
    arrow_url: "",
    url: "",
  },

]
const About = () => {
  return (
    <section className='section' id="about">
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & Image */}
          <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3 }}
          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
          >
            <h2 className='h2 text-accent mb-6'>What do i do for a living? Innovation.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
            Customer-Centric Business Process Enhancement Specialist with over 2 years of experience in building relationships, understanding client needs, and delivering user-friendly solutions. </h3>
            
            <a href="https://github.com/MohAsfour97?tab=repositories" >
              <button className='btn btn-sm'>Take a Look at my work this website.</button>
            </a>
          </motion.div>
          {/* services */}
          <motion.div 
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3 }}
          className='flex-1'
          >
            {/* services list */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const {name, description, link, arrow_url, url} =  service;
                return (
                <div className='border-b border-white/20 h-[146px] mb-[38px] flex' 
                key={index}
                >
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                      {name}
                    </h4>
                    <p className='font-secondary leading-tight'>
                      {description}
                    </p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a href={arrow_url} className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                      <BsArrowUpRight />
                    </a>
                    <a href={url} className='text-gradient text-sm'>
                      {link}
                    </a>
                  </div>
                </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
