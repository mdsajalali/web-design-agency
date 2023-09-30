const Subscribe = () => {
  return (
    <div className="min-h-[50vh] md:min-h-[40vh] flex flex-col items-center justify-center ">
      <div className="text-center">
        <h1 className="text-[#20B15A] font-semibold">SUBSCRIBE</h1>
        <h2 className="my-3 font-bold text-2xl capitalize">
          Subscribe to get the latest <br /> news about us
        </h2>
        <p className="text-[#8B8B8B] mb-5 text-[14px]">
          Please drop your email below to get daily update about what we do
        </p>
        <div className="flex items-center  w-[350px] md:w-[500px] mx-auto ">
          <input
            type="text"
            placeholder="Email Address..."
            class="border border-gray-300 px-4 py-2 rounded-l focus:outline-none w-full"
          />
          <button className="bg-[#20B15A] text-white px-4 py-2 rounded-r hover:bg-[#F55F1D] focus:outline-none">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
