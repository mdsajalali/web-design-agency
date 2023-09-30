import Image from "next/image";
import Link from "next/link";

const Footer = () => {
     const currentYear = new Date().getFullYear();
  return (
    <div className="bg-[#000] text-white min-h-[40vh]">
      <div className="max-w-[1440px] mx-auto p-4 px-5 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:place-items-center mt-10 gap-5">
          <div>
            <Image
              className="my-5"
              src="/images/web-logo.png"
              width={150}
              height={150}
              alt="Picture of the author"
            />
            <p>
              Some footer text about the Agency. Just a little description to
              help people understand you better
            </p>
            <div className="flex gap-5 mt-3 mb-10">
              <Link href="/">
                <Image
                  src="/images/f-facebook.png"
                  width={30}
                  height={30}
                  alt="Picture of the author"
                />
              </Link>
              <Link href="/">
                <Image
                  src="/images/f-instagram.png"
                  width={30}
                  height={30}
                  alt="Picture of the author"
                />
              </Link>
              <Link href="/">
                <Image
                  src="/images/f-twitter.png"
                  width={30}
                  height={30}
                  alt="Picture of the author"
                />
              </Link>
              <Link href="/">
                <Image
                  src="/images/f-linkedin.png"
                  width={30}
                  height={30}
                  alt="Picture of the author"
                />
              </Link>
            </div>
          </div>
          <div className="list-none ">
            <h2 className="font-bold text-2xl md:mt-10">Quick Links</h2>
            <li className="mt-5">
              <Link href="/" className="hover:underline">
                Services
              </Link>
            </li>
            <li className="mt-5">
              <Link href="/" className="hover:underline">
                Portfolio
              </Link>
            </li>
            <li className="mt-5">
              <Link href="/" className="hover:underline">
                About Us
              </Link>
            </li>
            <li className="mt-5">
              <Link href="/" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </div>
          <div className="list-none md-mt-10">
            <h2 className="mb-5 font-bold text-2xl">Address</h2>
            <li>Design Agency Head Office.</li>
            <li>Airport Road</li>
            <li>United Arab Emirate</li>
          </div>
        </div>
        <footer>
          <p className="text-[14px] mt-5">Copyright Design Agency {currentYear}</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
