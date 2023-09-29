import AllServices from "@/components/AllServices";
import CommonHero from "@/components/CommonHero";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Subscribe from "@/components/Subscribe";

const page = () => {
  return (
    <div>
      <div className="bg-[#F8F9FC] ">
        <Navbar />
        <CommonHero heading="Services" nav="Home" currentNav="Services" />
      </div>
      <AllServices />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default page;
