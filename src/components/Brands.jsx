import Image from "next/image";

const Brands = () => {
  return (
    <div className="bg-white ">
      <div className="max-w-[1440px] mx-auto p-4 ">
        <div className="grid place-items-center grid-cols-3 md:grid-cols-5 gap-5 m-3 ">
          <Image
            src="/images/google.png"
            width={100}
            height={100}
            alt="Picture of the author"
          />
          <Image
            src="/images/trello.png"
            width={100}
            height={100}
            alt="Picture of the author"
          />
          <Image
            src="/images/monday.png"
            width={100}
            height={100}
            alt="Picture of the author"
          />
          <Image
            src="/images/notion.png"
            width={100}
            height={100}
            alt="Picture of the author"
          />
          <Image
            src="/images/slack.png"
            width={100}
            height={100}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
};

export default Brands;
