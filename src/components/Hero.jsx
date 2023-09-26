import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="max-w-[1440px]  mx-auto p-4 px-5 md:px-20 ">
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-between  min-h-[75vh]">
        <div className="max-w-2xl">
          <h1 className="text-black text-5xl font-bold mb-5">
            Increase Your <br /> Customers Loyalty <br /> and Satisfaction
          </h1>
          <p className="font-semibold mb-5">
            We help businesses like yours earn more customers, <br /> standout
            from competitors, make more money
          </p>
          <div className="bg-[#20B15A] inline-block text-white px-4 py-3 rounded-lg cursor-pointer">
            <Link href="/">Get Started</Link>
          </div>
        </div>
        <div>
          <div className="flex f gap-5 mt-10">
            <div>
              <Image
                src="/images/Rectangle 1241.png"
                width={400}
                height={400}
                alt="Picture of the author"
              />
            </div>
            <div>
              <Image
                className="w-full h-[267px]"
                src="/images/Rectangle 1242.png"
                width={500}
                height={200}
                alt="Picture of the author"
              />
            </div>
          </div>
          <div className="flex gap-5 mt-5 ">
            <div>
              <Image
                className="w-60 h-[165px]"
                src="/images/Rectangle 1243.png"
                width={500}
                height={200}
                alt="Picture of the author"
              />
            </div>
            <div>
              <Image
                className="w-full"
                src="/images/Rectangle 1244.png"
                width={400}
                height={400}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
