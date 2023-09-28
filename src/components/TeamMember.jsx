import Image from "next/image";

const TeamMember = () => {
  return (
    <div className="max-w-[1440px] mx-auto p-4 px-5 md:px-20">
      <div className="mt-5">
        <h2 className="text-[#20B15A] uppercase font-medium">
          Our Team Member
        </h2>
        <h1 className="font-bold my-2 text-2xl">
          Check our awesome team <br /> members
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center mt-10 gap-10">
        <div className="shadow-lg rounded-xl">
          <Image
            src="/images/man1.png"
            width={300}
            height={300}
            alt="Picture of the author"
          />
          <div className="flex items-center justify-center gap-3 cursor-pointer -mt-14">
            <Image
              src="/images/fb.png"
              width={20}
              height={20}
              alt="Picture of the author"
            />
            <Image
              src="/images/twitter.png"
              width={30}
              height={30}
              alt="Picture of the author"
            />
            <Image
              src="/images/instagram.png"
              width={30}
              height={30}
              alt="Picture of the author"
            />
          </div>
          <h1 className="mt-10 text-center text-2xl font-semibold mb-5">
            Devon Lane
          </h1>
        </div>
        <div className="shadow-lg rounded-xl">
          <Image
            src="/images/girl.png"
            width={300}
            height={300}
            alt="Picture of the author"
          />
          <div className="flex items-center justify-center gap-3 cursor-pointer -mt-14">
            <Image
              src="/images/fb.png"
              width={20}
              height={20}
              alt="Picture of the author"
            />
            <Image
              src="/images/twitter.png"
              width={30}
              height={30}
              alt="Picture of the author"
            />
            <Image
              src="/images/instagram.png"
              width={30}
              height={30}
              alt="Picture of the author"
            />
          </div>
          <h1 className="mt-10 text-center text-2xl font-semibold mb-5">
            Danny Bailey
          </h1>
        </div>
        <div className="shadow-lg rounded-xl">
          <Image
            src="/images/man2.png"
            width={300}
            height={300}
            alt="Picture of the author"
          />
          <div className="flex items-center justify-center gap-3 cursor-pointer -mt-14">
            <Image
              src="/images/fb.png"
              width={20}
              height={20}
              alt="Picture of the author"
            />
            <Image
              src="/images/twitter.png"
              width={30}
              height={30}
              alt="Picture of the author"
            />
            <Image
              src="/images/instagram.png"
              width={30}
              height={30}
              alt="Picture of the author"
            />
          </div>
          <h1 className="mt-10 text-center text-2xl font-semibold mb-5">
            Alex Lov
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
