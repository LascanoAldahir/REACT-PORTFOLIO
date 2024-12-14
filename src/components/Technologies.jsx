import { RiReactjsLine } from "react-icons/ri"
import { IoLogoJavascript } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { FaNode } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import {animate, motion} from "framer-motion"

const iconVatiants = (duration) => ({
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
        <h1 className="my-20 text-center text-4xl">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoJavascript className="text-7xl text-white-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className="text-7xl text-blue-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <BsFiletypeSql className="text-7xl text-orange-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNode className="text-7xl text-green-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaAngular className="text-7xl text-red-400"/>
            </div>
        </div>
              
    </div>
  )
}

export default Technologies
