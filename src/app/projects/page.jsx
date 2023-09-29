import AllProjects from "@/components/AllProjects";
import CommonHero from "@/components/CommonHero";

const page = () => {
  return (
    <div>
      <CommonHero heading="Projects" nav="Home" currentNav="Projects" />
      <AllProjects />
    </div>
  );
};

export default page;
