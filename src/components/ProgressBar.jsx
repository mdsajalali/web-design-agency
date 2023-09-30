"use client"

import NextTopLoader from "nextjs-toploader";


const ProgressBar = () => {
  return (
    <>
      <NextTopLoader
        color="#20B15A"
        initialPosition={0.08}
        crawlSpeed={200}
        height={4}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={200}
        shadow="0 0 10px #20B15A,0 0 5px #20B15A"
      />
    </>
  );
};

export default ProgressBar;