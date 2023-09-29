import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="max-w-[1440px]  mx-auto p-4 px-5 md:px-20">
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-between  min-h-[75vh] mt-20 lg:mt-0">
        <div className="max-w-2xl">
          <h1 className="text-black text-5xl font-bold mb-5">
            Increase Your <br /> Customers Loyalty <br /> and Satisfaction
          </h1>
          <p className="font-semibold mb-5">
            We help businesses like yours earn more customers, <br /> standout
            from competitors, make more money
          </p>
          <div className="bg-[#20B15A] hover:bg-[#F46C2C] hover:-translate-y-1 inline-block text-white px-4 py-3 rounded-lg cursor-pointer transition ease-linear delay-150">
            <Link href="/">Get Started</Link>
          </div>
        </div>
        <div>
          <div className="flex f gap-5 mt-10">
            <div>
              <Image
                src="/images/rectangle-01.png"
                width={400}
                height={400}
                alt="Picture of the author"
              />
            </div>
            <div>
              <Image
                className="w-full h-[267px]"
                src="/images/rectangle-02.png"
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
                src="/images/rectangle-03.png"
                width={500}
                height={200}
                alt="Picture of the author"
              />
            </div>
            <div>
              <Image
                className="w-full"
                src="/images/rectangle-04.png"
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
