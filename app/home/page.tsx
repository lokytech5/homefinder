import React from 'react'
import houseImg from '../../public/images/house1.jpg'
import houseImg2 from '../../public/images/house3.jpg'
import houseImg3 from '../../public/images/house3.jpg'
import Footer from '../components/Footer'
import Image from 'next/image'

const HomePage = () => {
    const apartmentList = [
        {
            title: 'Modern Family Apartment',
            name: '3 BHK | 2 Baths',
            image: '/images/house1.jpg'
        },
        {
            title: 'Modern Family Apartment',
            name: '3 BHK | 2 Baths',
            image: '/images/house2 copy.jpg'
        },
        {
            title: 'Modern Family Apartment',
            name: '3 BHK | 2 Baths',
            image: '/images/house3.jpg'
        },

    ]
  return (
    <>
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


{/* 3. Listings Preview */}
<section className="p-8 bg-secondary text-secondary-content">
<h2 className="text-3xl font-bold mb-5">Featured Listings</h2>
    
          {/* Sample Card for a Listing */}

          <div className="flex flex-wrap justify-center gap-10">
            {apartmentList.map((apartment, index) => (
               <div key={index} className="card card-compact w-64 bg-base-100 shadow-2xl">
            <figure>
              <Image src={apartment.image} alt={apartment.title} width={284} height={156} layout="responsive"/>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{apartment.title}</h2>
              <p>3 BHK | 2 Baths</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
                </div>
            ))}
            </div>
           
</section>

      {/* 6. Chat with an Agent "Coming Soon" Announcement */}
      <div className="container mx-auto py-12">
        <div className="alert alert-warning">
          <div className="flex-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 mx-2 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V6m0 0V5.5a1.5 1.5 0 00-3 0V6m0 4v6m-6.293-5.293a1 1 0 011.414 0L12 13l3.293-3.293a1 1 0 111.414 1.414L12 15.414l-4.707-4.707a1 1 0 010-1.414z"></path>
            </svg>
            <label>Direct Chat with Agents is coming soon! Stay tuned for more updates.</label>
          </div>
        </div>
      </div>
      

     {/* 8. FAQ Section within an artboard */}
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

  <Footer/>
</>
  )
}

export default HomePage