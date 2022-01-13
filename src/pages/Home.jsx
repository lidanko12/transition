import React from 'react'
import Hero from '../components/Hero'
import Image from '../images/image-1.jpeg'
import { motion } from 'framer-motion'
import { animationOne,transition } from '../animation'


const Home = () => {
    return (
        <motion.div  initial='out' animate="in" exit='out' variants={animationOne} transition={transition}>
          <Hero image={Image} title="Lock around you"
          desc="Once in lifetime"/>  
        </motion.div>
    )
}

export default Home
