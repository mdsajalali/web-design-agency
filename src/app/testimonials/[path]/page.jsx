"use client";

import { useRouter } from "next/navigation";

const RandomURL = ({ params }) => {
  const route = useRouter();

  return (
    <div className=" flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl text-red-500 text-center ">
        oops! - <span className="font-bold">{params.path}</span> Page Not Found
      </h1>
      <button
        className=" mt-3 text-2xl underline cursor-pointer "
        onClick={() => route.push("/")}
      >
        GO TO HOME
      </button>
    </div>
  );
};

export default RandomURL;
