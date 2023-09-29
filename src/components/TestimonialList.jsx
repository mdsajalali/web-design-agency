import Image from "next/image";

const TestimonialList = () => {
  return (
    <div className="max-w-[1440px] mx-auto p-4 px-5 md:px-20">
      <div className="mt-5">
        <h2 className="text-[#20B15A] uppercase font-medium">
          Testimonial List
        </h2>
        <h1 className="font-bold my-2 text-2xl">
          Better Agency/SEO Solution At <br /> Your Fingertips
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center mt-10">
          <div className="shadow-lg p-5 rounded-lg text-center hover:bg-[#20B15A] transition ease-linear delay-15  ">
            <Image className="mx-auto"
              src="/images/img1.png"
              width={50}
              height={50}
              alt="Picture of the author"
            />
            <p className="my-5 text-[14px]  text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque et placerat metus. Morbi aliquet felis sit amet erat
              finibus, ac condimentum ligula ornare.
            </p>
            <h1 className="my-3 font-bold">
              ALICE BRADLEY
            </h1>
            <p className="font-semibold text-[15px]">Backend Developer</p>
          </div>
          <div className="shadow-lg p-5 rounded-lg text-center  hover:bg-[#20B15A] transition ease-linear delay-15">
            <Image className="mx-auto"
              src="/images/img2.png"
              width={50}
              height={50}
              alt="Picture of the author"
            />
            <p className="my-5 text-[14px] 
            text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque et placerat metus. Morbi aliquet felis sit amet erat
              finibus, ac condimentum ligula ornare.
            </p>
            <h1 className="my-3 font-bold">
              ALICE BRADLEY
            </h1>
            <p className="font-semibold text-[15px]">Backend Developer</p>
          </div>
          <div className="shadow-lg p-5 rounded-lg text-center  hover:bg-[#20B15A] transition ease-linear delay-15">
            <Image className="mx-auto"
              src="/images/img3.png"
              width={50}
              height={50}
              alt="Picture of the author"
            />
            <p className="my-5 text-[14px] 
            text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque et placerat metus. Morbi aliquet felis sit amet erat
              finibus, ac condimentum ligula ornare.
            </p>
            <h1 className="my-3 font-bold">
              ALICE BRADLEY
            </h1>
            <p className="font-semibold text-[15px]">Backend Developer</p>
          </div>
          <div className="shadow-lg p-5 rounded-lg text-center hover:bg-[#20B15A] transition ease-linear delay-15 ">
            <Image className="mx-auto"
              src="/images/img4.png"
              width={50}
              height={50}
              alt="Picture of the author"
            />
            <p className="my-5 text-[14px] 
            text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque et placerat metus. Morbi aliquet felis sit amet erat
              finibus, ac condimentum ligula ornare.
            </p>
            <h1 className="my-3 font-bold">
              ALICE BRADLEY
            </h1>
            <p className="font-semibold text-[15px]">Backend Developer</p>
          </div>
          <div className="shadow-lg p-5 rounded-lg text-center  hover:bg-[#20B15A] transition ease-linear delay-15">
            <Image className="mx-auto"
              src="/images/img5.png"
              width={50}
              height={50}
              alt="Picture of the author"
            />
            <p className="my-5 text-[14px] 
            text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque et placerat metus. Morbi aliquet felis sit amet erat
              finibus, ac condimentum ligula ornare.
            </p>
            <h1 className="my-3 font-bold">
              ALICE BRADLEY
            </h1>
            <p className="font-semibold text-[15px]">Backend Developer</p>
          </div>
          <div className="shadow-lg p-5 rounded-lg text-center  hover:bg-[#20B15A] transition ease-linear delay-15">
            <Image className="mx-auto"
              src="/images/img6.png"
              width={50}
              height={50}
              alt="Picture of the author"
            />
            <p className="my-5 text-[14px] 
            text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque et placerat metus. Morbi aliquet felis sit amet erat
              finibus, ac condimentum ligula ornare.
            </p>
            <h1 className="my-3 font-bold">
              ALICE BRADLEY
            </h1>
            <p className="font-semibold text-[15px]">Backend Developer</p>
          </div>
      </div>
    </div>
  );
};

export default TestimonialList;
