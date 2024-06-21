import React from "react";

const FirstPage = () => {
  return (
    <>
      <div className="h-5/6 flex w-full justify-center items-center bg-white">
        <div className="relative overflow-hidden">
          <div className="relative z-10">
            <div className="max-w-[85rem] bg-white mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
              <div className="max-w-3xl text-start mx-auto bg-white">
                <div className="mt-20 ">
                  <h1 className="about-text-h bg-white block text-sa text-xl md:text-4xl lg:text-5xl">
                    My Tech Journey
                  </h1>
                </div>

                <div className="max-w-3xl bg-white">
                  <p className="text-about bg-white mt-5 text-justify">
                    In the fast-paced digital world, I&apos;ve dived into
                    innovation, strategic problem-solving, and continuous
                    learning. Here&apos;s a look at the key principles that
                    guide me.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstPage;
