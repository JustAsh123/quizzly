import { useState } from "react";
import ThemeController from "./ThemeController";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: {
      scaleY: 0,
      x: 0,
      originY:0
    },
    visible: {
      scaleY: 1,
      originY:0,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const menuButtonVariants = {
    hidden:{
        opacity:0
    },
    visible:{
        opacity:1,
        y:0,
    }
  }

  return (
    <div className="w-full fixed top-0 h-[80px] shadow-md shadow-base-300 flex flex-row justify-between items-center px-[48px]">
      <p className="flex flex-row gap-2 items-center text-3xl">
        <img src="./nav-logo.svg" className="w-[32px]" /> Quizzly
      </p>
      <div className="md:flex flex-row items-center hidden gap-[24px]">
        <ThemeController />
        <p className="text-xl hover:text-primary transition-all duration-200 cursor-pointer">
          Explore
        </p>
        <p className="text-xl hover:text-primary transition-all duration-200 cursor-pointer">
          Create
        </p>
        <button className="text-xl btn btn-primary">Sign Up</button>
        <button className="text-xl btn btn-primary btn-outline">Log In</button>
      </div>
      <div className="md:hidden flex items-center gap-4">
        <ThemeController />
        <button className="text-secondary" onClick={() => setIsOpen(!isOpen)}>
          <motion.div initial={{ rotate: 0 }} whileTap={{ rotate: 180 }}>
            {isOpen ? <X size={36} /> : <Menu size={36} />}
          </motion.div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="overflow-hidden md:hidden fixed bg-base-300 mt-[80px] w-[50%] right-0 top-0 h-screen flex flex-col gap-4 items-end p-8"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.p className="text-2xl hover:text-primary transition-all duration-200 cursor-pointer" variants={menuButtonVariants}>
              Explore
            </motion.p>
            <motion.p className="text-2xl hover:text-primary transition-all duration-200 cursor-pointer" variants={menuButtonVariants}>
              Create
            </motion.p>
            <motion.button className="text-xl btn btn-primary" variants={menuButtonVariants}>Sign Up</motion.button>
            <motion.button className="text-xl btn btn-primary btn-outline" variants={menuButtonVariants}>Log In</motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
