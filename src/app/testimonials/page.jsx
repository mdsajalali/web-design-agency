import CommonHero from "@/components/CommonHero";
import TestimonialList from "@/components/TestimonialList";

const page = () => {
  return (
    <div>
      <CommonHero heading="Testimonial List" nav="Home" currentNav="Testimonial List"/>
      <TestimonialList />
    </div>
  );
};

export default page;
