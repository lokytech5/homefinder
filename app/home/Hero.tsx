import React from 'react'

const Hero = () => {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: `url('/images/house1.jpg')`}}>
    <div className="hero-overlay bg-opacity-40"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Discover Your Dream Home</h1>
  <p className="mb-5">GeoHomeFinder makes it easy for you and your loved ones.</p>
  
  
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  
  </div>
  )
}

export default Hero