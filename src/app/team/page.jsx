import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Subscribe from '@/components/Subscribe'
import React from 'react'
import CommonHero from '@/components/CommonHero'

const page = () => {
  return (
    <div>
      <div className="bg-[#F8F9FC] ">
        <Navbar />
        <CommonHero heading="Team" nav="Home" currentNav="Team" />
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default page