import React from "react";
import { SiCanva } from "react-icons/si";
import {
  TbBrandAdobeAfterEffect,
  TbBrandAdobePhotoshop,
  TbBrandAdobeIllustrator,
  TbBrandAdobePremier,
} from "react-icons/tb";
import Capcut from "../assets/capcut.png";

function Skill() {
  return (
    <div className="md:px-100 md:min-h-[50vh] m-auto text-white justify-center mt-15">
      <h1
        className="text-4xl md:text-6xl text-center"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay="100"
      >
        My Skills
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 justify-center gap-3 md:gap-5 py-20 text-center items-center">
        <div
          className="icons"
          data-aos="zoom-in-up"
          data-aos-once="true"
          data-aos-delay="100"
        >
          <TbBrandAdobeAfterEffect />
          <div className="label">
            <h1>Adobe AfterEffect</h1>
          </div>
        </div>
        <div
          className="icons"
          data-aos="zoom-in-up"
          data-aos-once="true"
          data-aos-delay="100"
        >
          <TbBrandAdobePhotoshop />
          <div className="label">
            <h1>Adobe Photoshop</h1>
          </div>
        </div>
        <div
          className="icons"
          data-aos="zoom-in-up"
          data-aos-once="true"
          data-aos-delay="100"
        >
          <TbBrandAdobePremier />
          <div className="label">
            <h1>Adobe Premier</h1>
          </div>
        </div>
        <div
          className="icons"
          data-aos="zoom-in-up"
          data-aos-once="true"
          data-aos-delay="100"
        >
          <TbBrandAdobeIllustrator />
          <div className="label">
            <h1>Adobe Illustrator</h1>
          </div>
        </div>
        <div
          className="icons"
          data-aos="zoom-in-up"
          data-aos-once="true"
          data-aos-delay="100"
        >
          <SiCanva />
          <div className="label">
            <h1>Canva</h1>
          </div>
        </div>
        <div
          className="icons"
          data-aos="zoom-in-up"
          data-aos-once="true"
          data-aos-delay="100"
        >
          <img src={Capcut} alt="" className="w-25 md:w-35" />
          <div className="label">
            <h1>Capcut</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
