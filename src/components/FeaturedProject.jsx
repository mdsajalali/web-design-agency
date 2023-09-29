import Image from "next/image";

const FeaturedProject = () => {
  return (
    <div className="bg-[#D7F5DC] min-h-screen">
      <div className="max-w-[1440px]  mx-auto p-4 px-5 md:px-20 ">
        <div className="my-10">
          <div>
            <h2 className="text-[#20B15A] uppercase font-medium">
              Featured Project
            </h2>
            <h1 className="font-bold my-2 text-2xl">
              We provide the Perfect Solution <br /> to your business growth
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center mt-24">
            <div>
              <Image
                className="w-fit"
                src="/images/mask.png"
                width={400}
                height={400}
                alt="Picture of the author"
              />
              <p className="text-[#2E3E5C] my-3">App Design - June 20, 2022</p>
              <h1 className="font-bold text-[20px]">App Redesign</h1>
            </div>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 ">
                <div className="max-w-[300px]">
                  <Image
                    className="w-fit"
                    src="/images/mask-1.png"
                    width={300}
                    height={200}
                    alt="Picture of the author"
                  />
                  <p className="text-[#2E3E5C] my-2">
                    App Design - June 20, 2022
                  </p>
                  <h1 className="font-bold text-[18px] mb-5">
                    Redesign channel website landing page
                  </h1>
                </div>
                <div className="max-w-[300px]">
                  <Image
                    className="w-fit"
                    src="/images/mask-2.png"
                    width={300}
                    height={200}
                    alt="Picture of the author"
                  />
                  <p className="text-[#2E3E5C] my-2">
                    App Design - June 20, 2022
                  </p>
                  <h1 className="font-bold text-[18px] mb-5">
                    Redesign channel website landing page
                  </h1>
                </div>

                <div className="max-w-[300px]">
                  <Image
                    className="w-fit"
                    src="/images/mask-3.png"
                    width={300}
                    height={200}
                    alt="Picture of the author"
                  />
                  <p className="text-[#2E3E5C] my-2">
                    App Design - June 20, 2022
                  </p>
                  <h1 className="font-bold text-[18px] mb-5">
                    Redesign channel website landing page
                  </h1>
                </div>
                <div className="max-w-[300px]">
                  <Image
                    className="w-fit"
                    src="/images/mask-4.png"
                    width={300}
                    height={200}
                    alt="Picture of the author"
                  />
                  <p className="text-[#2E3E5C] my-2">
                    App Design - June 20, 2022
                  </p>
                  <h1 className="font-bold text-[18px] mb-5">
                    Redesign channel website landing page
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
