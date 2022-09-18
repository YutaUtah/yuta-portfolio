import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        src="https://vikings.lawrence.edu/images/2020/4/23//yuta_hayashi_msoc_2018_19.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">About Myself</h4>
        <p className="text-base">
          I grew up in Tokyo, but I decided to seek my bachelor degree in the
          United States. I graduated from Lawrence University in Wisconsin. I
          majored in Mathematics and minored in Physics and Anthropology.
          Currently, I am working at J.P. Morgan Tokyo Office as a software
          engineer. My interest is backend software development. My hobby
          includes playing soccer and piano. Recently, I get to own a classic
          car from my father, so I am enjoying maintaining it and driving!
        </p>
      </div>
    </motion.div>
  );
}
