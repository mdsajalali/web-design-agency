import Link from "next/link";

const RandomURL = () => {
  return (
    <div className=" flex flex-col items-center justify-center h-screen">
      <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-red-500 dark:text-red-500">
        404
      </h1>
      <h2 className="text-2xl text-red-500 text-center ">
        oops! - <span className="font-bold"> </span> Page Not Found
      </h2>
      <button className=" mt-5 text-[20px] hover:underline   bg-[#20B15A] text-white px-3 py-2 rounded-lg cursor-pointer">
        <Link href="/">GO TO HOME PAGE</Link>
      </button>
    </div>
  );
};

export default RandomURL;
