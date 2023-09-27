import Brands from "@/components/Brands";
import FeaturedProject from "@/components/FeaturedProject";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Subscribe from "@/components/Subscribe";
import WorkList from "@/components/WorkList";

const page = () => {
  return (
    <div>
      <div className="bg-[#D7F5DC] min-h-screen">
        <Navbar />
        <Hero />
        <Brands />
      </div>
      <WorkList />
      <FeaturedProject />
      <Subscribe />
    </div>
  );
};

export default page;
