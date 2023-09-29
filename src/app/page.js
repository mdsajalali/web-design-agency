import Brands from "@/components/Brands";
import FeaturedProject from "@/components/FeaturedProject";
import Hero from "@/components/Hero"; 
import WorkList from "@/components/WorkList";

const page = () => {
  return (
    <div>
      <div className="bg-[#D7F5DC] min-h-screen">
        <Hero />
        <Brands />
      </div>
      <WorkList />
      <FeaturedProject />
      
    </div>
  );
};

export default page;
