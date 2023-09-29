import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const WorkList = () => {
  return (
    <div className="max-w-[1440px] mx-auto p-4 px-5 md:px-20">
      <div className="my-10">
        <div>
          <h2 className="text-[#20B15A] uppercase font-medium">Work List</h2>
          <h1 className="font-bold my-2 text-2xl">
            We provide the Perfect Solution <br /> to your business growth
          </h1>
        </div>
        <div className="grid gird-col-1 md:grid-cols-2 lg:grid-cols-3 my-20 gap-10 place-items-center">
          <div className="max-w-[300px]">
            <div className="bg-[#D7F5DC] w-16 h-14 rounded-md flex items-center justify-center">
              <Image
                className="w-fit"
                src="/images/heart.png"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </div>
            <h1 className="my-3 font-bold text-[18px]">
              Improve Business Modal
            </h1>
            <p className="my-3">
              We help identify the best ways to improve your business
            </p>
            <button className="flex items-center gap-2 my-10 ml-5 hover:translate-x-1 transition-all">
              Learn More <BsArrowRight />
            </button>
          </div>
          <div className="max-w-[300px]">
            <div className="bg-[#D7F5DC] w-16 h-14 rounded-md flex items-center justify-center">
              <Image
                className="w-fit"
                src="/images/heart.png"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </div>
            <h1 className="my-3 font-bold text-[18px]">
              Improve Business Modal
            </h1>
            <p className="my-3">
              We help identify the best ways to improve your business
            </p>
            <button className="flex items-center gap-2 my-10 ml-5 hover:translate-x-1 transition-all">
              Learn More <BsArrowRight />
            </button>
          </div>

          <div className="max-w-[300px]">
            <div className="bg-[#D7F5DC] w-16 h-14 rounded-md flex items-center justify-center">
              <Image
                className="w-fit"
                src="/images/heart.png"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </div>
            <h1 className="my-3 font-bold text-[18px]">
              Improve Business Modal
            </h1>
            <p className="my-3">
              We help identify the best ways to improve your business
            </p>
            <button className="flex items-center gap-2 my-10 ml-5 hover:translate-x-1 transition-all">
              Learn More <BsArrowRight />
            </button>
          </div>
        </div>

        <div className="grid gird-col-1 md:grid-cols-2 lg:grid-cols-4 my-20 gap-10 ">
          <div className="shadow-md  flex flex-col items-center justify-center p-10 rounded-lg ">
            <div className="bg-[#D7F5DC] w-16 h-14 rounded-md flex items-center justify-center">
              <Image
                className="w-fit"
                src="/images/heart.png"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </div>
            <h2 className="font-bold my-2 text-2xl">25000</h2>
            <p className="font-medium">Projects</p>
          </div>
          <div className="shadow-md  flex flex-col items-center justify-center p-10 rounded-lg">
            <div className="bg-[#D7F5DC] w-16 h-14 rounded-md flex items-center justify-center">
              <Image
                className="w-fit"
                src="/images/heart.png"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </div>
            <h2 className="font-bold my-2 text-2xl">25000</h2>
            <p className="font-medium">Projects</p>
          </div>

          <div className="shadow-md  flex flex-col items-center justify-center p-10 rounded-lg">
            <div className="bg-[#D7F5DC] w-16 h-14 rounded-md flex items-center justify-center">
              <Image
                className="w-fit"
                src="/images/heart.png"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </div>
            <h2 className="font-bold my-2 text-2xl">25000</h2>
            <p className="font-medium">Projects</p>
          </div>

          <div className="shadow-md  flex flex-col items-center justify-center p-10 rounded-lg">
            <div className="bg-[#D7F5DC] w-16 h-14 rounded-md flex items-center justify-center">
              <Image
                className="w-fit"
                src="/images/heart.png"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </div>
            <h2 className="font-bold my-2 text-2xl">25000</h2>
            <p className="font-medium">Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkList;
