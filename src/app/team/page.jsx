import CommonHero from "@/components/CommonHero";
import TeamMember from "@/components/TeamMember";

const page = () => {
  return (
    <div>
      <CommonHero heading="Team" nav="Home" currentNav="Team" />
      <TeamMember />
    </div>
  );
};

export default page;

// import Footer from '@/components/Footer'
// import Navbar from '@/components/Navbar'
// import Subscribe from '@/components/Subscribe'
// import React from 'react'
// import CommonHero from '@/components/CommonHero'
// import TeamMember from '@/components/TeamMember'

// const page = () => {
//   return (
//     <div>
//       <div className="bg-[#F8F9FC] ">
//         <Navbar />
//         <CommonHero heading="Team" nav="Home" currentNav="Team" />
//       </div>
//       <TeamMember />
//       <Subscribe />
//       <Footer />
//     </div>
//   );
// }

// export default page
