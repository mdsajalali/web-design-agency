import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Subscribe from '@/components/Subscribe'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="bg-[#D7F5DC] ">
        <Navbar />
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default page