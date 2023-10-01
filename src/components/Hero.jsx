import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="max-w-[1440px]  mx-auto p-4 px-5 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-10  min-h-[75vh] mt-20">
        <div className="max-w-2xl lg:-ml-[155px]  md-ml-0">
          <h1 className="text-black text-3xl md:text-5xl font-bold font-serif  mb-5">
            Increase Your <br /> Customers Loyalty <br /> and Satisfaction
          </h1>
          <p className="font-semibold mb-5">
            We help businesses like yours earn more customers, <br /> standout
            from competitors, make more money
          </p>
          <div className="bg-[#20B15A] hover:bg-[#F46C2C]   inline-block text-white px-4 py-3 rounded-lg cursor-pointer  transition-all">
            <Link href="/">Get Started</Link>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-6 gap-5   ">
            <div className="col-span-4 w-full h-full">
              <Image
                className="h-[200px] md:h-[267px] "
                src="/images/rectangle-01.png"
                width={400}
                height={400}
                alt="Picture of the author"
              />
            </div>
            <div className="col-span-2">
              <Image
                className="w-full object-cover h-[200px] md:h-[267px] rounded-lg"
                src="/images/rectangle-02.png"
                width={500}
                height={200}
                alt="Picture of the author"
              />
            </div>
            <div className="col-span-3">
              <Image
                className="  h-[165px]"
                src="/images/rectangle-03.png"
                width={500}
                height={200}
                alt="Picture of the author"
              />
            </div>
            <div className="col-span-3">
              <Image
                className="  h-[165px]"
                src="/images/rectangle-04.png"
                width={500}
                height={200}
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
