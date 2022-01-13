import React from 'react'
import Hero from '../components/Hero'
import Image from '../images/image-3.jpeg'
import { animationThree,transition } from '../animation'
import { motion } from 'framer-motion'



const Services = () => {
    return (
        <motion.div  initial='out' animate="in" exit='in' variants={animationThree} transition={transition}>

        <Hero image={Image} title="Look at this!"
        desc="This RED panda"/>
        </motion.div>
    )
}

export default Services
