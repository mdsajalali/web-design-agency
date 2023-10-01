import AllProjects from "@/components/AllProjects";
import CommonHero from "@/components/CommonHero";

export const metadata = {
  title: "Design-Agency | Projects",
};

const page = () => {
  return (
    <div>
      <CommonHero heading="Projects" nav="Home" currentNav="Projects" />
      <AllProjects />
    </div>
  );
};

export default page;
