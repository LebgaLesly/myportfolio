"use client";

//import dependencies
import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";

//import compoenents
import { projectsData } from "@/lib/data";

type ProjectProps = (typeof projectsData)[number];

const Project = ({ title, description, tags, imageUrl, code, demo }: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className=" group mb-3 sm:mb-8 last:mb-0"
    >
      <section
        ref={ref}
       className=" bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[25rem]  sm:group-even:pl-8 hover:bg-gray-200 transition rounded-lg dark:bg-white/10 dark:hover:bg-white/20 dark:text-white h-80"
      >
        <div className="h-5/6">
        <div className="pt-4  pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-5 sm:max-w-[50%] flex flex-col sm:h-full sm:group-even:ml-[18rem] mb-24 ">
          <h3 className="text-2xl font-semibold ">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-1">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[30.25rem] rounded-t-lg shadow-2xl transition group-even:right-[initial] group-even:-left-40 gouup-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:gouup-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 "
        />
        </div>
        <div className="flex justify-center gap-8 mb-16">
          <a className="font-bold inline-block px-4 py-2 bg-black/[0.7] text-white dark:bg-white/60 dark:text-black rounded-full dark:hover:bg-black/[0.7] dark:hover:text-white transition duration-300 hover:dark:text-white/70 cursor-pointer hover:bg-black" href={code} target="_blank"> Code</a>
          <a className="font-bold inline-block px-4 py-2 bg-black text-white dark:bg-black/[0.7] dark:text-white/70 rounded-full dark:hover:bg-white/60 dark:hover:text-black  transition duration-300 hover:dark:text-white/70 cursor-pointer hover:bg-black/[0.7]" href={demo} target="_blank"> Demo</a>
        </div>
        
      </section>
    </motion.div>
  );
};

export default Project;
