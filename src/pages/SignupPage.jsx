import { motion } from "framer-motion";
import { Mail, User2Icon, LockIcon, EyeClosed,EyeIcon, MoveRightIcon } from "lucide-react";
import { useState } from "react";

const SignupPage = () => {
  const [newUsername, setNewUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPass, setNewPass] = useState("");
  const [newConf, setNewConf] = useState("");


  return (
    <div className="flex pt-[100px] md:min-h-screen md:pt-0 px-4 md:items-center justify-center w-screen">
      <motion.form
        className="w-full max-w-lg flex flex-col text-center py-[32px] rounded-lg shadow-lg shadow-base-300 border-[1px] border-base-300/70"
        initial={{ opacity: 0, x:-300 }}
        animate={{ opacity: 1, x:0 }}
        transition={{duration:0.5}}
      >
        <div className="flex flex-row gap-4 justify-center items-center">
          <img src="./nav-logo.svg" className="w-[40px]" />
          <p className="text-3xl">Quizzly</p>
        </div>
        <p className="mt-2 text-xl">Sign up to start using Quizzly!</p>
        <div className="mt-8 flex flex-col gap-4 justify-center items-center">
          <label className="input validator">
            <User2Icon></User2Icon>
            <input
              type="text"
              required
              placeholder="Username"
              pattern="[A-Za-z][A-Za-z0-9\-]*"
              title="Only letters, numbers or dash"
              className="text-lg"
              onClick={(e)=>setNewUsername(e.target.value)}
            />
          </label>
          <label className="input validator">
            <Mail></Mail>
            <input
              type="text"
              required
              placeholder="Username"
              pattern="[A-Za-z][A-Za-z0-9\-]*"
              title="Only letters, numbers or dash"
              className="text-lg"
            />
          </label>
          <label className="input validator">
            <LockIcon></LockIcon>
            <input
              type="text"
              required
              placeholder="Username"
              pattern="[A-Za-z][A-Za-z0-9\-]*"
              title="Only letters, numbers or dash"
              className="text-lg"
            />
          </label>
          <label className="input validator">
            <LockIcon></LockIcon>
            <input
              type="text"
              required
              placeholder="Username"
              pattern="[A-Za-z][A-Za-z0-9\-]*"
              title="Only letters, numbers or dash"
              className="text-lg"
            />
          </label>
        </div>
        <div className="mt-8 flex flex-col justify-center items-center gap-3">
          <button className="btn btn-lg btn-primary btn-outline text-xl">Sign Up! <MoveRightIcon></MoveRightIcon></button>
          <p>Already have an account? <span className="text-blue-400 underline cursor-pointer hover:text-blue-700 transition-all duration-200">Log in</span></p>
        </div>
      </motion.form>
    </div>
  );
};

export default SignupPage;
