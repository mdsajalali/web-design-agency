import AllServices from "@/components/AllServices";
import CommonHero from "@/components/CommonHero";

const page = () => {
  return (
    <div>
      <CommonHero heading="Services" nav="Home" currentNav="Services" />
      <AllServices />
    </div>
  );
};

export default page;
