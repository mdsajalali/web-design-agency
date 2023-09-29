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
        <div className="relative  ">
          <input
            className="border border-black px-5 py-3 outline-none w-[300px] md:w-[500px] rounded-lg"
            type="text"
            placeholder="Enter Your Email Address"
          />
          <button className="bg-[#F55F1D] hover:bg-[#20B15A] px-5 py-2 rounded-lg text-white absolute  right-2  top-16 md:top-1 mr-7 md:mr-0   transition-all">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
