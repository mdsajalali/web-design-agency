import AllProjects from '@/components/AllProjects'
import CommonHero from '@/components/CommonHero'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Subscribe from '@/components/Subscribe'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="bg-[#F8F9FC] ">
        <Navbar />
        <CommonHero heading="Projects" nav="Home" currentNav="Projects" />
      </div>
      <AllProjects />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default page