import CommonHero from "@/components/CommonHero";
import TeamMember from "@/components/TeamMember";

export const metadata = {
  title: "Design-Agency | Team",
};

const page = () => {
  return (
    <div>
      <CommonHero heading="Team" nav="Home" currentNav="Team" />
      <TeamMember />
    </div>
  );
};

export default page;

 

 
