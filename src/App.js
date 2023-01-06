import React from 'react'
import "./App.css"
import About from './components/container/About/About'
import Contact from './components/container/Contact/Contact'
import Footer from './components/container/Footer/Footer'
import Home from './components/container/Home/Home'
import Portfolio from './components/container/Portfolio/Portfolio'
import Skills from './components/container/Skills/Skills'
import Navbar from './components/Navbar/Navbar'
import Marquee from "react-fast-marquee";
import { motion } from 'framer-motion';
import SmoothScroll from './components/container/SmoothScroll/SmoothScroll'
import AnimatedCursor from "react-animated-cursor"
const App = () => {
  return (
    <motion.div>
    <AnimatedCursor
        color="255,255,255"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          border: '3px solid #fff',
        }}
        />
    <SmoothScroll>        
      <Navbar />
      <Home />
      <About />
      <Marquee className="mq-t" speed={130} gradient={false}>
          <h1 style={{padding: '2rem', color: '#FFF'}}>React</h1>
          <h1 style={{padding: '2rem', color: '#FFF'}}>Express</h1>
          <h1 style={{padding: '2rem', color: '#FFF'}}>NodeJs</h1>
          <h1 style={{padding: '2rem', color: '#FFF'}}>MongoDB</h1>
          <h1 style={{padding: '2rem', color: '#FFF'}}>NextJs</h1>
          <h1 style={{padding: '2rem', color: '#FFF'}}>PHP</h1>  
          <h1 style={{padding: '2rem', color: '#FFF'}}>Python</h1>   
          <h1 style={{padding: '2rem', color: '#FFF'}}>Cloud</h1>         
          <h1 style={{padding: '2rem', color: '#FFF'}}>Linux</h1>
          
        </Marquee>
        <Marquee className="mq-b" speed={130} gradient={false} direction="right">
          <h1 style={{padding: '2rem', color: '#FFF'}}>Software Engineer</h1>    
          <h1 style={{padding: '2rem', color: '#FFF'}}>Freelancing</h1>
          <h1 style={{padding: '2rem', color: '#FFF'}}>Blockchain</h1>
          <h1 style={{padding: '2rem', color: '#FFF'}}>Video Editing</h1>
          <h1 style={{padding: '2rem', color: '#FFF'}}>Instructor</h1>                          
          <h1 style={{padding: '2rem', color: '#FFF'}}>Open Source</h1>
        </Marquee>
      <Skills />
      <Portfolio />      
      <Contact />
      <Footer />
      </SmoothScroll>
    </motion.div>
  )
}

export default App
