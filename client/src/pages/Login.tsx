"use client";
import { motion } from "framer-motion";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { FlipWords } from "../components/ui/flip-words";
import { SignupCard } from "../components/SignupCard";
import { useState } from "react";
import { LoginCard } from "../components/LoginCard";

export default function Login() {
  const words = [
    "Food Expense",
    "Room Rents",
    "Electricity Bills",
    "Water Bills",
  ];
  const [showLogin, setShowLogin] = useState<boolean>(true)
  const showLoginCard = (value:boolean) =>{
    console.log('Login card toggle, Value: ',value)
    setShowLogin(value);
  }
  return (
    <div className="w-100 h-screen flex">
      <BackgroundGradientAnimation>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="relative flex w-100 h-screen items-center z-10"
        >
          <div className="flex justify-between items-center px-4 w-full">
            <div className="md:w-1/2 flex items-center">
              <div className="flex justify-center fixed items-center px-0 md:px-4">
                <div className="text-5xl mx-auto font-normal text-white dark:text-neutral-400 hidden md:block">
                  Split
                  <FlipWords words={words} /> <br />
                  With your Friends!
                </div>
              </div>
            </div>
            <div className="w-1/2 flex-auto md:w-100">
            { showLogin=== true  ? <LoginCard showLoginCard={showLoginCard}/> : <SignupCard showLoginCard={showLoginCard}/>}
            </div>
          </div>
        </motion.div>
      </BackgroundGradientAnimation>
    </div>
  );
}
