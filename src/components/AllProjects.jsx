import Image from "next/image";

const AllProjects = () => {
  return (
    <div className="max-w-[1440px] mx-auto p-4 px-5 md:px-20">
      <div className="mt-5">
        <h2 className="text-[#20B15A] uppercase font-medium">All Project</h2>
        <h1 className="font-bold my-2 text-2xl">
          Better Agency/SEO Solution At <br /> Your Fingertips
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center mt-10">
        <div className="shadow-lg p-5 rounded-lg">
          <Image
            src="/images/project1.png"
            width={300}
            height={300}
            alt="Picture of the author"
          />
          <h1
            className="  text-center
          mt-3 mb-1"
          >
            Lorem ipsum dolor sit consectutar
          </h1>
        </div>
        <div className="shadow-lg p-5 rounded-lg">
          <Image
            src="/images/project2.png"
            width={300}
            height={300}
            alt="Picture of the author"
          />
          <h1
            className="  text-center
          mt-3 mb-1"
          >
            Lorem ipsum dolor sit consectutar
          </h1>
        </div> <div className="shadow-lg p-5 rounded-lg">
          <Image
            src="/images/project3.png"
            width={300}
            height={300}
            alt="Picture of the author"
          />
          <h1
            className="  text-center
          mt-3 mb-1"
          >
            Lorem ipsum dolor sit consectutar
          </h1>
        </div> <div className="shadow-lg p-5 rounded-lg">
          <Image
            src="/images/project4.png"
            width={300}
            height={300}
            alt="Picture of the author"
          />
          <h1
            className="  text-center
          mt-3 mb-1"
          >
            Lorem ipsum dolor sit consectutar
          </h1>
        </div> <div className="shadow-lg p-5 rounded-lg">
          <Image
            src="/images/project5.png"
            width={300}
            height={300}
            alt="Picture of the author"
          />
          <h1
            className="  text-center
          mt-3 mb-1"
          >
            Lorem ipsum dolor sit consectutar
          </h1>
        </div> <div className="shadow-lg p-5 rounded-lg">
          <Image
            src="/images/project6.png"
            width={300}
            height={300}
            alt="Picture of the author"
          />
          <h1
            className="  text-center
          mt-3 mb-1"
          >
            Lorem ipsum dolor sit consectutar
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
