import React, { useState } from 'react';
import { SiKubernetes } from "react-icons/si";
import { SiAnsible } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiAmazonaws } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiDocker } from "react-icons/di";
import { SiHelm } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { motion } from "framer-motion"; 
import { RiReactjsLine } from 'react-icons/ri';
import HoverIcon from './HoverIcon';


const Technologies = () => {

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>


      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >

          <HoverIcon icon={<SiKubernetes className="text-7xl text-blue-400" />} text="Kubernetes" time={2.5} />
          <HoverIcon icon={<DiDocker className="text-7xl text-sky-400" />} text="Docker" time={2} />
          <HoverIcon icon={<SiAnsible className="text-7xl" />} text="Ansible" time={3} />
          <HoverIcon icon={<SiMysql className="text-7xl text-sky-400" />} text="MySQL" time={5}/>
          <HoverIcon icon={<BiLogoSpringBoot className="text-7xl text-green-400" />} text="Spring Boot" time={2} />
          <HoverIcon icon={<SiAmazonaws className="text-7xl text-orange-400" />} text="AWS" time={2}/>
          <HoverIcon icon={<FaNodeJs className="text-7xl text-green-400" />} text="JavaScript" time={6}/>
          <HoverIcon icon={<RiReactjsLine className="text-7xl text-sky-400" />} text="ReactJS" time={6}/>
          <HoverIcon icon={<SiHelm className="text-7xl text-sky-700" />} text="Helm" time={4}/>
          
      </motion.div>
    </div>
  );
};

export default Technologies;