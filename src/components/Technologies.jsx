import { RiReactjsLine } from "react-icons/ri"
import { IoLogoJavascript } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { FaNode } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import {animate, motion} from "framer-motion"

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repear: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
        whileInView={{opacity: 1, y:0}}
        initial={{opacity: 0 , y: -100}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h1>
        <motion.div 
        variants={iconVariants(2,5)}
        initial="Initial"
        animate="animate"
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>

            <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <IoLogoJavascript className="text-7xl text-white-400"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className="text-7xl text-blue-400" />
            </motion.div>

            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <BsFiletypeSql className="text-7xl text-orange-400"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNode className="text-7xl text-green-400"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaAngular className="text-7xl text-red-400"/>
            </motion.div>
        </motion.div>
              
    </div>
  )
}

export default Technologies
