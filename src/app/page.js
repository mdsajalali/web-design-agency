import Brands from "@/components/Brands";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <div>
      <div className="bg-[#D7F5DC] min-h-screen">
        <Navbar />
        <Hero />
        <Brands />
      </div>
    </div>
  );
};

export default page;
