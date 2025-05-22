import React,{ useRef } from 'react';
import { assets } from "../assets/assets";
import { motion, useScroll, useTransform} from "framer-motion"

const MultiLayerParallax = () => {
    const ref=useRef(null);
    const { scrollYProgress }=useScroll({
        target: ref,
        offset:["start start", "end start"]
    })
    const backgroundY=useTransform(scrollYProgress, [0,1], ["0%", "100%"])

    const textY=useTransform(scrollYProgress, [0,1], ["0%", "200%"])
    return (
        <div
        ref={ref} 
        className='w-full h-screen overflow-hidden relative grid place-items-center'>
            
        <motion.h1 className='font-bold text-white text-7xl md:text-9xl relative z-10'
        style={{
            y:textY
        }}>
            PARALLAX ANIMATION
        </motion.h1>

        <div
            className='absolute inset-0 z-0'
            style={{
            backgroundImage: `url(${assets.BG})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            y:backgroundY
            }}
        ></div>

        <div
            className='absolute inset-0 z-20'
            style={{
            backgroundImage: `url(${assets.No_BG})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
            }}
        ></div>
        </div>
  );
};

export default MultiLayerParallax;
