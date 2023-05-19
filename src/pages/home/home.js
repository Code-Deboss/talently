import React from 'react'
import Navbar from '../../components/navbar'
import Hero from './components/hero'
import AboutShort from './components/aboutShort'
import Features from './components/features'
import Reviews from './components/reviews'

const home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutShort />
      <Features />
      <Reviews />
    </>
  )
}

export default home