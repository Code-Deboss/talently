import React from 'react'
import Navbar from '../../components/navbar'
import Hero from './components/hero'
import AboutShort from './components/aboutShort'
import Features from './components/features'
import Reviews from './components/reviews'
import CallToAction from './components/calltoaction'

const home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutShort />
      <Features />
      <Reviews />
      <CallToAction />
    </>
  )
}

export default home