import Link from "next/link";
import { TbMathGreater } from "react-icons/tb";

const CommonHero = ({ heading, nav, currentNav }) => {
  return (
    <div className="max-w-[1440px] h-[200px] mx-auto p-4 px-5 md:px-20 flex flex-col items-start justify-center ">
      <h1 className="text-4xl font-semibold mb-3">{heading}</h1>
      <div className="flex gap-2 items-center justify-center">
        <Link className="font-medium" href="/">{nav}</Link>
        <span>
          <TbMathGreater />
        </span>
        <span className="text-[#20B15A]" >
          {currentNav}
        </span>
      </div>
    </div>
  );
};

export default CommonHero;
