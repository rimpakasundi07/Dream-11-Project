import React from "react";
import banner from "../../../assets/bg-shadow.png";
import cricket from "../../../assets/banner-main.png";

const Banner = () => {
  return (
    <div>
      {/* banner section */}
      <div className="lg:px-8 px-4 lg:py-10 py-6 container mx-auto">
        <div
          className="hero rounded-xl  bg-black "
          style={{
            backgroundImage: `url(${banner})`,
          }}
        >
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-6xl space-y-3">
              <img className="mx-auto" src={cricket} alt="" />
              <h1 className=" lg:text-4xl text-2xl font-bold">
                Assemble Your Ultimate Dream 11 Cricket Team
              </h1>
              <p className="">Beyond Boundaries Beyond Limits</p>
              <button className="bg-[#E7FE29] font-semibold text-semibold rounded-md px-3 py-1 text-black ">
                Claim Free Credit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
