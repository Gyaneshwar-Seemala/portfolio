import { RiReactjsLine } from "react-icons/ri";
import { RiJavaLine } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaFigma } from "react-icons/fa6";
import { motion } from "framer-motion";

const iconVariants=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    }
})
const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <h1 className="my-20 text-center text-6xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaPython className="text-7xl text-blue-400"/>
        </motion.div>
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiJavaLine className="text-7xl text-orange-400"/>
        </motion.div>
        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <IoLogoJavascript className="text-7xl text-yellow-500"/>
        </motion.div>
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaFigma className="text-7xl text-pink-400"/>
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
