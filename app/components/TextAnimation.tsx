import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'
interface Props {
    children?: string
    delay: number
}


export default function TextAnimation({children="Put some text here", delay=0.01}:Props) {

  return (
    <>
    <motion.div className="overflow-hidden">
    {children.split(" ").map((char, i) => {
       return <motion.span key={`char-${i}`} className="inline-block" initial={{y:80}} animate={{y:0}}transition={{duration:1,delay:0.17 * delay}}>{char}</motion.span>
    })}
    </motion.div>
    </>
  )
}