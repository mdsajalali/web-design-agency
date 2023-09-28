import CommonHero from '@/components/CommonHero'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Subscribe from '@/components/Subscribe'
import TestimonialList from '@/components/TestimonialList'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="bg-[#F8F9FC] ">
        <Navbar />
        <CommonHero
          heading="Testimonial List"
          nav="Home"
          currentNav="Testimonial List"
        />
      </div>
      <TestimonialList />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default page