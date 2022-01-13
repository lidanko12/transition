import React from 'react'
import Hero from '../components/Hero';
import Image from '../images/image-2.jpeg'
import { motion } from 'framer-motion'
import { animationTwo,transition } from '../animation'

const AboutPage = () => {
    return (
        <motion.div  initial='out' animate="in" exit='out' variants={animationTwo} transition={transition}>
       <Hero image={Image} title='What you
        know about 
       chameleon?' desc="Chameleons are amazing creatures
       "/>
       </motion.div>
    )
}

export default AboutPage
