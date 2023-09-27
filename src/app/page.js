import Brands from "@/components/Brands";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
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
    </div>
  );
};

export default page;
