import React from 'react'

const Faq = () => {
  return (
    <section className="bg-base-100 text-secondary-content">
    <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 min-h-screen flex items-center justify-center">
      {/* Move entire section upward by 10px */}
      <div className="max-w-3xl lg:max-w-7xl bg-white p-8 rounded-lg shadow-lg flex flex-col sm:flex-row sm:space-x-8 lg:space-x-20 -mt-15">

        {/* Image Section */}
        <div className="w-full sm:w-1/2 lg:w-1/2 mb-8 sm:mb-0 flex items-center">
          <img src="/images/faq.jpg" alt="Image" className="w-full h-auto lg:h-[500px] rounded-lg"/>
        </div>

        {/* FAQ Content */}
        <div className="w-full sm:w-1/2 lg:w-1/2 flex flex-col justify-center lg:space-y-6">
          <h2 className="text-2xl font-bold mb-4 lg:mb-0 ml-5">Frequently Asked Questions</h2>

          <div tabIndex={0} className="collapse collapse-plus border border-base-500 bg-base-100 my-2">
            <div className="collapse-title text-xl font-medium mb-2.5">
            What is GeoHomeFinder?
            </div>
            <div className="collapse-content">
              <p>GeoHomeFinder is a platform that helps users find their dream homes based on geographical preferences.</p>
            </div>
          </div>

          <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 my-2">
            <div className="collapse-title text-xl font-medium mb-2.5">
            How does geohome finder work?
            </div>
            <div className="collapse-content">
              <p>Geohome finder uses advanced algorithms combined with the power of Google Maps to help users find their perfect home based on their preferences and needs.</p>
            </div>
          </div>

          <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 my-2">
            <div className="collapse-title text-xl font-medium mb-2.5">
            How accurate is the Google Maps integration?
            </div>
            <div className="collapse-content">
              <p>We use the latest APIs from Google Maps to ensure the location data is as accurate as possible. However, always double-check the location before making any decisions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Faq