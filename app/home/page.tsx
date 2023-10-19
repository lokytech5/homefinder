import React from 'react'
import Footer from '../components/Footer'
import FeatureListApartment from './FeatureListApartment'
import AgentChatSoon from './AgentChatComingSoon'
import Faq from './Faq'
import Hero from './Hero'

const HomePage = () => {
    
  return (
    <div>
   
   <Hero/>

<FeatureListApartment/>
      <AgentChatSoon/>
    <Faq/>

  <Footer/>


  </div>
  )
}

export default HomePage