import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://cdn2.downdetector.com/static/uploads/c/300/4a527/JP_Morgan_logo.png"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">J.P. Morgan</h4>
        <p className="font-bold text-2xl mt-1">Software Engineer</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR-970-80.jpg.webp"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR-970-80.jpg.webp"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR-970-80.jpg.webp"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-500">Started works.....</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Summary Summary Summary Summary</li>
          <li>Summary Summary Summary Summary Summary</li>
          <li>Summary Summary Summary Summary Summary</li>
          <li>Summary Summary Summary Summary Summary</li>
        </ul>
      </div>
    </article>
  );
}
