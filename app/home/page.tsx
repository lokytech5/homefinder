import React from 'react'
import Footer from '../components/Footer'
import FeatureListApartment from './FeatureListApartment'
import AgentChatSoon from './AgentChatComingSoon'
import Faq from './Faq'
import Hero from './Hero'

const HomePage = () => {
    
  return (
    <>
   
   <Hero/>


{/* 3. Listings Preview */}
<FeatureListApartment/>

      {/* 6. Chat with an Agent "Coming Soon" Announcement */}
      <AgentChatSoon/>
      

     {/* 8. FAQ Section within an artboard */}
    <Faq/>

  <Footer/>


  </>
  )
}

export default HomePage