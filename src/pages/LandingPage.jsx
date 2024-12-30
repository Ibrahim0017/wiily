import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import AboutWilly from '../components/AboutWilly'
import DiagonalTextBand from '../components/DiagonalTextBand'
import Tokenomics from '../components/Tokenomics'
import Footer from '../components/Footer'
import Line from '../components/Line'

const LandingPage = () => {
  return (
   <>
   <div className='w-full flex flex-col items-center bg-[#A3A5CB]'>
    <Header/>
    <Hero/>
    <Line margintop='20px'/>
    {/* <DiagonalTextBand/> */}
    <AboutWilly/>
    <Line margintop='-100px'/>
    <Tokenomics/>
    {/* <Footer/> */}
   </div>
   </>
  )
}

export default LandingPage