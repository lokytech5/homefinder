import React from 'react'

const Faq = () => {
  return (
    <section className="bg-base-100 text-secondary-content">
     <div className="container mx-auto py-12 text-center mb-12">
        <h2 className="text-3xl font-bold mb-5">Frequently Asked Questions</h2>

        <div className="artboard artboard-horizontal phone-1 mx-auto">

             {/* Question 1 */}
       <div className="faq-item text-center mb-4 pt-5">
            <h3 className="text-xl font-semibold mb-2">What is GeoHomeFinder?</h3>
            <p className="text-md"> GeoHomeFinder is a platform that helps users find their dream homes based on geographical preferences.</p>
        </div>

       {/* Question 2 */}
       <div className="faq-item text-center mb-4 pt-5">
            <h3 className="text-xl font-semibold mb-2">How does geohome finder work?</h3>
            <p className="text-md">Geohome finder uses advanced algorithms combined with the power of Google Maps to help users find their perfect home based on their preferences and needs.</p>
        </div>

        {/* Question 3 */}
        <div className="faq-item text-center mb-4 pt-5">
            <h3 className="text-xl font-semibold mb-2">How accurate is the Google Maps integration?</h3>
            <p className="text-md">We use the latest APIs from Google Maps to ensure the location data is as accurate as possible. However, always double-check the location before making any decisions.</p>
        </div>
        </div>

      </div>

     </section>
  )
}

export default Faq