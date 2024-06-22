import React from "react";
import "@/app/components/About/ame.css";
import FirstPage from "./FirstPage";
import Secondpage from "./Secondpage";
import Thirdpage from "./Thirdpage";
import FourthPage from "./FourthPage";
import FivePage from "./FivePage";

const main = () => {
  return (
    <>
      <section id="about" className="h-auto About-Me bg-white">
        <div className="container bg-white">
          <div className="vertical_content bg-white">
            <div className="col col_left">
              <h2 className="vertical_heading mx-10 mt-10 bg-white">
                <span className="mt-56 text-3xl lg:text xl:text-6xl bg-white">
                  <p className="text-white">ABOUT ME</p>
                </span>
              </h2>
            </div>
            <div className="col col_right bg-white">
              <FirstPage />
              <Secondpage />
              <Thirdpage />
              <FourthPage />
              <FivePage />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default main;
