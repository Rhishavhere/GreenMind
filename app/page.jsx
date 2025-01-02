"use client"
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { Cover } from '@/components/ui/cover'

export default function Home() {

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <>
      <header className="flex justify-between m-4 font-poppins bg-white/10 pl-4 pr-4 pt-2 pb-2 rounded-lg">
        <div className='hover:cursor-pointer'>greenmind.ai</div>
        <div className='flex justify-center gap-10'>
          <p className='hover:cursor-pointer hover:scale-110 transition duration-300'>Home</p>
          <p className='hover:cursor-pointer hover:scale-110 transition duration-300'>Services</p>
          <p className='hover:cursor-pointer hover:scale-110 transition duration-300'>Contact</p>
        </div>
        <div className='hover:cursor-pointer'>Sign In</div>
      </header>
<<<<<<< HEAD
      
      <main className='flex justify-center items-center font-poppins'>
        <div ref={ref} className='flex flex-col justify-center items-center mt-24'>
          <p className='text-xl'>Introducing</p>
          <p className='text-9xl'><Cover>GREENMIND</Cover></p>
          <p className='text-xl'><GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />A Smart Energy Solution For Our Greener Future</p>
        </div>
=======
      <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="relative flex place-items-center">
        <p className='font-bold text-6xl text-center'>
          ENERGY SOLUTIONS <br/>WITH <span className='italic'>ZOUP AI</span></p>
      </div>

>>>>>>> bb5b52e8764d145aa2eb25abe9c55602d37accaa
      </main>
    </>
  )
}
